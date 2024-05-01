import React from 'react'
import pic from "./image/background2.png";

const Head=()=> {
  return (
    <>
        <div className="main_pic">
                 <img src={pic} alt=''/>
          </div>
    <section className="head">

     <div className="container d_flex">
      <div className="left row" >
        <i className="fa fa-phone"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <label>+91 8870205525</label>
        <i className="fa fa-envelope"></i>
        <label>dineshsivasakthiwoods70@gmail.com</label>
      </div>
      <div className="right row Rtext" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <label style={{ marginRight: '10px' }}>Theme FAQ's</label>
      <label style={{ marginRight: '10px' }}>Need Help?</label>
      
    </div>
     </div>
    </section>
    </>
  )
}

export default Head