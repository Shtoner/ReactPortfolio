import * as React from 'react'
import { useDebounce } from 'use-debounce'
import {
 useNetwork,
 useSwitchNetwork,
 usePrepareSendTransaction,
 useSendTransaction,
 useWaitForTransaction,
} from 'wagmi'
import{polygon} from 'wagmi/chains'
import{utils} from 'ethers'
import App from './chainstest'

export function SendTransaction() {
 const [to, setTo] = React.useState('')
 const [debouncedTo] = useDebounce(to, 500)

 const [amount, setAmount] = React.useState('')
 const [debouncedAmount] = useDebounce(amount, 500)
const chain= useNetwork()
const { chains, error, pendingChainId, switchNetwork } =
useSwitchNetwork()
console.log(chain.name)
 const { config } = usePrepareSendTransaction({
 request: {
 to: debouncedTo,
 value: debouncedAmount ? utils.parseEther(debouncedAmount) : undefined,
 },
 chainId: chain.name
 })
 const { data, sendTransaction } = useSendTransaction(config)

 const { isLoading, isSuccess } = useWaitForTransaction({
 hash: data?.hash,
 })

 return (
    <>
    <h2>This form allows you to send transactions by specifying public address and wallet</h2>
 <form
 onSubmit={(e) => {
 e.preventDefault()
 sendTransaction?.()
 }}
 >
 <input
 aria-label="Recipient"
 onChange={(e) => {setTo(e.target.value)
    // console.log('name = ' +chain)
 }}
 placeholder="0xA0Cf…251e"
 value={to}
 />
 <input
 aria-label="Amount (ether)"
 onChange={(e) => setAmount(e.target.value)}
 placeholder="0.05"
 value={amount}
 />
 <button disabled={isLoading || !sendTransaction || !to || !amount}>
 {isLoading ? 'Sending...' : 'Send'}
 </button>
 {isSuccess && (
 <div>
 Successfully sent {amount} ether to {to}
 <div>
 <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
 </div>
 </div>
 )}
 </form>
 {chain && <div>Connected to {chain.name}</div>}

{chains.map((x) => (
<button
disabled={!switchNetwork || x.id === chain?.id}
key={x.id}
onClick={() => switchNetwork?.(x.id)}
>
{x.name}
{isLoading && pendingChainId === x.id && ' (switching)'}
</button>
))}

<div>{error && error.message}</div>

 </>
 )
}
