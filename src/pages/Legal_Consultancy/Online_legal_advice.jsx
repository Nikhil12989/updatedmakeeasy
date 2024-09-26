import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Online_legal_advice = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Online Legal Advice</h1>

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
          <h2 className="text-2xl lg:text-3xl font-bold border-b-4 border-red-600 inline-block pb-2">
            Online Legal Advice
          </h2>
          <h3 className='pt-4 text-base font-semibold'>Online Legal Advice | Guaranteed Solution To Every Legal Issue
          </h3>
          <p className='pt-4'>Resolve your Legal Dispute | Intimation sent on Virtual Mode! We give Legal Advice and provide a solution to every legal disagreement.

          </p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div> <br />
            <h1 className="text-2xl font-bold mb-4">
              " <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span>  : Simplifying Legal Complexity "
            </h1>
            <p>
            Legal Help is the way to assist the people who are not able to access the court easily. Legal Help includes various kinds of advice, providing service, forming draft or agreement etc. Legal advice is the way of giving professional opinion relating to any factual matter or any situation.
            </p> <br />
            <p className="mb-4">
            Our company provides the solution by taking aid from virtual support to serve our clients based on the requirement. We provide the best of advice in exchange for monetary compensation.</p>
            <h2 className="text-xl font-semibold mb-2">We can help, you seek legal advice from <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span> and make this entire process seamless.</h2>
            <p>
            In our common law system, in criminal and civil law, the advice is being provided by the advocates or lawyers, or other professionals (such as tax experts, professional advisors, etc). </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Online_legal_advice
