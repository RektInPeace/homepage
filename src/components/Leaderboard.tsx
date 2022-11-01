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