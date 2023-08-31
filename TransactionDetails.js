const algosdk = require('algosdk');

const algodToken={
    "x-api-key": "H9RTxqnP9K88AidwnRF9Z43wUJmiFqth3b1L45Sz" // fill in yours
  };
const algodServer = 'https://testnet-algorand.api.purestake.io/ps2'; 

const algodPort = "";

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

async function fetchTransactionDetails(transactionId) {
  try {
    const txInfo = await algodClient.pendingTransactionInformation(transactionId).do();
    return txInfo;
  } catch (error) {
    console.error('Error fetching transaction details:', error);
    return null;
  }
}

const transactionId = '3QLTEWEC2JIDHCH7AHJGQJZB32NET4DEEQRK6C53XAYWK5WXLIVA';

fetchTransactionDetails(transactionId)
  .then(txInfo => {
    if (txInfo) {
      console.log('Transaction Details:', txInfo);
    } else {
      console.log('Transaction not found or an error occurred.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
