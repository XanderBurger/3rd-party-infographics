import React from 'react'
import graphic1 from "./assets/svgs/infoGraph1.svg"
import graphic2 from "./assets/svgs/infoGraph2.svg"
import graphic3 from "./assets/svgs/infoGraph3.svg"

export default function InfoGraphic() {
  return (
    <div className='infoGraphic' >
        <p>
            <b>How Cookies Track You</b>
        </p>
    <div className='graphicsContainer'>
        <div className='graphic1'>
            <img src={graphic1} alt="website SVG" />
            <p>
            Tracking cookies are added to your browsers from content hosted by 3rd parties like Facebook or Google.
            </p>
        </div>
        <div className='graphic2'>
            <img src={graphic2} alt="sever SVG" />
            <p>
            These cookies are stored locally on your browser, keeping track of your browsing activity. This activity is sent to the 3rd party's servers and stored in a profile under your IP address.
            </p>
        </div>
        <div className='graphic3'>
            <img src={graphic3} alt="brand website SVG" />
            <p>
            Businesses then pay companies like Google Ads or Facebook Ads to send ads to profiles that match their desired demographics.
            </p>
        </div>

    </div>
    </div>
  )
}
