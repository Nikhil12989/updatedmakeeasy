import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Import_Export = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Import Export Code Registration</h1>

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
          <h3 className="lg:text-2xl font-bold border-b-4 border-orange-600 inline-block pb-2">
            Apply for Import Export Code ( IEC ) Online with the help of <span className='text-green-700'>Make Easy </span> <span className='text-orange-700'>Documents</span> ™ .
          </h3>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
            <h1 className="text-2xl font-bold mb-4 pt-5">
              What is Import Export Code (IEC)?
            </h1>
            <p className="mb-4">
              An Importer Exporter Code (IEC) is a key business identification number which is mandatory for export from India or Import to India.  No export or import shall be made by any person without obtaining an IEC. <br /> For services exports however, IEC shall not be necessary except when the service provider is taking benefits under the Foreign Trade Policy. An individual or a business entity needs a 10 digit code to import or export products or services. This code is known as Import Export Code or IEC and it is issued by DGFT, Ministry of Commerce and Industries, Govt. of India.            </p>
            <h2 className="text-xl font-semibold mb-2">  Who can apply for IEC Code?</h2>
            <p>
              The IEC code registration is applicable for all business registrations:

              Proprietorship , <br /> Partnership , LLP
              Limited Company , Trust , HUF , Society </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Import_Export
