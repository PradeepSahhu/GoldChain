import { ethers } from "ethers";

export default async function connectToContract() {
  const contractAddress = "0x08cA0ce96De2A9E0d17b52E55304989cbe794557";

  const tokenAbi = process.env.abi;

  if (window.ethereum) {
    console.log("Metamask is installed");
    // setEthWindow(window.ethereum);
  }

  if (window.ethereum) {
    const accountsArray = await window.ethereum.request({
      method: "eth_accounts",
    });
    // setAcc(accountsArray[0]);
    console.log(accountsArray[0]);
  }

  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    // setAcc(accounts[0]);
  }
  try {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.BrowserProvider(window.ethereum);

    // // Get the signer
    // const signer = await provider.getSigner();
    console.log(tokenAbi);

    let blockchainID = await window.ethereum.request({ method: "eth_chainId" });
    console.table(parseInt(blockchainID));

    const provider = new ethers.BrowserProvider(window.ethereum);

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    const signer = await provider.getSigner();

    console.log(provider);
    console.log(signer);

    // Create a new instance of the contract with the signer
    const contract = new ethers.Contract(contractAddress, tokenAbi, signer);

    console.log("The blockchain id is : " + blockchainID);
    // console.log(blockchainName);
    console.log("The contract instance is : " + contract);
    return contract;
  } catch (error) {
    console.error("User rejected the request:", error);
  }
}
