import React, { useState } from 'react'

import './App.css'
import emailjs from '@emailjs/browser';

import { useLocation } from 'react-router-dom'

function DetailsScreen({ no_of_slots, email, name, }) {

    const IP_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    const [ip, setIP] = useState("")
    // const [list,setList]=useState([])
    
    const [username, setUsername] = useState("")
    const [link, setLink] = useState("https:/saljdflajksdflkjsadfkljsalkdfj")
    const [duration, setDuration] = useState("")
    const [start_t, setStart_t] = useState("")
    const [userLocation, setUserLocation] = useState("")

    const [list, setList] = useState([])

    let Location = useLocation()
    //   console.log("imran",Location.state)
    const emailParams = {
        to_email: email,
        from_name: "AxiomWorld",
        to_name: name,
        message: "We are more than thankful that you Purchase our Sol. We hope you enjoyed the experience.",
    };
    const [showBox, setShowBox] = useState(false)

    const publicKey = "DrlNI8GGBJ5yfMKw0";
    const SendEmail = async () => {
        await emailjs.send("12345678", "template_kifqx6g", emailParams, publicKey).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const GenerateLink = () => {
      //  e.preventDefault()
    
        let temlist=[]
        // if (IP_REGEX.test(ip) === false) {
        //     alert("You have entered an invalid IP address!")
        //     return true
        // }
    
            temlist.push({
                name: username,
                ip: ip,
                link: link,
                location: userLocation,
                start_time: start_t,
                duration: duration
            })
    
        const newArray=list.concat(temlist)
        //newArray

        //last.push(newArray)
        console.log("sadfljksa;dlfj",newArray)
        console.log(list. length);
        setList(newArray)
        // setShowBox(false)
    }

    //console.log(list)
    console.log("list length", list.length);
    return (
        <>

            {
                showBox === true ?
                    <div className="alert-add">

                        <div className="alert-box">
                            <i className='fas fa-times hide_alert_box' onClick={() => setShowBox(false)}></i>
                            <h2 style={{ textAlign: "center" }}>Muhammad Akram</h2>
                            <div className='row px-2'>
                                <div className='col-lg-6'>
                                    <div style={{ marginRight: 30 }}>
                                        <label htmlFor='full' style={{ color: "#000" }} >Name <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='Enter name' style={{ paddingLeft: 5, color: "#000" }}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className='row px-2' style={{ marginTop: 15 }}>
                                <div className='col-lg-6'>
                                    <div style={{ marginRight: 30 }}>
                                        <label htmlFor='full' style={{ color: "#000" }} >IP <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='Enter IP' style={{ paddingLeft: 5, color: "#000" }} onChange={(e) => setIP(e.target.value)}
                                        // onChange={(e) => setIP(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div style={{ marginRight: 30 }}>
                                        <label htmlFor='full' style={{ color: "#000" }} >Location <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='Enter Location' style={{ paddingLeft: 5, color: "#000" }}
                                            onChange={(e) => setUserLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row px-2' style={{ marginTop: 15 }}>
                                <div className='col-lg-6'>
                                    <div style={{ marginRight: 25 }}>
                                        <label htmlFor='full' style={{ color: "#000" }} >Start Time <span style={{ color: "red" }}>*</span></label>
                                        <input type="time" style={{ paddingLeft: 5, width: "100%", color: "#000" }}
                                            onChange={(e) => setStart_t(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div style={{ marginRight: 30 }}>
                                        <label htmlFor='full' style={{ color: "#000" }} >Duration <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='Enter Duration' style={{ paddingLeft: 5, color: "#000" }}
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='text-center'>
                                <button className='btn' style={{ marginTop: 30 }} onClick={() => GenerateLink()}>Done</button>
                            </div>

                        </div>


                    </div>
                    :
                    null
            }
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
                                Wallet Num
                                <span style={{ color: "red" }}> : {Location.state.name}</span>
                            </p>
                        </li>
                    </ul>

                </div>



            </nav>
            <div className='text-center box'>
                <p className='text-center text-white top-heading' style={{ marginBottom: 20 }}>MANAGE NODES</p>
                {/* <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row" style={{ width: "30%", color: "#FFFFFF" }}>NODES</th>
                            <td style={{ color: "#FFFFFF" }}>all nodes Details</td>

                        </tr>
                        <tr>
                            <th scope="row" style={{ color: "#FFFFFF" }}>RENTALS</th>
                            <td style={{ color: "#FFFFFF" }}>Rentals details</td>

                        </tr>
                    </tbody>
                </table> */}
                {
                    list && list.length > 0 ?
                    
                        <div style={{ overflowX: "scroll" }}>
                            <table class="table table-bordered " style={{ width: "max-content" }}>
                                <thead>
                                    <tr >
                                        <th scope="col" style={{ color: "#FFFFFF", }}>Name</th>
                                        <th scope="col" style={{ color: "#FFFFFF", }}>IP</th>
                                        <th scope="col" style={{ color: "#FFFFFF", }}>Link</th>
                                        <th scope="col" style={{ color: "#FFFFFF", }}>Location</th>
                                        <th scope="col" style={{ color: "#FFFFFF", }}>Start Time</th>
                                        <th scope="col" style={{ color: "#FFFFFF", }}>Duration</th>
                                        <th scope="col" style={{ color: "#FFFFFF", }}>Force close</th>


                                    </tr>
                                </thead>

                                {
                                    list.map((item) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                    <td style={{ color: "#FFFFFF" }}>{item.name}</td>
                                                    <td style={{ color: "#FFFFFF" }}>{item.ip}</td>
                                                    <td style={{ color: "#FFFFFF" }}>{item.link}</td>
                                                    <td style={{ color: "#FFFFFF" }}>{item.location}</td>
                                                    <td style={{ color: "#FFFFFF" }}>{item.start_time}</td>
                                                    <td style={{ color: "#FFFFFF" }}>{item.duration}</td>
                                                    <td style={{ color: "#FFFFFF" }}><i className='fas fa-times  ' style={{ fontWeight: "400", cursor: "pointer" }}></i></td>

                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }




                            </table>
                        </div>
                        :
                        null
                }





                <div className='text-center'>
                    <button className='btn' style={{ marginTop: 30 }} onClick={() => setShowBox(true)} >Generate link</button>
                </div>
            </div>


        </>
    )
}

export default DetailsScreen