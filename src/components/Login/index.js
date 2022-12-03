import React, { useState } from 'react'

export default function Login({dark, loginOn}) {
    const [sign, setSign] = useState(false)
    return (
        <div className="hero md:min-h-screen text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mt-14">
                    <h1 className="text-5xl font-bold">{sign ? 'Register now !' : 'Login now!'}</h1>
                    <p className={sign ? '' : "py-6"}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            {sign &&
                                <>
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered border-white opacity-50" />
                                    <label className="label">
                                        <span className="label-text text-white">Phone</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered border-white opacity-50" />
                                </>
                            }
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered border-white opacity-50" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered border-white opacity-50" />
                            <div className='grid grid-cols-2 gap-2'>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                                <label className="label flex justify-end">
                                    {sign ? <a href="#" className="label-text-alt link link-hover text-white" onClick={() => setSign(false)}>Have account ?</a> :
                                        <a href="#" className="label-text-alt link link-hover text-white" onClick={() => setSign(true)}>Don't have account ?</a>}
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className={dark ? "btn btn-primary" : "btn btn-outline"}>{sign ? 'Register' : 'Login'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
