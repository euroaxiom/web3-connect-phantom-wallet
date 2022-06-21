import React, { useState, } from 'react'

import "./App.css"

import { useNavigate, useLocation } from 'react-router-dom'

import {Connection, PublicKey} from '@solana/web3.js';
import {AnchorProvider, BN, Program, Provider, web3} from '@project-serum/anchor';
import idl from './idl.json'

import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets';
import {ConnectionProvider, useWallet, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
const {SystemProgram, Keypair} = web3;
const opts = {
    preflightCommitment: "processed"
}
const programID = new PublicKey(idl.metadata.address);
function Form({ setName, setEmail, setIp, setLocation, setPackaged, setStart_d, setTime, setEnd_d, setNo_Of_Slots, no_of_slots, name, email, ip, location, packaged, start_d, time, end_d }) {
  // console.log("waseem",walletAddress)
  let navigate = useNavigate();
  let Location = useLocation()


  const [solDayColor, setSolDayColor] = useState(true)
  const [solWeakColor, setSolWeakColor] = useState(false)
  const [solMonthColor, setSolMonthColor] = useState(false)
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const ColorChangePackageHandler = (text) => {
    switch (true) {
      case (text === "day"):
        setSolDayColor(true)
        setSolWeakColor(false)
        setSolMonthColor(false)
        setPackaged("0.5 Sol/Day")
        break;

      case (text === "weak"):
        setSolDayColor(false)
        setSolWeakColor(true)
        setSolMonthColor(false)
        setPackaged("1.5 Sol/Weak")
        break;
      case (text === "month"):

        setSolDayColor(false)
        setSolWeakColor(false)
        setSolMonthColor(true)
        setPackaged("4 Sol/Month")
        break;
      default:
        break;

    }
  }

  const HandleRequest = () => {
    if (name === "" && email === "" &&
      // ip ==="" && location ===""  && 
      start_d === "" && time === "" && end_d === "") {
      alert("Please fill all mandatory field")
      return true
    }
    if (EMAIL_REGEX.test(email) === false) {
      alert("You have entered an invalid email address!")
      return true
    }
    if (no_of_slots < 1) {
      alert("Select No_of_slots grater then 0!")
      return true
    }

    navigate("/details", { state: { name: Location.state.name } })

  }
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
  const confirmTransaction = async () => {
    const provider = await getProvider()
    console.log("Provider: ", provider);
    const receiver = new web3.PublicKey("B6BoFL6JdEVCw2QWTgyyEttAR4qKSWXhEReaEfcaYtmR");
    const treasury = new web3.PublicKey("8z7fAEeff5cRir9DH52cQupsfmC2Y3yPia8urFfrnhwc");
    console.log("Treasury: ", treasury);
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

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // const HanleEndDate =()=>{
  //   if(start_d !== ""){
  //     return start_d
  //   }
  //   // else{
  //   //   alert("Please select start date!")
  //   // }

  // }


  return (
    <>
      <div className='bg'>
        <img src="images/bg.png" alt="" />
      </div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <a className="navbar-brand m-0" href="/">
            <img src="images/logo.png" alt="" />
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <p className='nav-link'
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "poppins"
                }}>
                Wallet Address
                <span style={{ color: "red" }}> : {Location.state.name}</span>
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <div className='text-center box-style'>
        <p className='text-center text-white top-heading' >Add <span >Details</span> here</p>
        <div className='row px-2'>
          <div className='col-lg-6'>

            <div className='input-container' style={{ marginRight: 30 }}>
              <label htmlFor='full' >Full Name <span style={{ color: "red" }}>*</span></label>
              <input placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='input-container' style={{ marginRight: 30 }}>
              <label htmlFor='full' >Email <span style={{ color: "red" }}>*</span></label>
              <input placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
        </div>
        {/* <div className='row px-2'>
          <div className='col-lg-6'>
            <div className='input-container' style={{ marginRight: 30 }}>
              <label htmlFor='full' >IP <span style={{ color: "red" }}>*</span></label>
              <input placeholder='Enter IP' onChange={(e)=> setIp(e.target.value)} />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='input-container' style={{ marginRight: 30 }}>
              <label htmlFor='full' >Location <span style={{ color: "red" }}>*</span></label>
              <input placeholder='Enter Location' onChange={(e)=> setLocation(e.target.value)} />
            </div>
          </div>
        </div> */}
        <p className='input-container' style={{ color: "#FFFFFF", marginLeft: 9 }}>Select Packages <span style={{ color: "red" }}>*</span></p>
        <div className='row px-2 custom-padding'>
          <div className='col-lg-4 col-md-4' onClick={() => ColorChangePackageHandler("day")} >
            <div className='input-container' style={{ backgroundColor: solDayColor ? "rgba(255, 255, 255, 0.095)" : null, padding: 10, borderRadius: 26, width: "75%" }}>
              <img src="images/vission.png" alt="" />
              <p>0.5 Sol/Day</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4' onClick={() => ColorChangePackageHandler("weak")}>
            <div className='input-container' style={{ backgroundColor: solWeakColor ? "rgba(255, 255, 255, 0.095)" : null, padding: 10, borderRadius: 26, width: "75%" }}>
              <img src="images/vission-1.png" alt="" />
              <p>1.5 Sol/Weak</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4' onClick={() => ColorChangePackageHandler("month")}>
            <div className='input-container' style={{ backgroundColor: solMonthColor ? "rgba(255, 255, 255, 0.095)" : null, padding: 10, borderRadius: 26, width: "75%" }}>
              <img src="images/vission.png" alt="" />
              <p>4 Sol/Month</p>
            </div>
          </div>
        </div>

        <div className='row ps-3 pe-5'>
          <div className='col-lg-4'>
            <div className='input-container' >
              <label htmlFor='full' >Start Date <span style={{ color: "red" }}>*</span></label>
              <input type="date" min={disablePastDate()} placeholder='Enter IP' style={{ width: "100%" }} onChange={(e) => setStart_d(e.target.value)} />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='input-container' >
              <label htmlFor='full' >Time <span style={{ color: "red" }}>*</span></label>
              <input type="time" placeholder='Enter Location' onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='input-container' >
              <label htmlFor='full' >End Date <span style={{ color: "red" }}>*</span></label>
              <input type="date" value={end_d} min={start_d} placeholder='Enter Location' style={{ width: "100%" }} onChange={(e) => start_d !== "" ? setEnd_d(e.target.value) : alert("Please select start date!")} />
            </div>
          </div>
        </div>
        <div className='row ps-3 pe-5'>
          <div className='col-lg-5'>
            <div className='input-container' >
              <label htmlFor='full' >No of slots <span style={{ color: "red" }}>*</span></label>
              <input type='number' value={no_of_slots} min="1" onChange={(e) => setNo_Of_Slots(e.target.value)} style={{ width: "100%" }} />
            </div>
          </div>

        </div>
        <div className='text-center'>
          <button className='btn' onClick={() => HandleRequest()}>Checkout</button>
        </div>
      </div>
    </>

  )
}

export default Form