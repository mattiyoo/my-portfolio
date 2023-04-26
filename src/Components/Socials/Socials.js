import { useEffect, useRef, useState } from 'react'
import '../Socials/socials.css'
// import { TimelineLite } from 'gsap/gsap-core';
import { gsap } from 'gsap';

const Socials = () => {

    let tl = gsap.timeline();

    useEffect(() => {

        tl.to('.box', {duration: 3, scale: 1, stagger: 0.2, ease: 'Bounce.easeInOut'})
        .to('.content', {duration: 2, opacity: 1, delay: -2.2, ease: 'Power2.easeInOut'})

        tl.duration(5);
    }, []);

    return (
        <section className="socials" id="socials">
            <div className="box-background">
                <div className="box-tl">
                    <div className="top top-box-tl">
                        <div className="box box-1"><div className="white-circle"></div></div>
                        <div className="box box-2"></div>
                    </div>

                    <div className="top bottom-box-tl">
                        <div className="box box-3"></div>
                        <div className="box box-4"></div>
                    </div>
                </div>

                <div className="box-br">
                    <div className="bottom top-box-tl">
                        <div className="box box-1"></div>
                        <div className="box box-2"></div>
                    </div>

                    <div className="bottom bottom-box-tl">
                        <div className="box box-3"></div>
                        <div className="box box-4"><div className="white-circle"></div></div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="socials-container">
                    <h1>Hello, I'm Matthew!</h1>
                    <h3><em>Welcome to my socials</em></h3>

                    <div className='media'>
                        <a href="https://www.facebook.com/mattiyoo"><div className='soc-med'><i className='bx bxl-facebook'></i></div></a>
                        <a href="https://www.instagram.com/mattiyooulol/"><div className='soc-med'><i className='bx bxl-instagram' ></i></div></a>
                        <a href="https://www.linkedin.com/in/matthew-basan-134252264/"><div className='soc-med'><i className='bx bxl-linkedin' ></i></div></a>
                        <a href="https://github.com/mattiyoo"><div className='soc-med'><i className='bx bxl-github' ></i></div></a>
                    </div>

                    <div className="content-background">
                        <div className="content-box box-bl">
                            <div className="bottom bottom-box-bl">
                                <div className="box box-1"></div>
                                <div className="box box-2"></div>
                            </div>

                            <div className="bottom bottom-box-bl">
                                <div className="box box-3"></div>
                                <div className="box box-4"></div>
                            </div>
                        </div>

                        <div className="content-box box-tr">
                            <div className="top top-box-tr">
                                <div className="box box-1"></div>
                                <div className="box box-2"></div>
                            </div>

                            <div className="top top-box-tr">
                                <div className="box box-3"></div>
                                <div className="box box-4"></div>
                            </div>
                        </div>

                        {/* <div
                        className="dvd"
                        // style={{ top: `${y}px`, left: `${x}px`, backgroundColor: color }}
                        >M</div> */}
                    </div>
                </div>
                
            </div>
        </section>
    );
}
 
export default Socials;