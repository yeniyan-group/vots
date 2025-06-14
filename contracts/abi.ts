export const abi = [
  {
    inputs: [{ internalType: "string", name: "electionName", type: "string" }],
    name: "VotsEngine__DuplicateElectionName",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "VotsEngine__ElectionContractNotFound",
    type: "error",
  },
  { inputs: [], name: "VotsEngine__ElectionNameCannotBeEmpty", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newElectionTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "electionName",
        type: "string",
      },
    ],
    name: "ElectionContractedCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "voterMatricNo", type: "string" },
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "accrediteVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "startTimeStamp", type: "uint256" },
      { internalType: "uint256", name: "endTimeStamp", type: "uint256" },
      { internalType: "string", name: "electionName", type: "string" },
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "matricNo", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "uint256", name: "voteFor", type: "uint256" },
          { internalType: "uint256", name: "voteAgainst", type: "uint256" },
        ],
        internalType: "struct Election.CandidateInfoDTO[]",
        name: "candidatesList",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "matricNo", type: "string" },
        ],
        internalType: "struct Election.VoterInfoDTO[]",
        name: "votersList",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "pollingUnitAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "pollingOfficerAddresses",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "electionCategories",
        type: "string[]",
      },
    ],
    name: "createElection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "electionName", type: "string" }],
    name: "electionExists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "electionExistsByTokenId",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getAccreditedVotersCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getAllAccreditedVoters",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          {
            internalType: "enum Election.VoterState",
            name: "voterState",
            type: "uint8",
          },
        ],
        internalType: "struct Election.ElectionVoter[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getAllCandidates",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "uint256", name: "votes", type: "uint256" },
          { internalType: "uint256", name: "votesAgainst", type: "uint256" },
          {
            internalType: "enum Election.CandidateState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Election.ElectionCandidate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getAllCandidatesInDto",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "matricNo", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "uint256", name: "voteFor", type: "uint256" },
          { internalType: "uint256", name: "voteAgainst", type: "uint256" },
        ],
        internalType: "struct Election.CandidateInfoDTO[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllElectionsSummary",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "electionId", type: "uint256" },
          { internalType: "string", name: "electionName", type: "string" },
          {
            internalType: "enum Election.ElectionState",
            name: "state",
            type: "uint8",
          },
          { internalType: "uint256", name: "startTimestamp", type: "uint256" },
          { internalType: "uint256", name: "endTimestamp", type: "uint256" },
          {
            internalType: "uint256",
            name: "registeredVotersCount",
            type: "uint256",
          },
        ],
        internalType: "struct VotsEngine.ElectionSummary[]",
        name: "electionsSummaryList",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getAllVotedVoters",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          {
            internalType: "enum Election.VoterState",
            name: "voterState",
            type: "uint8",
          },
        ],
        internalType: "struct Election.ElectionVoter[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getAllVoters",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          {
            internalType: "enum Election.VoterState",
            name: "voterState",
            type: "uint8",
          },
        ],
        internalType: "struct Election.ElectionVoter[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getEachCategoryWinner",
    outputs: [
      {
        components: [
          { internalType: "string", name: "matricNo", type: "string" },
          {
            components: [
              { internalType: "string", name: "name", type: "string" },
              { internalType: "uint256", name: "votes", type: "uint256" },
              {
                internalType: "uint256",
                name: "votesAgainst",
                type: "uint256",
              },
              {
                internalType: "enum Election.CandidateState",
                name: "state",
                type: "uint8",
              },
            ],
            internalType: "struct Election.ElectionCandidate",
            name: "electionCandidate",
            type: "tuple",
          },
          { internalType: "string", name: "category", type: "string" },
        ],
        internalType: "struct Election.ElectionWinner[][]",
        name: "",
        type: "tuple[][]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getElectionAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getElectionInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "electionId", type: "uint256" },
          { internalType: "address", name: "createdBy", type: "address" },
          { internalType: "string", name: "electionName", type: "string" },
          {
            internalType: "enum Election.ElectionState",
            name: "state",
            type: "uint8",
          },
          { internalType: "uint256", name: "startTimestamp", type: "uint256" },
          { internalType: "uint256", name: "endTimestamp", type: "uint256" },
          {
            internalType: "uint256",
            name: "registeredVotersCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "accreditedVotersCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votedVotersCount",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "electionCategories",
            type: "string[]",
          },
          {
            components: [
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "matricNo", type: "string" },
              { internalType: "string", name: "category", type: "string" },
              { internalType: "uint256", name: "voteFor", type: "uint256" },
              { internalType: "uint256", name: "voteAgainst", type: "uint256" },
            ],
            internalType: "struct Election.CandidateInfoDTO[]",
            name: "candidatesList",
            type: "tuple[]",
          },
        ],
        internalType: "struct VotsEngine.ElectionInformation",
        name: "electionInformation",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getElectionStats",
    outputs: [
      {
        internalType: "uint256",
        name: "registeredVotersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accreditedVotersCount",
        type: "uint256",
      },
      { internalType: "uint256", name: "votedVotersCount", type: "uint256" },
      {
        internalType: "uint256",
        name: "registeredCandidatesCount",
        type: "uint256",
      },
      { internalType: "uint256", name: "pollingOfficerCount", type: "uint256" },
      { internalType: "uint256", name: "pollingUnitCount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "electionName", type: "string" }],
    name: "getElectionTokenId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getPollingOfficerCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getPollingUnitCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getRegisteredCandidatesCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getRegisteredVotersCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalElectionsCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "getVotedVotersCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "updateElectionState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "validateAddressAsPollingOfficer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "validateAddressAsPollingUnit",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "voterMatricNo", type: "string" },
      { internalType: "string", name: "voterName", type: "string" },
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "validateVoterForVoting",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "voterMatricNo", type: "string" },
      { internalType: "string", name: "voterName", type: "string" },
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "matricNo", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "uint256", name: "voteFor", type: "uint256" },
          { internalType: "uint256", name: "voteAgainst", type: "uint256" },
        ],
        internalType: "struct Election.CandidateInfoDTO[]",
        name: "candidatesList",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "electionTokenId", type: "uint256" },
    ],
    name: "voteCandidates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
