import React from 'react'
import pic1 from "D:/E-commerce/sivasakthi/src/components/assets/files/anounce/505.png";
import pic2 from "D:/E-commerce/sivasakthi/src/components/assets/files/anounce/fuck.png";


const Annu = () => {
    const mystyle={
        width:"40%",
        height:"340px",
    }
    const mystyle1={
        width:"58%",
        height:"340px",
    }
  return (
    <>
    <section className='annouc background'>
        <div className="container d_flex">
            <div className="img" style={mystyle}>
                <img src={pic1} alt='' width='100%' height='100%' />
            </div>
            <div className="img" style={mystyle1}>
                <img src={pic2}  alt='' width='100%' height='100%' />
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Annu