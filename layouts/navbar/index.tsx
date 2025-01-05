'use client'
import Image from 'next/image'
import ListMenu from '@/config/ListMenu'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 0)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center transition-all duration-500 full-container ${
        scroll
          ? 'bg-white shadow-md h-16 text-black'
          : 'bg-transparent shadow-none h-20 text-white'
      }`}
    >
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <ul className="hidden lg:flex space-x-4 pr-4">
        {ListMenu.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:text-gray-400">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden pr-4 focus:outline-none hover:opacity-80 transition-opacity duration-300"
      >
        <i
          className={`fa-solid fa-bars text-2xl transition-transform duration-300 ${
            showMenu ? 'rotate-90' : ''
          }`}
        ></i>
      </button>
      <ul
        className={`lg:hidden absolute w-full bg-gray-800 left-0 transition-all duration-500 overflow-hidden ${
          scroll ? 'top-16' : 'top-20'
        } ${showMenu ? 'max-h-96 py-4' : 'max-h-0'}`}
      >
        {ListMenu.map((item, index) => (
          <li
            key={index}
            className={`px-6 py-2 opacity-0 transition-opacity duration-500 ${
              showMenu ? 'opacity-100' : ''
            }`}
          >
            <Link href={item.href} className="text-white hover:text-gray-400">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
