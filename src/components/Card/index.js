import React, { useRef } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Card({ dark, image, loginOn }) {
    const toastId = useRef(null)
    const customId = "custom-id-yes";
    const notify = () => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error("Anda harus login terlebih dahulu !", {
                toastId: customId,
                pauseOnFocusLoss: false,
                position: toast.POSITION.TOP_CENTER,
                draggablePercent: 60,
                autoClose: 2500,
                limit: 1
            })
        }
        
    };
    return (
        <div className={dark
            ? "card card-compact md:w-full bg-base-100 shadow-xl border border-white"
            : "md:w-full card card-compact bg-base-100 shadow-xl border border-black bg-white text-white"}>
            <figure><img className='w-auto rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black mx-1">Shoes!</h2>
                <div className="card-actions">
                    <button onClick={notify} className={dark ? "btn btn-primary" : "btn"}>Buy Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
