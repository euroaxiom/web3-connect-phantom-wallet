import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ConnectWallet from './Components/ConnectWallet'
import DetailsScreen from './Components/DetailsScreen'
import Form from './Components/Form'
import HomeScreen from './Components/HomeScreen'




// import Main from './Components/Main'

function App() {
  const [walletAddress,setWalletAddress]=useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [ip,setIp]=useState("")
  const [location,setLocation ]=useState("")
  const [packaged,setPackaged ]=useState("0.5 Sol/Day")
  const [start_d,setStart_d]=useState("")
  const [time,setTime]=useState("")
  const [end_d,setEnd_d ]=useState("")
  const [no_of_slots,setNo_Of_Slots]=useState(1)


  
  return (
   <>
   
    <Router>
        <Routes>
        <Route path="/" element={<HomeScreen setWalletAddress={setWalletAddress} />} />
        <Route path="/connectWallet" element={<ConnectWallet />} />
        <Route path="/form" element={<Form setName={setName} setEmail={setEmail} setIp={setIp} setLocation={setLocation} setPackaged={setPackaged} setStart_d={setStart_d} setTime={setTime} setEnd_d={setEnd_d} setNo_Of_Slots={setNo_Of_Slots} no_of_slots={no_of_slots} name={name} email={email} ip={ip} location={location} packaged={packaged} start_d={start_d} time={time} end_d={end_d}/>} />
        <Route path="/details" element={<DetailsScreen name={name} email={email} ip={ip} location={location} packaged={packaged} start_d={start_d} time={time} end_d={end_d} no_of_slots={no_of_slots}/>} />

         

        </Routes>
      </Router>
   </>
  )
}

export default App