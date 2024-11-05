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
                name: "goldWeight",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "date",
                type: "uint256",
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
            name: "goldWeight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
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
            name: "_name",
            type: "string",
          },
        ],
        name: "isRecord",
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
                name: "goldWeight",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "date",
                type: "uint256",
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
            name: "_goldWeight",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "_goldInfo",
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
