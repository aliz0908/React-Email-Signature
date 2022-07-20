import React from "react"
import ReactDOM from "react-dom"

export default function Info(){
    return(
        
        <div className = "info_section">
            <img src = "../images/info_img.png"/>
            <h3>Blue Flight</h3>
            <p>Frontend Developer</p>
            <a href = "#">blue11flight.me</a>
            
            <div className = "btn_div">
                <button className = "mail_btn"> <img src = "../images/Mail.png"/> Email</button>
                &nbsp; &nbsp; 
                <button className = "linked_btn"> <img src = "../images/linkedin.png"/> LinkedIn</button>
            </div>
        </div>
    )
}