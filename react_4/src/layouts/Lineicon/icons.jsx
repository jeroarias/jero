import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import './icons.css';

export const Lineicon = () => {
    return(
        <div className="lineicon">
            <a className="colora" href=""><BsLinkedin /></a>
            <a className="colora" href=""><BsFacebook /></a>
            <a className="colora" href=""><BsInstagram /></a>
            <a className="colora" href=""><BsTwitter /></a>
            <a className="colora" href=""><BsWhatsapp /></a>
        </div>
    )
}