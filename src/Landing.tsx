import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import React, { Component, useRef, createRef, useState } from "react";
import { render } from "react-dom"; import audio from '../public/audio.png'
import no_audio from '../public/no_audio.png'
import './fonts/Bloody-Terror.ttf'
import './fonts/Melted-Monster.ttf'
import {Section, Leaderboard} from './components'
import Table from 'react-bootstrap/Table';


export const Landing = () => {
  const [muted, setMuted] = useState(true);
  const handleToggleMute = () => setMuted(current => !current);
  const muteText: string = muted ? "Unmute" : "Mute"
  const muteImg: string = muted ? '/no_audio.png' : "/audio.png"
  // const roadmapSection = useRef<number>(null);
  const aboutRef = createRef<HTMLElement>()
  const mintRef = createRef<HTMLElement>()
  const roadmapRef = createRef<HTMLElement>()
  const leaderRef = createRef<HTMLElement>()

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }


  const video = () => {
    const url: string = "https://storage.googleapis.com/rektinpeace.com/video.mp4"
    return (
      <div className="bg-image">
        <video className='video-player' controls autoPlay={true} muted={muted} loop width="100%" height="100%">
          <source src={url} type="video/mp4" />
          <img src='/logo_white.png'></img>
        </video>      
        <div >
            {/* <button className='mute-button' onClick={handleToggleMute} >
              <img src={muteImg} alt="add item" width="20%" />
            </button> */}
        </div>
      </div>

    )
  }
  const mint = () => {
    return (
      <section id="About" className="content-section back-image" ref={aboutRef}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-heading">
              <h1 className='font-face-mm'>GONE TOO SOON MEMORIALIZE<br />YOUR DEAD NFTs</h1>
              </div>
                {mintButton()}  
                <h2 className='about-text'>Choose an NFT to mint with and send to graveyard to get REKT</h2>
              </div>
          </div>
        </div>
      </section>
    )
  }
  const roadmap = () => {
    return (
      Section("RoadMap",
      "Coming Soon",
      roadmapRef,
      <div></div>
      )
    )
  }
  const leaderboard2 = () => {
    return (
      Section("Leaderboard",
      "Most Minteed",
      roadmapRef,
      <Table striped bordered hover variant='dark'>
        <thead color='white'>
          <tr>
            <th>#</th>
            <th colSpan={2}>NFT</th>
            <th>REKT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      )
    )
  }
 
  const footer = () => {
    return (
        <div className="text-center colorBackground">
          <ul className="social-icons">
            <li className='social-icon' >
              <a href='https://twitter.com/'>
                <img height='60px' src='/twitter_white.png' alt='Twitter'></img>
              </a>
            </li>
            <li className='social-icon' >
              <a href='https://twitter.com/'>
                <img height='60px' src='/opensea_white.png' alt='Twitter'></img>
              </a>
            </li>
            <li className='social-icon' >
              <a href='https://twitter.com/'>
                <img height='60px' src='/etherscan_white.png' alt='Twitter'></img>
              </a>
            </li>
          </ul>
        </div>
    )
  }
  const nav = () => {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Nav.Item>
            <Nav.Link className='nav-header' onClick={() => scrollTo(leaderRef)}>REKT IIN PEACE</Nav.Link>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1 }}>

          </Nav>
          <Nav className="justify-content-right" >
            <Nav.Item>
              <Nav.Link className='font-face-bt' onClick={() => scrollTo(leaderRef)}>Leaderboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='font-face-bt' onClick={() => scrollTo(aboutRef)}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://mint.rektinpeace.com' className='font-face-bt' onClick={() => scrollTo(mintRef)}>Mint</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <img height='30px' src='/twitter_black.png' alt='Twitter'></img>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <img height='30px' src='/opensea_black.png' alt='Twitter'></img>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <img height='30px' src='/etherscan_black.png' alt='Twitter'></img>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  const mintButton = () => {
    return (
      <a href="https://mint.rektinpeace.com/">
                <button className="mint-button font-face-mm ">MINT</button>
              </a> 
    )
  }

  return (
    <div className='backgroundColor'>
      {nav()}
      {video()}
      {mint()}
      {/* {howToMint()} */}
      {leaderboard2()}
      {roadmap()}
      {/* {Leaderboard(leaderRef)}
      {leaderboard()} */}
      {footer()}
    </div>
  )
}

// const main = () => {
//   return (
//     <section id="Banner" className="content-section">
//       <div className="container content-wrap text-center">
//         <h1>Rect In Peace</h1>
//         <h3>
//           <em>Where your NFTs are laid to rest</em>
//         </h3>
//         <a className="btn btn-primary btn-xxl smooth-scroll" href="https://mint.rektinpeace.com">Mint</a>
//       </div>
//       <div className="overlay"></div>
//     </section>
//   )
// }