// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Connection, PublicKey} from '@solana/web3.js';
import {AnchorProvider, BN, Program, Provider, web3} from '@project-serum/anchor';
import idl from './idl.json';

import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';
import {ConnectionProvider, useWallet, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');

const wallets = [
    /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
    new PhantomWalletAdapter()
]

const {SystemProgram, Keypair} = web3;
const opts = {
    preflightCommitment: "processed"
}
const programID = new PublicKey(idl.metadata.address);


function App() {
    const wallet = useWallet();
    async function getProvider() {
        /* create the provider and return it to the caller */
        /* network set to local network for now */
        const network = "https://api.devnet.solana.com";
        const connection = new Connection(network, opts.preflightCommitment);

        return new AnchorProvider(
            connection, wallet, opts.preflightCommitment,
        );
    }

    async function confirmTransaction() {
        const provider = await getProvider()
        console.log("Provider: ", provider);
        const receiver = new web3.PublicKey("B6BoFL6JdEVCw2QWTgyyEttAR4qKSWXhEReaEfcaYtmR");
        const treasury = new web3.PublicKey(window.solana.publicKey.toString());
        console.log("Treasury: ", window.solana.publicKey.toString());
        const lamports = new BN(1000000000);
        /* create the program interface combining the idl, program ID, and provider */
        const program = new Program(idl, programID, provider);
        try {
            /* interact with the program via rpc */
            await program.methods.transferLamports(lamports).accounts({
                from: treasury,
                to: receiver,
                systemProgram: SystemProgram.programId,
            }).rpc();

            // return (
            //   <div className="App">
            //     <header className="App-header">
            //       <img src={logo} className="App-logo" alt="logo" />
            //       <p>
            //         Edit <code>src/App.js</code> and save to reload.
            //       </p>
            //       <a
            //         className="App-link"
            //         href="https://reactjs.org"
            //         target="_blank"
            //         rel="noopener noreferrer"
            //       >
            //         Learn React
            //       </a>
            //     </header>
            //   </div>
            // );
        } catch (err) {
            console.log("Transaction error: ", err);
        }
    }

    if (!wallet.connected) {
        /* If the user's wallet is not connected, display connect wallet button. */
        console.log("in If condition")
        return (

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
                <h3>Confirm Transaction App</h3>
                <WalletMultiButton/>
            </div>
        )
    } else {
        console.log("in else condition")
        return (
            <div className="App">
                <h3>Confirm Transaction App</h3>
                <div>

                    <button onClick={confirmTransaction}>Confirm Transaction</button>


                </div>
            </div>
        );
    }



}

const AppWithProvider = () => (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <App/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
)
export default AppWithProvider;
