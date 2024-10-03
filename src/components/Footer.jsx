import React from 'react';


const Footer = () => {
    return (
        <footer className='bg-gray-700 text-gray-400 py-10 '>
            <div className='max-w-[1180px] mx-auto grid grid-cols-4'>
                {/* Column 1 : Swiggy logo */}
                <div className='space-y-2'>
                    <h3 className='font-bold text-white text-xl'>Swiggy</h3>
                    <p className='hover:text-gray-200'>© 2024 Bundl Technologies Pvt. Ltd</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-white font-bold text-xl'>Company</h3>
                    <ul className='space-y-2 cursor-pointer'>
                        <li className='hover:text-gray-200'>About</li>
                        <li className='hover:text-gray-200'>Careers</li>
                        <li className='hover:text-gray-200'>Team</li>
                        <li className='hover:text-gray-200'>Swiggy One</li>
                        <li className='hover:text-gray-200'>Swiggy Instanart</li>
                        <li className='hover:text-gray-200'>Swiggy Gennie</li>
                    </ul>
                </div>
                <div className='grid grid-rows-2 gap-8 '>
                    <div className='space-y-2'>
                        <h3 className='text-white font-bold text-xl '>Contact us</h3>
                        <ul className='space-y-2 cursor-pointer'>
                            <li className='hover:text-gray-200'>Help and Support</li>
                            <li className='hover:text-gray-200'>Patner With Us</li>
                            <li className='hover:text-gray-200'>Ride With Us</li>
                        </ul>
                    </div>
                    <div className='space-y-2'> 
                        <h3 className='text-white font-bold text-xl '>Legal</h3>
                        <ul className='space-y-2 cursor-pointer'>
                            <li className='hover:text-gray-200'>Help and Support</li>
                            <li className='hover:text-gray-200'>Patner With Us</li>
                            <li className='hover:text-gray-200'>Ride With Us</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-white font-bold text-xl'>We Delivery To</h3>
                    <ul className='space-y-2 cursor-pointer'>
                        <li className='hover:text-gray-200'>Bangalore</li>
                        <li className='hover:text-gray-200'>Mumbai</li>
                        <li className='hover:text-gray-200'>Noida</li>
                        <li className='hover:text-gray-200'>Hyderabad</li>
                        <li className='hover:text-gray-200'>Delhi</li>
                        <li className='hover:text-gray-200'>Mumbail</li>
                        <li className='hover:text-gray-200'>Noida</li>
                        <li className='hover:text-gray-200'>Surat</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}



export default Footer;