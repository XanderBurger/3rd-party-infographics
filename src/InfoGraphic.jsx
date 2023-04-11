import React from 'react'
import graphic1 from "./assets/svgs/infoGraph1.svg"
import graphic2 from "./assets/svgs/infoGraph2.svg"
import graphic3 from "./assets/svgs/infoGraph3.svg"

export default function InfoGraphic() {
  return (
    <div className='infoGraphic' >
        <p>
            <b>How cookies work:</b>
        </p>
    <div className='graphicsContainer'>
        <div className='graphic1'>
            <img src={graphic1} alt="website SVG" />
            <p>
                content description
            </p>
        </div>
        <div className='graphic2'>
            <img src={graphic2} alt="sever SVG" />
            <p>
                content description
            </p>
        </div>
        <div className='graphic3'>
            <img src={graphic3} alt="brand website SVG" />
            <p>
                content description
            </p>
        </div>

    </div>
    </div>
  )
}
