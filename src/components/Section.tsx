import { createRef } from "react";
// import '../styles.css';
import './components.css'


export const Section = (title: string, subtitle: string | undefined | null, ref: React.RefObject<HTMLElement>, body: JSX.Element) => {
    return (
      <section id={title} className="content-section" ref={ref}>
      <div className="container">
            <div className="block-heading">
              <h1 className='font-face-mm'>{title}</h1>
              <p>{subtitle}</p>
            </div>
            {body}
      </div>
      </section>
    )
  }