import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <section className='header-logo' style={{  cursor: "pointer" }}>
        <img src='/logo.jpeg' alt='logo' style={{ width: "40px", height: "40px"}}/>
      </section>
      <section className='animated-gradient-text'>
        Precision 3D Printing for Prototyping & Unique Gifts
      </section>
    </header>
  )
}

export default Header