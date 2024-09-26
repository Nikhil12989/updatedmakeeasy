import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const MOA_amendmend_section8 = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">MOA Amendmend of Section 8

          </h1>

          {/* Refund message */}
          <style jsx>{`
  @keyframes intenseBlink {
    0%, 100% { opacity: 1; color: #f20000; }
    20% { opacity: 1; color: #000000; }
  }
`}</style>
          <h1
            className="
    text-lg md:text-xl font-bold underline underline-offset-8 
    mb-2 lg:mb-0 lg:ml-4 
    animate-[intenseBlink_1s_ease-in-out_infinite]
  "
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>

          {/* Breadcrumbs */}
          <nav className="breadcrumbs mt-2 lg:mt-0">
            <ol className="flex space-x-2 lg:space-x-4 text-sm items-center">
              <li className="flex items-center">
                <AiFillHome className="mr-1 text-base hover:underline" />
                <Link to={'/'} className="text-black hover:underline text-base">Home</Link>
              </li>
              <li className="text-black">/</li>
              <li className="flex items-center">
                <AiOutlineAppstore className="mr-1 text-base" />
                <Link to={'/all_service'} className="text-black hover:underline text-base">All Services</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">
          Modify your Section 8 Company’s Memorandum of Association through our Expert CA Panel 
          </h2>
          <h3 className='pt-4 text-base font-semibold'>
          Get 360° Online Assistance in Section 8 Company MOA Amendment at an Unbeatable Price!

</h3>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>

            <h1 className="text-2xl font-bold mb-4 mt-3">
            What is a Memorandum of Association or MOA?
            </h1>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p>The Memorandum of Association (MOA) is an important document of a company in certain Jurisdictions. While incorporating a Section-8 company, the memorandum is mandatory to be filed with the Registrars of Companies (ROC) and the Ministry of Corporate Affairs (MCA). It shows the company’s initial capital and the ‘object clause’ which lets the shareholders, creditors, and those dealing with the company know about what is the limit of range of operation.</p>

              <h1 className="text-xl font-semibold mb-4 mt-3">What is the MOA Amendment Procedure of Section-8?</h1>
              <p>For numbers of reasons, a Section 8 company’s MOA can be modified or amended. In the process, the concerned organization is required to follow the provisions of the Companies Act, 2013 and the guidelines of the Registrar of Companies ROC.</p>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MOA_amendmend_section8
