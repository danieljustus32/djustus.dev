import { useState } from 'react'
import Link, { Image } from 'next/link'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className='flex flex-wrap items-center p-3 bg-gray-800'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 text-white'>Home</a>
        </Link>
        <button
          className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-gray-600 lg:hidden hover:text-white'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/#portfolio'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'>
                Portfolio
              </a>
            </Link>
            <Link href='/about'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'>
                About
              </a>
            </Link>
            <Link href='/hello'>
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
