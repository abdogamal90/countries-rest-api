import React from 'react'
import Flag from './Flag'
import '../App.css'

function Flags({ flags }) {

    return (
        //<div style={{ margin: "auto",/*width :"45vh"*/ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: '25px', gridTemplateRows: "1fr" }}>
        //    {flags.map((flag) =>
        ///      <Flag flag={flag} />
        //  )}
        // </div> 
        <div className='main'>
            {flags.map((flag) =>
             <Flag key={flag.cca2} flag={flag} />
          )}
        </div>
    )
}

export default Flags