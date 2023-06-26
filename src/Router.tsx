import { useState, useEffect } from "react"
//import { useStore } from "./context/store"
import LogoLoader from "./components/LogoLoader"
import styled from 'styled-components'

const LOGO_LOADING_TIME = 2000

const AppRouter = () => {
    const [loading, setLoading] = useState(true)

    const tryAutoAuth = () => {
        setLoading(true);
        /* You can check here if the user's access 
        token is still valid and not yet expired or do anything */
        setTimeout(() => {
            setLoading(false)
        }, LOGO_LOADING_TIME)
    }

    useEffect(() => {
        tryAutoAuth()
    }, [])

    return (
        loading ? <LogoLoader /> :
        /* Start defining your routes here */
            (<DefaultMessage>
                WORKS FINE
            </DefaultMessage>)
    )
}
const DefaultMessage = styled.h1`
display:flex;
align-items:center;
justify-content:center;
`
export default AppRouter