import React, {ReactElement, FC} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import {Footer, Header} from '../components'


const Home= () => {


    const copyright = () => {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">RektInPeace © 2022 - ALL RIGHTS RESERVED </p>
                        </div> 
                    </div>
                </div> 
            </div>
        )
    }


    return (
    <div className="">
        <Header/>
        {/* <Button onClick={event =>  window.location.href='https://mint.rektinpeace.com'}>
            Mint
        </Button> */}
        <Footer/>
    </div>
    )
}

export default Home