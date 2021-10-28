/* pages/create-item.js */
import { useState } from 'react'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import Image from 'next/image'

export default function HowTo() {

  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col pb-12">
        <h2 className="text-2l py-2">1. To purchase or mint NFT, please install Metamask</h2>        
        <h2 className="text-2l py-2">2. Add Test Network</h2>        
        <Image src="testnetwork.jpg" style={{maxWidth: "600px"}} alt="Test Network" />

        <h2 className="text-2l py-2">3. Refill Matic test coin at <a href="https://faucet.polygon.technology" rel="noreferrer" target="_blank">https://faucet.polygon.technology</a></h2>        

        <h2 className="text-2l py-2">4. Currently I&apos;m using https://infura.io/ as RPC</h2>

        <br/>

        <h2 className="text-2l py-2">   List of testnets are obtained here <a href="https://docs.polygon.technology/docs/develop/network-details/network/">https://docs.polygon.technology/docs/develop/network-details/network/</a></h2>        
        <h2 className="text-2l py-2">This store is created using the following stack</h2>        
        <Image src="stacks.jpg"  style={{maxWidth: "600px"}} alt="Technology Stacks" />


      </div>
    </div>
  )
}
