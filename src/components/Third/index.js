import React from 'react'
import intern from '../../assets/interSecond.jpg'


function Third({ dark }) {
    return (
        <div className={dark ? 'text-black flex-col justify-center p-14 md:p-24 text-left relative z-0 bg-base-100' : 'flex-col justify-center p-14 md:p-24 text-left relative z-0'}>
            <h1 className={dark ? 'text-xl md:text-4xl mb-4 text-white' : 'text-xl md:text-4xl mb-4 text-black'}>haii</h1>
            <p className={dark ? 'text-sm md:text-xl text-white' : 'text-sm md:text-xl text-black'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quos labore?
                Nulla eius praesentium dignissimos numquam voluptatibus nobis inventore laborum dolore
                quae nemo ab earum debitis animi, accusamus omnis rerum.
            </p>
            <div className='pt-5'>
                <div className="carousel mx-auto w-full md:w-3/5 md:mx-auto px-4">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    </div>
                </div>
            </div>
            <div className="flex mt-3 justify-center w-full py-2 gap-2">
                <a href="#item1" className={dark ? "btn btn-xs btn-primary" : "btn btn-xs"}>1</a>
                <a href="#item2" className={dark ? "btn btn-xs btn-primary" : "btn btn-xs"}>2</a>
                <a href="#item3" className={dark ? "btn btn-xs btn-primary" : "btn btn-xs"}>3</a>
                <a href="#item4" className={dark ? "btn btn-xs btn-primary" : "btn btn-xs"}>4</a>
            </div>
        </div>
    )
}

export default Third
