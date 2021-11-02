import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Component/HeaderComponent/Header'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Footer from '../Component/Footer/Footer'
import ContactArea from '../Component/ContactComponent/ContactArea'
import ContactForm from '../Component/ContactComponent/ContactForm'
import ContactMap from '../Component/ContactComponent/ContactMap'
import SideAction from '../Component/SideAction/SideAction'

ContactLayout.propTypes = {}

function ContactLayout(props) {
  return (
    <>
      <SideAction />
      <div className="contact">
        <Header />
        <HeaderDetail check={true} title="Contact Us" curpage="Contact" />
        <ContactArea />
        <ContactForm />
        <ContactMap />
        <Footer />
      </div>
    </>
  )
}

export default ContactLayout
