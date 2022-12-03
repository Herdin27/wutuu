import React, { useEffect, useState } from 'react'
import intern from '../../assets/interSecond.jpg'
import Card from '../Card'

const data = [
    { image: intern },
    { image: intern },
    { image: intern },
    { image: intern }
]

function Second({ dark, loginOn }) {
    const [carou, setCarou] = useState(1)
    useEffect(() => {
        console.log(carou)
    }, [])
    return (
        // <div className={dark ? 'hero md:min-h-screen bg-base-100' : 'hero md:min-h-screen bg-white'} >
        //     <div className='hero-content flex-col justify-center md:pt-24 md:p-24 text-center md:text-left my-12 mx-auto'>
        //         <p className={dark ? 'mb-4 text-white text-4xl' : 'mb-4 text-black text-4xl'}>Catalogs</p>
        //         <div className={dark ? 'grid grid-cols-2 gap-2 md:grid md:grid-cols-4 md:gap-8 text-white' : 'grid grid-cols-2 gap-2 flex justify-center md:grid md:grid-cols-4 md:gap-8 text-white'}>
        //             {data.map((x) => <Card dark={dark} image={x.image} loginOn={loginOn} />)}
        //         </div>
        //     </div>
        // </div>
        <div className={dark ? 'hero md:min-h-screen bg-base-100' : 'hero md:min-h-screen bg-white'} >
            <div className='hero-content flex-col justify-center md:pt-24 md:p-24 text-center md:text-left my-12 mx-auto'>
                <p className={dark ? 'mb-4 text-white text-4xl' : 'mb-4 text-black text-4xl'}>Catalogs</p>
                <div className="carousel w-full">
                    {data.map((x, y) =>
                        <div id={`slide${y + 1}`} className="carousel-item relative w-full">
                            <img id={`#slide${y + 1}`} src={x.image} className="w-full" />
                            <div className="hidden md:inline-flex absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${carou}`} className="btn btn-circle" onClick={() => { carou === 1 ? setCarou(4) : setCarou(carou - 1) }}>❮</a>
                                <a href={`#slide${carou}`} className="btn btn-circle" onClick={() => { carou === data.length ? setCarou(1) : setCarou(carou + 1) }}>❯</a>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Second
