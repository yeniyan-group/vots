"use client";

import { useState } from "react";
import { abi } from "@/contracts/abi";
import { getContractAddress } from "@/hooks/use-election-write-operations";
import { usePollingUnitSession } from "@/hooks/use-polling-unit-session";
import { usePublicClient, useChainId } from "wagmi";
import type { ValidateVoterForVotingParams } from "@/hooks/use-election-write-operations";

export function useSessionValidateVoter() {
  const { session } = usePollingUnitSession();
  const publicClient = usePublicClient();
  const chainId = useChainId();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hash, setHash] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateVoterForVoting = async (
    params: ValidateVoterForVotingParams,
  ): Promise<{ success: boolean; message: string; hash?: string }> => {
    if (!session.isValid || !session.walletClient) {
      const errorMsg = "No valid polling unit session";
      setError(errorMsg);
      return { success: false, message: errorMsg };
    }

    setIsLoading(true);
    setError(null);
    setHash(null);
    setIsConfirming(false);
    setIsSuccess(false);

    try {
      const contractAddress = getContractAddress(chainId);
      if (!contractAddress) {
        throw new Error("Contract not deployed on this network");
      }

      const hash = await session.walletClient.writeContract({
        address: contractAddress,
        abi,
        functionName: "validateVoterForVoting",
        args: [params.voterMatricNo, params.voterName, params.electionTokenId],
        account: session.walletClient.account,
      });

      setHash(hash);
      setIsConfirming(true);

      // const receipt = await publicClient.waitForTransactionReceipt({
      //   hash,
      // });

      //if (receipt.status === "success") {

        
      if (true) {
        setIsSuccess(true);
        return {
          success: true,
          message: "Voter validated successfully",
          hash,
        };
      } else {
        throw new Error("Transaction failed");
      }
    } catch (err: any) {
      console.error("Validate voter error:", err);
      let errorMessage = "Voter validation failed";

      if (err instanceof Error) {
        if (err.message.includes("VoterNotAccredited")) {
          errorMessage = "Voter has not been accredited yet";
        } else if (err.message.includes("VoterAlreadyVoted")) {
          errorMessage = "Voter has already voted";
        } else if (err.message.includes("VoterNotRegistered")) {
          errorMessage = "Voter not registered";
        } else if (err.message.includes("InvalidVoterDetails")) {
          errorMessage = "Invalid voter details provided";
        } else if (err.message.includes("ElectionNotActive")) {
          errorMessage = "Election is not currently active";
        } else {
          errorMessage = err.message;
        }
      }

      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsLoading(false);
      setIsConfirming(false);
    }
  };

  return {
    validateVoterForVoting,
    isLoading: isLoading || isConfirming,
    isSuccess,
    error,
    hash,
    isConfirming,
  };
}
