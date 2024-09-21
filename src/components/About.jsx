import React from 'react'
import { Container } from 'react-bootstrap';
import RegForm from './Forms/RegForm';

function About() {
    return (
        <div name="About" className='bg-About h-full md:h-full bg-center bg-cover lg:flex justify-center items-center md:p-10 pb-5'>
            <div className='flex-50 p-5'>
                <h2 className='font-bold leading-10 p-3'>Celebrating 72th Birth Anniversary of Our Founder Chairman Shri M.J.F.Ln Leo Muthu on April 9th 2024.</h2>
                <ul className='leading-8 p-3'>
                    <li style={{ listStyleType: "circle" }}>A great visionary by birth and philanthropist of par excellence, our revered Founder Chairman, MJF. Ln. Leo Muthu ventured into the realm of providing quality education affordable to all.</li>
                    <li style={{ listStyleType: "circle" }}>The phenomenal growth has been marked by his tireless and extraordinary efforts taken with the sole aim of providing quality education to the middle class and lower-middle-class society.</li>
                    <li style={{ listStyleType: "circle" }}>In order to remember our Founder Chairman’s excellent contributions made in the Educational Field and service to the society.</li>
                </ul>
                <div>
                    <button className='border border-transparent bg-gray-800 text-gray-100 m-3 rounded-xl px-[30px] py-[12px] hover:bg-gray-900'>
                        Nominate
                    </button>
                    <button onClick ={()=> navigate(<RegForm></RegForm>)} className='border-2 border-gray-900 text-black !important m-3 rounded-xl px-[30px] py-[12px] hover:bg-yellow-700'>
                        Register
                    </button>
                </div>
            </div>
            <Container>
                <div className='flex-50 rounded-lg ratio ratio-16x9 p-5 z-0'>
                <iframe  className ='rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/g85TNWgwRIg?si=Rgs2v_71BrN6gyv2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Container>

        </div>
    )
}

export default About

//bg-[url("https://i.postimg.cc/kXmxSWn7/aboutbg.png")]