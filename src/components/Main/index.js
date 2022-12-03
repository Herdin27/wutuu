import React, { useState } from 'react'
import intern from '../../assets/intern2.jpg'
import internLight from '../../assets/intern.jpg'
import Login from '../Login'


function Main({ dark, loginShow, loginOn }) {

    return (
        <div className='hero min-h-screen' style={{
            backgroundImage: `url(${dark ? intern : internLight})`,
            height: '120vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            {loginShow ? <Login dark={dark} /> :
                <div className='hero-content text-white flex-col pt-24 p-14 md:p-24'>
                    <div className='desc text-center md:text-left justify-center md:justify-start'>
                        <h1 id='home' className='mb-4 text-white text-5xl'>haii</h1>
                        <p className='text-sm md:text-2xl mb-4 text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quos labore?
                            Nulla eius praesentium dignissimos numquam voluptatibus nobis inventore laborum dolore
                            quae nemo ab earum debitis animi, accusamus omnis rerum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quos labore?
                            Nulla eius praesentium dignissimos numquam voluptatibus nobis inventore laborum dolore
                        </p>
                    </div>
                    <div className='flex'>
                        <button className={dark ? 'border-none btn btn-primary mr-2 w-24 md:w-44' : 'border-none btn mr-2 w-24 md:w-44'} type="">See Products</button>
                        <button className={dark ? 'border-none btn btn-primary w-24 md:w-44' : 'border-none btn w-24 md:w-44'} type="" onClick={loginOn}>Login</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Main
