import React, { useState } from 'react'


export default function Navbar({theme,settheme}) {

    const [isopen, setisopen] = useState(false);
    const ToggleNav = () => {
        setisopen(!isopen);

    }
    
    const ToggleTheme = () => {
        settheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <nav className={`flex items-center text-lg justify-between overflow-x-hidden flex-wrap p-4  md:p-6 ${theme == 'light' ? 'bg-blue-400' : 'bg-gray-600'}`}>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src="textify.jpeg" alt="logo" className='h-8 w-8 rounded-full' />
                    <span className="font-semibold pl-2 text-xl tracking-tight">Textify</span>
                </div>
                <div className="block md:hidden" onClick={ToggleNav}>
                    <button className={`flex items-center px-3 py-2  border rounded ${theme =='light'? 'text-gray-600': 'text-white' } hover:text-white hover:border-white`}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full absolute sm:static flex max-w-[90vw] ${theme =='light'? 'text-gray-600': 'text-white' } flex-grow md:flex text-xs md:items-center justify-between -z-0 md:w-auto transition-all ${isopen ? 'top-[50px]' : 'top-[-300px]'}`}>
                    <div className="text-sm flex md:flex-grow">
                        <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-2 md:mr-4">
                            Home
                        </a>
                        <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-2 md:mr-4">
                            About
                        </a>
                        <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white">
                            Contact Us
                        </a>
                    </div>
                    <div className='flex'>
                        {/* <div>
                            <a href="" className="inline-block text-sm px-2 py-1 md:py-2 leading-none border-none rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-2 md:mt-0">Download</a>
                        </div> */}
                        <button
                            onClick={ToggleTheme}
                            className = {`md:ml-4 ml-2 px-2 ${theme == 'light'? 'text-gray-600':'text-white'} md:px-1 py-1 hover:text-white border-none md:text-base rounded text-white`}>
                            {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
                        </button>                    </div>
                </div>
            </nav>
        </div>
    )
}
