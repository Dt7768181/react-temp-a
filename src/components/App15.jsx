import React from 'react'
import { IoIosHome } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
export default function App15() {
  return (
    <div>
        <h2>THIS IS APP15</h2>
        <IoIosHome size={20}/>Home<br/>
        <IoIosContact size={20}/>Contact<br/>
        <BiLogoPlayStore size={20}/><a href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight&pcampaignid=web_share">Download</a><br/>
        <FaAppStore size={20}/><a href='https://play.google.com/store/apps/details?id=com.nekki.shadowfight&pcampaignid=web_share'>Download</a><br/>
    </div>
  )
}
