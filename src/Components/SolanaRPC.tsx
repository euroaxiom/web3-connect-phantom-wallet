import React, { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}


export default function SolanaRPC() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(undefined);
  const [showBox, setShowBox] = useState(false)
  let navigate = useNavigate();
  const getProvider = (): PhantomProvider | undefined => {
    console.log("inside provider")
    if ("solana" in window) {
      console.log("inside if statement")

      // @ts-ignore
      const provider = window.solana as any;
      console.log("provider", provider)
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };
  /**
   * @description prompts user to connect wallet if it exists
   */
  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
        localStorage.setItem("wallet",response.publicKey.toString())
        navigate("/form",{state:{id:1,name:response.publicKey.toString()}})
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  /**
   * @description disconnect Phantom wallet
   */
  const disconnectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (walletKey && solana) {
      await (solana as PhantomProvider).disconnect();
      setWalletKey(undefined);
    }
  };

  const CheckExension = async() => {
    console.log("12")
    const provider = await getProvider();
    console.log("akram", provider)
    if (provider) {
      setProvider(provider);
      connectWallet()
      console.log("connect wallet")
    }
    else {
      setProvider(undefined);
      setShowBox(true)
      console.log("Not Connect walllet")
    }
  }
  // useEffect(() => {
  // const provider = getProvider();
  // console.log("akram", provider)
  // if (provider) {
  //   setProvider(provider);
  //   connectWallet()
  // }
  // else {
  //   setProvider(undefined);
  // }

  // }, []);

  
  return (
    <>
      {
        showBox === true ?
          <div className="alert-add">

            <div className="alert-box">
              <i className='fas fa-times hide_alert_box' onClick={() => setShowBox(false)}></i>
              <h2>Add Extension for Phantom</h2>
              Click on <a href="https://phantom.app/" target="_blank">Link</a> to add the extension
            </div>


          </div>
          :
          null
      }
      <div className="row align-items-center solana-rpc">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p>
            <span>Solana RPC</span> nodes for NFT <br /> minting enterprise <br />
            infrastructure a cluter of <br /> nodes accross the world at <br /> competitive
            price
          </p>
          <button type="button" 
          onClick={() => CheckExension()}
          >Start Minting</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src="images/nodes.png" alt="" />
        </div>
      </div>
    </>
  );
}
