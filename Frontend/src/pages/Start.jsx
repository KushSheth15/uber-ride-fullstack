import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://unsplash.com/photos/a-traffic-light-with-a-couple-of-faces-on-it-FWhjAcyxvrA)] h-screen flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' alt=''/>
            <div className='bg-white pb-7 py-5 px-5'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justfiy-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start