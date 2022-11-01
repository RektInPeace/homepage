import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import React, { Component, useRef, createRef, useState } from "react";
import { render } from "react-dom"; import audio from '../public/audio.png'
import no_audio from '../public/no_audio.png'
import './fonts/Bloody-Terror.ttf'
import './fonts/Melted-Monster.ttf'
import {Section, Leaderboard} from './components'




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
        <video className='video-player' controlsList='nodownload' autoPlay={true} muted={muted} loop width="100%" height="100%">
          <source src={url} type="video/mp4" />
          <img src='/logo_white.png'></img>
        </video>      
        <div >
            <button className='mute-button' onClick={handleToggleMute} >
              <img src={muteImg} alt="add item" width="20%" />
            </button>
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
              </div>
          </div>
        </div>
      </section>
    )
  }
  const about = () => {
    return (
        Section("About",
        null,
        aboutRef, 
          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        )
    )
  }

  const howToMint = () => {
    return (
      <section id="Services" className="content-section text-center" ref={mintRef}>
        <div className="container">
          <div className="block-heading">
            <h1 className='font-face-mm'>How to Mint</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="row ">
            <div className="col-md-3 col-sm-6">
              <div className="service-box">
                <div className="service-icon yellow">
                  <div className="front-content">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <h3>Choose an NFT</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Choose an NFT</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-box">
                <div className="service-icon orange">
                  <div className="front-content">
                    <i className="fa fa-suitcase"></i>
                    <h3>Mint on Site</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Mint on Site</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-box ">
                <div className="service-icon red">
                  <div className="front-content">
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <h3>View on Opensea</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>View on Opensea</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <i className="fa fa-users"></i>
                    <h3>Community</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Community</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
          </div>
          {mintButton()}  
        </div>
      </section>
    )
  }
  const roadmap = () => {
    return (
      Section("RoadMap",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      roadmapRef,
      <img src='spooky_background.JPG'></img>

      )
    )
  }
  const leaderboard = () => {
    return (
      <section className="content-section text-center" id="Portfolio" ref={leaderRef}>
        <div className="container">
          <div className="block-heading">
            <h1 className='font-face-mm'>Leaderboard</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="portfolio-wrapper clearfix">
            <a className="each-portfolio" data-fancybox="gallery" href="images/p-two.jpeg">
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-two.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span className="zoom"><i className="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a className="each-portfolio" data-fancybox="gallery" href="images/p-three.jpeg">
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-three.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span className="zoom"><i className="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a className="each-portfolio" data-fancybox="gallery" href="images/p-four.jpeg">
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-four.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span className="zoom"><i className="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a className="each-portfolio" data-fancybox="gallery" href="images/p-five.jpeg">
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-five.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span className="zoom"><i className="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a className="each-portfolio" data-fancybox="gallery" href="images/p-six.jpeg">
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-six.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span className="zoom"><i className="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a className="each-portfolio" data-fancybox="gallery" href="images/p-three.jpeg">
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-three.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span className="zoom"><i className="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    )
  }
  const footer = () => {
    return (
      <footer className="footer text-center">
        <div className="container">
          <ul className="social-icons">
            <li className='social-icon' >
              <a href='https://twitter.com/'>
                <img height='60px' src='/twitter-logo.png' alt='Twitter'></img>
              </a>
            </li>
            <li className='social-icon' >
              <a href='https://twitter.com/'>
                <img height='60px' src='/discord-logo.png' alt='Twitter'></img>
              </a>
            </li>
            <li className='social-icon' >
              <a href='https://twitter.com/'>
                <img height='60px' src='/opensea-logo.png' alt='Twitter'></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
  const nav = () => {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Nav.Item>
            <Nav.Link className='font-face-bt' onClick={() => scrollTo(leaderRef)}>REKT IIN PEACE</Nav.Link>
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
            {/* <Nav.Item>
              <Nav.Link className='font-face-bt' onClick={() => scrollTo(roadmapRef)} >Road Map</Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link>
                <img height='40px' src='/twitter-logo.png' alt='Twitter'></img>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <img height='40px' src='/discord-logo.png' alt='Twitter'></img>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <img height='40px' src='/opensea-logo.png' alt='Twitter'></img>
              </Nav.Link>
            </Nav.Item> */}
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
      {about()}
      {howToMint()}
      {roadmap()}
      {Leaderboard(leaderRef)}
      {leaderboard()}
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