/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "buyerName",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "aadhaarNumber",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "goldHUID",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "goldInfo",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "date",
            type: "string",
          },
        ],
        name: "RecordAdded",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "HUIDToIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        name: "NameToIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        name: "aadhaarToIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "aadhaarToIndicesList",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_aadhaarNumber",
            type: "string",
          },
        ],
        name: "getAllRecordsForAadhaar",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "buyerName",
                type: "string",
              },
              {
                internalType: "string",
                name: "aadhaarNumber",
                type: "string",
              },
              {
                internalType: "string",
                name: "goldInfo",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "goldHUID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "date",
                type: "string",
              },
            ],
            internalType: "struct GoldSupplyChain.userInformation[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getLength",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_index",
            type: "uint256",
          },
        ],
        name: "getValue",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "buyerName",
                type: "string",
              },
              {
                internalType: "string",
                name: "aadhaarNumber",
                type: "string",
              },
              {
                internalType: "string",
                name: "goldInfo",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "goldHUID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "date",
                type: "string",
              },
            ],
            internalType: "struct GoldSupplyChain.userInformation",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "goldLedger",
        outputs: [
          {
            internalType: "string",
            name: "buyerName",
            type: "string",
          },
          {
            internalType: "string",
            name: "aadhaarNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "goldInfo",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "goldHUID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_aadhaarNumber",
            type: "string",
          },
        ],
        name: "isRecordByAadhaar",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "buyerName",
                type: "string",
              },
              {
                internalType: "string",
                name: "aadhaarNumber",
                type: "string",
              },
              {
                internalType: "string",
                name: "goldInfo",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "goldHUID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "date",
                type: "string",
              },
            ],
            internalType: "struct GoldSupplyChain.userInformation",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_goldHUID",
            type: "uint256",
          },
        ],
        name: "isRecordByHUID",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "buyerName",
                type: "string",
              },
              {
                internalType: "string",
                name: "aadhaarNumber",
                type: "string",
              },
              {
                internalType: "string",
                name: "goldInfo",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "goldHUID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "date",
                type: "string",
              },
            ],
            internalType: "struct GoldSupplyChain.userInformation",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        name: "isRecordByName",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "buyerName",
                type: "string",
              },
              {
                internalType: "string",
                name: "aadhaarNumber",
                type: "string",
              },
              {
                internalType: "string",
                name: "goldInfo",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "goldHUID",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "date",
                type: "string",
              },
            ],
            internalType: "struct GoldSupplyChain.userInformation",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_aadhaarNumber",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "_goldHUID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "_goldInfo",
            type: "string",
          },
          {
            internalType: "string",
            name: "_date",
            type: "string",
          },
        ],
        name: "newRecord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
};

export default nextConfig;
