import React from 'react'
import moment from 'moment'

const Footer = () => {
  return (
    <footer className='footer'> 
      <p>&copy; {moment().format('yyyy')} All Rights Reserved.</p>
      <p style={{ marginTop: "5px"}}> gvgservices.com</p>
    </footer>
  )
}

export default Footer