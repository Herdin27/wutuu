import React, { useEffect, useState } from 'react'
import { Footer, Header, Main, Second, Third } from '../../components'

function Home() {
    const [showLogin, setShowLogin] = useState(false)
    const [option, setOption] = useState(false)
    const [search, setSearch] = useState(false)
    const [dark, setDark] = useState(false)

    const handleTheme = () => {
        if (!dark) {
            setDark(true)
            localStorage.setItem('dark', 'dark')
        } else {
            setDark(false)
            localStorage.removeItem('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('dark')) {
            setDark(true)
        } else {
            setDark(false)
        }
    }, [])
    return (
        <>
            <Header option={option} optionShow={() => setOption(true)} optionHide={() => setOption(false)}
                search={search} searchShow={() => setSearch(true)} searchHide={() => setSearch(false)}
                dark={dark} theme={() => handleTheme()} loginOff={() => setShowLogin(false)} />
            <div onClick={() => { setOption(false); setSearch(false) }}>
                <Main dark={dark} loginShow={showLogin} loginOn={() => setShowLogin(true)} loginOff={() => setShowLogin(false)} />
                <Second dark={dark} loginShow={showLogin} loginOn={() => setShowLogin(true)} loginOff={() => setShowLogin(false)} />
                <Third dark={dark} />
                <Footer dark={dark} />
            </div>
        </>
    )
}

export default Home
