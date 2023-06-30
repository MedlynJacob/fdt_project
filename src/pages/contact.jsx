import React from 'react';
import back from '../images/SUN.JPG'


const Contact = () => {
  return (
    <div className="bg-cover bg-center bg-black-300 h-screen bg-opacity-50 bg-blend-hard-light flex flex-col justify-between " style={{ backgroundImage: `url(${back})`}}>
    <div className="absolute inset-0 bg-black opacity-25"></div>
    

    <div className=' grid md:grid-cols-2 max-w-[1240px] m-auto flex-shrink:0 flex-col '>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white ">Contact Us</h2>
         <form className="mt-4">
          <input type="text" placeholder="First Name" className="w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-2xl focus:outline-none shadow-inner text-white placeholder-white py-2 mt-4" />
          <input type="text" placeholder="Last Name" className="w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-2xl focus:outline-none shadow-inner text-white placeholder-white py-2 mt-4" />
          <input type="email" placeholder="Email" className="w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-2xl focus:outline-none shadow-inner text-white placeholder-white py-2 mt-4"/>
           <textarea placeholder="Message" className= "w-full w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-2xl focus:outline-none focus:border-blue-500 text-white placeholder-white py-2 mt-4" rows="6"n></textarea>
          <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none" >
          Send
          </button>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
