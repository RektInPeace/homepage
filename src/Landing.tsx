import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import React, { Component, useRef, createRef, useState } from "react";
import { render } from "react-dom"; import audio from '../public/audio.png'
import no_audio from '../public/no_audio.png'





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

  const main = () => {
    return (
      <section id="Banner" className="content-section">
        <div className="container content-wrap text-center">
          <h1>Rect In Peace</h1>
          <h3>
            <em>Where your NFTs are laid to rest</em>
          </h3>
          <a className="btn btn-primary btn-xxl smooth-scroll" href="https://mint.rektinpeace.com">Mint</a>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
  const video = () => {
    const url: string = "https://www.googleapis.com/drive/v3/files/125Mf3RHkWTJfP7fy5YkBh7ME6XWIeSSF?alt=media&key=AIzaSyAbJP_B4-X6mNasCDFS-3JrE4JoygtDDAI"
    return (
      <video controlsList='nodownload' autoPlay={true} muted={muted} loop width="100%" height="100%">
        <source src={url} type="video/mp4" />
      </video>
    )
  }
  const about = () => {
    return (
      <section id="About" className="content-section" ref={aboutRef}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-heading">
                <h2>About</h2>
              </div>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  const howToMint = () => {
    return (
      <section id="Services" className="content-section text-center" ref={mintRef}>
        <div className="container">
          <div className="block-heading">
            <h2>How to Mint</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="row">
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
          <Button href='https://mint.rektinpeace.com'>Mint</Button>
        </div>
      </section>
    )
  }
  const roadmap = () => {
    return (
      <section id="About" className="content-section text-center" ref={roadmapRef}>
        <div className="container">
          <div className="block-heading">
            <h2>Road Map</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <img src='spooky_background.JPG'></img>
        </div>
      </section>
    )
  }
  const leaderboard = () => {
    return (
      <section className="content-section text-center" id="Portfolio" ref={leaderRef}>
        <div className="container">
          <div className="block-heading">
            <h2>Leaderboard</h2>
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
          <img src='/logo512.png' width="50px" alt="" />
          &nbsp;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1 }}>
            <Nav.Item>
              <Nav.Link onClick={() => scrollTo(aboutRef)}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollTo(mintRef)}>Minting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollTo(roadmapRef)} >Road Map</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => scrollTo(leaderRef)}>Leaderboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button href='https://mint.rektinpeace.com'>MINT</Button>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-right" >
            <Nav.Item>
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
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  return (
    <div className='backgroundColor'>
      <div className='geeks'>
        {video()}
        {about()}
        {howToMint()}
        {roadmap()}
        {leaderboard()}
        {footer()}
      </div>
      {nav()}
      <Navbar className='bottomPin'>
        <Button onClick={handleToggleMute} size="lg" variant="clear">
          <img src={muteImg} alt="add item" width="30" />
        </Button>
      </Navbar>
    </div>

  )
}
