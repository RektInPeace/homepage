import {Component} from 'react';
import ReactPlayer from 'react-player'
import Navigation from './components/NavBar'
export const Landing = () => {

  const main = () => {
    return(
      <section id="Banner" class="content-section">
      <div class="container content-wrap text-center">
        <h1>Rect In Peace</h1>
        <h3>
          <em>Where your NFTs are laid to rest</em>
        </h3>
        <a class="btn btn-primary btn-xxl smooth-scroll" href="https://mint.rektinpeace.com">Mint</a>
      </div>
      <div class="overlay"></div>
    </section>
    )
  }

  const video = () => {
    return (
       <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url= '/video.MP4'
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
    )
  }

  const nav = () => {
    return (
      <div>
        <div class="logo">
          {/* <img src='/logo_black.png' ></img> */}
          {/* <i class="fa fa-plane" aria-hidden="true"><span>Landing Page</span></i> */}
        </div>
        <a class="menu-toggle rounded" href="#">
          <i class="fa fa-bars"></i>
        </a>
        <nav id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="sidebar-brand">
              <a class="smooth-scroll" href="#Header"></a>
            </li>
            <li class="sidebar-nav-item">
              <a class="smooth-scroll" href="#page-top">Home</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="smooth-scroll" href="#About">About</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="smooth-scroll" href="#Services">Services</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="smooth-scroll" href="#Portfolio">Portfolio</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="smooth-scroll" href="#Testimonials">Testimonials</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="smooth-scroll" href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  const about = () => {
    return (
      <section id="About" class="content-section">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-12">
          <div class="block-heading">
            <h2>About</h2>
          </div>
          <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </section>
    )
  }
  const metadata = () => {
    return (

      <section id="Services" class="content-section text-center">
        <div class="container">
          <div class="block-heading">
            <h2>How to Mint</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="service-box">
                <div class="service-icon yellow">
                  <div class="front-content">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <h3>Choose an NFT</h3>
                  </div>
                </div>
                <div class="service-content">
                  <h3>Choose an NFT</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box">
                <div class="service-icon orange">
                  <div class="front-content">
                    <i class="fa fa-suitcase"></i>
                    <h3>Mint on Site</h3>
                  </div>
                </div>
                <div class="service-content">
                  <h3>Mint on Site</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box ">
                <div class="service-icon red">
                  <div class="front-content">
                    <i class="fa fa-male" aria-hidden="true"></i>
                    <h3>View on Opensea</h3>
                  </div>
                </div>
                <div class="service-content">
                  <h3>View on Opensea</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box">
                <div class="service-icon grey">
                  <div class="front-content">
                    <i class="fa fa-users"></i>
                    <h3>Community</h3>
                  </div>
                </div>
                <div class="service-content">
                  <h3>Community</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  const leaderboard = () => {
    return (
      <section class="content-section text-center" id="Portfolio">
        <div class="container">
          <div class="block-heading">
            <h2>Leaderboard</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="portfolio-wrapper clearfix">
            <a class="each-portfolio" data-fancybox="gallery" href="images/p-two.jpeg">
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-two.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span class="zoom"><i class="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a class="each-portfolio" data-fancybox="gallery" href="images/p-three.jpeg">
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-three.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span class="zoom"><i class="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a class="each-portfolio" data-fancybox="gallery" href="images/p-four.jpeg">
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-four.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span class="zoom"><i class="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a class="each-portfolio" data-fancybox="gallery" href="images/p-five.jpeg">
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-five.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span class="zoom"><i class="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a class="each-portfolio" data-fancybox="gallery" href="images/p-six.jpeg">
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-six.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span class="zoom"><i class="fa fa-search-plus"></i></span>
                </div>
              </div>
            </a>
            <a class="each-portfolio" data-fancybox="gallery" href="images/p-three.jpeg">
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-three.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <span class="zoom"><i class="fa fa-search-plus"></i></span>
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
      <footer class="footer text-center">
      <div class="container">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="javascript:void(0)">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white mr-3" href="javascript:void(0)">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-link rounded-circle text-white" href="javascript:void(0)">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <p class="text-muted small mb-0">Copyright © RektInPeace 2022</p>

      </div>
    </footer>
    )
  }


  return (

    <div>
    <head>
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"></link> 
    </head>

    {nav()}
    <Navigation></Navigation>
    {video()}
    {main()}
    {about()}
    {metadata()}
    {leaderboard()}
    {footer()}

    </div>

  )
}
