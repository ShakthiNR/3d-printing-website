import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <section className='header-logo' style={{ background: "black", cursor: "pointer" }}>
        <img src='/logo.jpeg' alt='logo' style={{ width: "40px", height: "40px"}}/>
        <p>GVG Services</p>
      </section>
      <section className='header-text'>
        <p> 
        Welcome to GVG Services – Precision 3D Printing for Prototyping & Unique Gifts
        </p>
      </section>
    </header>
  )
}

export default Header