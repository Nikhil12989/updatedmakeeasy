import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Advice_on_divorce = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Advice on Divorce</h1>

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
          <h2 className="text-xl lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">
            Online Legal Advice | Guaranteed Solution To Every Legal Issue
          </h2>
          <h3 className='pt-4 text-base font-semibold'>Our Expert consultation will help you to get the Trademark registration online seamlessly from the government.
          </h3>
          <p className='pt-4'>Trademark Registration gives the owner an exclusive right to protect the Logo, Symbol, and Words as the identity of the Brand.
            To Protect your brand with our trademark registration services.</p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>

            <p className="mb-4">
              Divorce or Dissolution Of Marriage a process of separation ensue's when cohabiting married partners no longer desire to cohabit to the sacred bond and wish to part ways either mutually or by contest.
            </p>
            <h2 className="text-base font-semibold mb-2"> We can help, you seek legal advice from our legal practitioners of <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span> and make this entire process seamless.</h2>
            <h2 className="text-xl font-semibold mb-2 text-center">Kinds of Divorce : </h2>
            <p>
              <span className='font-semibold'>Contested Divorce </span> : <br />
              • Under this form of divorce, one party agrees for divorce and the opposition party disagree for the same. <br />
              • This form of divorce takes a long time for dissolution of marriage, where the decision is pending upon the honourable presiding judge.

              <br />  <span className='font-semibold'>Mutual Divorce </span>  : <br />
              • Under this form, both parties agree to part ways under mutual consent. <br />
              • The decisions are taken mutually by both the parties where they decide to exchange the items/goods which they have taken form one another during the time of marriage. <br />
              • Under this form both the parties settle everything between them according to their convenience. </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Advice_on_divorce
