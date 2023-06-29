import React from 'react'
import Navbar from './components/navbar/Navbar'
import UnleashThePower from './components/unleashThePower/UnleashThePower'
import BusinessSoar from './components/businessSoar/BusinessSoar'
import Services from './components/services/Services'
import Process from './components/process/Process'
import Expert from './components/expert/Expert'
import Cypto from './components/cypto/Cypto'
import Powered from './components/powered/Powered'
import GetToKnow from './components/getToKnow/GetToKnow'
import ContactUs from './components/contactUs/ContactUs'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <div className='bg-[#FFFDFA] lg:p-8 p-4'>
        <div className='bg-[#F9F3FF] lg:p-10 p-6 lg:px-20 rounded-2xl'>
          <Navbar />
          <UnleashThePower />
        </div>
        <div className='bg-[#FFF3F3] lg:p-10 p-6 lg:px-20 rounded-2xl my-6'>
          <BusinessSoar />
        </div>
        <Services />
        <div className="bg-[#D9F0F3] lg:p-10 p-6 lg:px-20 rounded-2xl my-6">
          <Process />
        </div>
        <div className="bg-[#fff] lg:p-10 p-6 lg:px-20 rounded-2xl my-6">
          <Expert />
        </div>
        <Cypto />
        <Powered />
        <GetToKnow />
        <div className="bg-[#FFF5F5] lg:p-10 p-6 lg:px-20 rounded-2xl my-6">
          <ContactUs />
        </div>
        <div className="bg-[#341552] lg:p-10 p-6 lg:px-20 rounded-2xl my-6">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App