import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Slide } from 'react-reveal'
import logo from '../../assets/logo192.png'


function Header({ option, optionShow, optionHide, search, searchShow, searchHide, dark, theme, loginOff }) {

    return (
        <>
            <nav className='bg-gradient-to-br from-slate-500 fixed top-0 left-0 right-0 z-10'>
                <div className='grid grid-cols-2 md:grid-cols-3 md:gap-24 justify-around py-2 md:py-0'>
                    <div className='logo flex justify-start ml-2 md:ml-4'>
                        <a href="#home" onClick={loginOff}><img className='h-6 w-6 mt-1 sm:mb-1 sm:h-8 sm:w-8 cursor-pointer' src={logo} alt="logo" /></a>
                    </div>
                    <div className={dark ? 'center-side hidden md:flex md:justify-between my-1 text-white' : 'center-side hidden md:flex md:justify-between my-1 text-black'}>
                        <a href="" className='mx-2'>News</a>
                        <a href="" className='mx-2'>Docs</a>
                        <a href="" className='mx-2'>API</a>
                        <a href="" className='mx-2'>Developer</a>
                        <a href="" className='mx-2'>Issue</a>
                    </div>
                    <div className='right-side flex justify-end col-start-3 md:mr-3'>
                        {search ?
                            <div className='relative mt-1 md:mt-2'>
                                <input className="w-28 md:w-full rounded opacity-50 pl-2 pr-6" type="text" name="search" placeholder='Search ...' />
                                <FontAwesomeIcon
                                    className='right-1 top-1 cursor-pointer absolute'
                                    icon={faCircleXmark}
                                    onClick={searchHide}
                                />
                            </div>
                            :
                            <>
                                <div className='p-2 hidden md:flex'>
                                    <input type="checkbox" className="toggle bg-white" defaultChecked={dark} onClick={theme} />
                                </div>
                                <FontAwesomeIcon
                                    className='mt-1 md:mt-2 p-1 cursor-pointer'
                                    icon={faMagnifyingGlass}
                                    onClick={searchShow}
                                />
                            </>
                        }
                        <FontAwesomeIcon
                            className='mx-4 mt-1 p-1 md:hidden cursor-pointer'
                            icon={faEllipsisVertical}
                            onClick={option ? optionHide : optionShow}
                        />
                    </div>
                </div>
            </nav>
            {option &&
                <div className='grid justify-end mt-12 mr-2 fixed top-0 left-0 right-0 z-10'>
                    <ul className={dark ? 'menu text-white bg-base-100 rounded-md border border-white mt-3' : 'mt-3 menu text-black bg-white rounded-md border border-black'}>
                        <li className={dark ? 'cursor-pointer hover:bg-white hover:text-black p-2' : 'cursor-pointer hover:bg-base-100 hover:text-white p-2'}>News</li>
                        <li className={dark ? 'cursor-pointer hover:bg-white hover:text-black p-2' : 'cursor-pointer hover:bg-base-100 hover:text-white p-2'}>Docs</li>
                        <li className={dark ? 'cursor-pointer hover:bg-white hover:text-black p-2' : 'cursor-pointer hover:bg-base-100 hover:text-white p-2'}>API</li>
                        <li className={dark ? 'cursor-pointer hover:bg-white hover:text-black p-2' : 'cursor-pointer hover:bg-base-100 hover:text-white p-2'}>Developer</li>
                        <li className={dark ? 'cursor-pointer hover:bg-white hover:text-black p-2' : 'cursor-pointer hover:bg-base-100 hover:text-white p-2'}>Issue</li>
                        <li className={dark ? 'cursor-pointer hover:bg-white hover:text-black p-2' : 'cursor-pointer hover:bg-base-100 hover:text-white p-2'}>Theme</li>
                        <div className='p-2'>
                            <input type="checkbox" className="toggle bg-white" defaultChecked={dark} onClick={theme} />
                        </div>
                    </ul>
                </div>
            }
        </>
    )
}

export default Header
