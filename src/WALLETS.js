import './App.css';
import { Web3Button, useWeb3Modal } from "@web3modal/react";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { chain, configureChains, createClient, WagmiConfig, useAccount,useConnect,useDisconnect,useEnsAvatar,useEnsName } from "wagmi";
import App from './chainstest'
import { SendTransaction } from './sendTransaction.';
const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "60e3bc71889b7fb0e7396eded3800afe" })
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Moda", chains }),provider
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);



export default function WallletButton() {
  const { address, connector, isConnected } = useAccount()
  
  function ButtonConnect() {
    const { isOpen, open, close } = useWeb3Modal();
    const { disconnect } = useDisconnect()
      console.log(isOpen)
      console.log(address)
      console.log(isConnected)
      
      return <><Web3Button onClick={console.log('s')}/>
      </>
  }
    if(isConnected){
      return(
      <>
      <h3 id='nomargin'>Your connected address:</h3>
      <h3 id='nomargin'>{address}</h3>

      <WagmiConfig client={wagmiClient}>
        <SendTransaction/>
        {/* <App/> */}
        <ButtonConnect />
      </WagmiConfig>

      <Web3Modal
        projectId="60e3bc71889b7fb0e7396eded3800afe"
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
    </>)
    }
  return (
    <>
      <h2>Connect to your favorite wallet</h2>

      <WagmiConfig client={wagmiClient}>
        <ButtonConnect />
      </WagmiConfig>

      <Web3Modal
        projectId="60e3bc71889b7fb0e7396eded3800afe"
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
    </>
  );
}

// export default function WalletButton() {
//   const { address, connector, isConnected } = useAccount()
//   const { data: ensAvatar } = useEnsAvatar({ address })
//   const { data: ensName } = useEnsName({ address })
//   const { connect, connectors, error, isLoading, pendingConnector } =
//     useConnect()
//   const { disconnect } = useDisconnect()
//    function ButtonConnect() {
//     const { isOpen, open, close } = useWeb3Modal();
//     const { address, isConnecting, isDisconnected } = useAccount()
//       console.log(isOpen)
//       console.log(address)
//       console.log(isConnecting)
//       return <Web3Button onClick={console.log('s')}/>;
//     }
//   if (isConnected) {
//     return (
//       <div>
//         <img src={ensAvatar} alt="ENS Avatar" />
//         <div>{ensName ? `${ensName} (${address})` : address}</div>
//         <div>Connected to {connector.name}</div>
//         <button onClick={disconnect}>Disconnect</button>
//       </div>
//     )
//   }
 
//   return (
//     <div>
//         <WagmiConfig client={wagmiClient}>
//         <ButtonConnect />
//         </WagmiConfig>

//          <Web3Modal
//         projectId="60e3bc71889b7fb0e7396eded3800afe"
//         theme="dark"
//         accentColor="default"
//         ethereumClient={ethereumClient}
//       />
//       {connectors.map((connector) => (
//         <button
//           disabled={!connector.ready}
//           key={connector.id}
//           onClick={() => connect({ connector })}
//         >
//           {connector.name}
//           {!connector.ready && ' (unsupported)'}
//           {isLoading &&
//             connector.id === pendingConnector?.id &&
//             ' (connecting)'}
//         </button>
//       ))}
 
//       {error && <div>{error.message}</div>}
//     </div>
//   )
// }


