import React, { useState } from 'react'

import axios from 'axios'
import './style/Form.css'

const ROOT_URL = 'https://us-central1-renterii-landing-page.cloudfunctions.net'
// const ROOT_URL = 'http://localhost:5001/renterii-landing-page/us-central1'

const Form = ({ closeModal }) => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [loading, setLoading] = useState(false)

    // const handleSubmit = e => {
    //     e.preventDefault()                
    //     const res = axios.post(`${ROOT_URL}/createEmailList`, {
    //             email,
    //             firstName,
    //             lastName
    //     })
    //     .catch(function (err) {
    //         console.log(err)
    //     }) 
    //     .finally(closeModal())
    // }

    

    const handleSubmit = e => {
        console.log("email", email)
        setLoading(true)                
        e.preventDefault()  
    
        axios.post(`${ROOT_URL}/myWebHook`, {
            email,
            firstName,
            lastName
        })
        .then(res => { 
            if(res.status===200 || res.status===204){
                setLoading(false)
                closeModal()
            } 
        })
        .catch(err=> console.log(err));
    }

    // const handleSubmit = e => {
    //     console.log("email", email)
    //     setLoading(true)                
    //     e.preventDefault()  
    //     axios.all([
    //         axios.post(`${ROOT_URL}/createEmailList`, {
    //             email,
    //             firstName,
    //             lastName
    //         }),
    //         axios.post(`${ROOT_URL}/zohoCrmHook`, {
    //             email,
    //             firstName,
    //             lastName
    //         })
    //     ])
    //     .then(axios.spread((emailRes, crmRes) => { 
    //         if(emailRes.status===200 || emailRes.status===204 || crmRes.status===200 || crmRes.status===204 || crmRes.status===201){
    //             setLoading(false)
    //             closeModal()
    //         } 
    //     }))
    //     .catch(err=> console.log(err));
    // }

    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <div className="title">Bringing the world new accessible items + experiences - Notify me when renterii launches!</div>
            <div className="label">Name *</div>
            <div className="desc">What is your name?</div> 
            <div className="input-container">
                <label className="label">
                    <input 
                        className="input" 
                        type="text" 
                        value={firstName} 
                        onChange={e => setFirstName(e.target.value)} 
                    />
                    <div className="desc">First Name</div>
                </label>
                <label className="label">
                    <input 
                        className="input"
                        type="text" 
                        value={lastName} 
                        onChange={e => setLastName(e.target.value)} 
                    />
                    <div className="desc">Last Name</div>
                </label>
            </div>
            <div className="label">Email Address *</div>
            <div className="desc">Receive exclusive launch updates + event invites.</div> 
            <div className="input-container">
                <label className="label2">
                    <input 
                        className="input2" 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required
                    />
                </label>
            </div>
            <button className="button">
                {loading ? "Loading..." : "Submit"}
            </button>
        </form>
    )
}

export default Form