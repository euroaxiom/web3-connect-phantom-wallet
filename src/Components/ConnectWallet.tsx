
import { useEffect, useState } from "react";
import {
  PublicKey,
  Transaction,
} from "@solana/web3.js";

import { useNavigate, } from 'react-router-dom'


import "./App.css";


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



function ConnectWallet() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(undefined);

  let navigate = useNavigate();



  // detect phantom provider exists
  /**
 * @description gets Phantom provider, if it exists
 */
  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
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
        navigate("/form")
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


  useEffect(() => {
    const provider = getProvider();
    console.log("akram", provider)
    if (provider) {
      setProvider(provider);
      connectWallet()
    }
    else {
      setProvider(undefined);
    }

  }, []);

  console.log("asl;jdflkasdjf", provider)
  console.log("wallet key", walletKey)
  return (
    <>
      <div className='bg'>
        <img src="images/bg.png" alt="" />
      </div>

      <div className="Main_container">
        <div className='text-center wallet_box' >
          <p className='text-center wallet_heading' style={{ marginBottom: 20 }} onClick={() => navigate("/form")}>Connect to Phantom Wallet</p>

          {/* <header className="App-header"> */}
          {provider && !walletKey && (
            <button
              style={{
                fontSize: "16px",
                padding: "15px",
                fontWeight: "bold",
                borderRadius: "5px",
                marginBottom: 20,
                borderColor: "#FFFFFF"
                // backgroundColor:"#000000"
              }}
              onClick={connectWallet}
            >
              Connect to Phantom Wallet
            </button>
          )}

          {provider && walletKey && (
            <div>
              <p>Connected account</p>


              <button
                style={{
                  fontSize: "16px",
                  padding: "15px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  margin: "15px auto",
                }}
                onClick={disconnectWallet}
              >
                Disconnect
              </button>
            </div>
          )}

          {!provider && (
            <p>
              No provider found. Install{" "}
              <a href="https://phantom.app/">Phantom Browser extension</a>
            </p>
          )}

          <p style={{ color: "#FFFFFF" }}>
            Built by{" "}
            <a
              href="https://axiomworld.net/"
              target="_blank"
              rel="noreferrer"
              className="twitter-link"
            >
              <span style={{ color: "#FFFFFF" }}>@AxiomWorld</span>
            </a>
          </p>
          {/* </header> */}
        </div>
      </div>

    </>
  )
}

export default ConnectWallet;

