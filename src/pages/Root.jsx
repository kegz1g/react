import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
// import Basket from "../components/Basket/Basket"
const Root = () => {

    useEffect(() => {

        document.title = "Sneakers"

    }, [])


    return (
        <>

            <div className="background">
                
                <div className="container">

                    <Header />
                    
                    <Outlet />

                </div>
            </div>
        </>
    )
}

export default Root