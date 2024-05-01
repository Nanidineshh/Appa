import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Safe Delivery",
      decs: "We offer you the safest packaging and delivery at your doorstep only within India.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer safe payment by paying 25% amount as initial pay and rest after delivery.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "We're all about top-notch quality, no ifs, and, or buts! 'Excellence' is our middle name!",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "365 days Support ",
      decs: "We work 365 ! But hey, we need sleep.Catch us in action from 9 AM to 9 PM!",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='box product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper