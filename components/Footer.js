import React from "react"
import ReactDOM from "react-dom"

export default function Footer(){
    return(
        <footer className = "footer_section">
            <a href = "#">
                <img src = "../images/Twitter_Icon.png" width = "25px" />
            </a>
            &nbsp;&nbsp;
            <a href = "#">
                <img src = "../images/Facebook_Icon.png"/>
            </a>
            &nbsp;&nbsp;
            <a href = "#">
                <img src = "../images/Instagram_Icon.png"/>
            </a>
            &nbsp;&nbsp;
            <a href = "#">
                <img src = "../images/GitHub_Icon.png"/>
            </a>
        </footer>
    )
}