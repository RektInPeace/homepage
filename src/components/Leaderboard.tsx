import { Section } from "./Section"
import './components.css'

export const Leaderboard = (ref: React.RefObject<HTMLElement>) => {

    const section = (body: JSX.Element) => {return (
          <section id={"Portfolio"} className="content-section" ref={ref}>
          <div className="container">
                <div className="block-heading">
                  <h1 className='font-face-mm'>Leaderboard</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                {body}
          </div>
          </section>
    )
    }
    const leader = (href: string = "") => { return (
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
    )}

    return (
        section(
            <div className="portfolio-wrapper clearfix">
            {leader()}
            {leader()}
            {leader()}
            {leader()}
            {leader()}

        </div>
        )

    )

}

// const howToMint = () => {
//     return (
//       <section id="Services" className="content-section text-center" ref={mintRef}>
//         <div className="container">
//           <div className="block-heading">
//             <h1 className='font-face-mm'>How to Mint</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//           </div>
//           <div className="row ">
//             <div className="col-md-3 col-sm-6">
//               <div className="service-box">
//                 <div className="service-icon yellow">
//                   <div className="front-content">
//                     <i className="fa fa-globe" aria-hidden="true"></i>
//                     <h3>Choose an NFT</h3>
//                   </div>
//                 </div>
//                 <div className="service-content">
//                   <h3>Choose an NFT</h3>
//                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6">
//               <div className="service-box">
//                 <div className="service-icon orange">
//                   <div className="front-content">
//                     <i className="fa fa-suitcase"></i>
//                     <h3>Mint on Site</h3>
//                   </div>
//                 </div>
//                 <div className="service-content">
//                   <h3>Mint on Site</h3>
//                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6">
//               <div className="service-box ">
//                 <div className="service-icon red">
//                   <div className="front-content">
//                     <i className="fa fa-male" aria-hidden="true"></i>
//                     <h3>View on Opensea</h3>
//                   </div>
//                 </div>
//                 <div className="service-content">
//                   <h3>View on Opensea</h3>
//                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6">
//               <div className="service-box">
//                 <div className="service-icon grey">
//                   <div className="front-content">
//                     <i className="fa fa-users"></i>
//                     <h3>Community</h3>
//                   </div>
//                 </div>
//                 <div className="service-content">
//                   <h3>Community</h3>
//                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* {mintButton()}   */}
//         </div>
//       </section>
//     )
//   }

//   const about = () => {
//     return (
//         Section("About",
//         null,
//         aboutRef, 
//           <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         )
//     )
//   }