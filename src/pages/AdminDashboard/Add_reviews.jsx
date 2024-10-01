import React from 'react'
import { motion } from 'framer-motion';
const Add_reviews = () => {
  return (
    <div className='flex1'>
      <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ">
        Add Reviews
      </h2>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className='overflow-x-auto w-full'
      >
        <section class="max-w-4xl mb-12 p-6 mt-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-md shadow-xl dark:bg-gray-800">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white font-semibold text-xl dark:text-gray-200" for="name">
                  Name <span class="text-red-500 ml-1">*</span>
                </label>
                <input id="name" type="text" placeholder='Enter Name...' class="block w-full px-4 py-2 mt-2 
   text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
    dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
    focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
              </div>
              <div>
                <label class="text-white font-semibold text-xl dark:text-gray-200" for="star">Star Between 1 To 5 <span class="text-red-500 ml-1">*</span></label>
                <input id="star" type="text" placeholder='Enter Star Between 1 to 5 ...' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
              </div>


            </div>
            <br />
            <div>
              <label class="text-white font-semibold text-xl dark:text-gray-200" for="description">
                Description<span class="text-red-500 ml-1">*</span>
              </label>
              <textarea id="description" placeholder='Enter Review Description...' class="block w-full px-4 py-2 mt-2 
   text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
    dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
    focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required rows="2"></textarea>
            </div>

            <div className='flex items-center gap-4'>

              <div class="flex justify-end mt-6">
                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Uploade</button>
              </div>
              <div class="flex justify-end mt-6">
                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform  rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 bg-green-400">Cancel</button>
              </div>
            </div>
          </form>
        </section>
      </motion.div>
    </div>
  )
}

export default Add_reviews
