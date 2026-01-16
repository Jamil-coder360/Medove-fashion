import React from 'react'

const Banner = () => {
  const heroButtons = [
    "DISCOVER COLLECTION",
    "SHOP NOW"
  ];

  return (
    <section id='banner-1'>
      <div className="container">
        <div className="overlay">
          <div className="banner">
            <h1 className='head'>Fresh Looks for Warmer Days</h1>
            <p>Unveil bold layers and timeless silhouettes — designed to define your Spring/Summer 2027 look.</p>
            <div className="hero_btn">
              <button>DISCOVER COLLECTION</button>
              <button>SHOP NOW</button>
            </div>

            {/* <div className="hero_btn">
  {heroButtons.map((text, index) => (
    <button key={index}>{text}</button>
  ))}
</div> */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner