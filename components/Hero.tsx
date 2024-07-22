import React from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { IoDocumentText, IoFootball } from "react-icons/io5";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';



const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='orange' />
                <Spotlight className="-top-60 -left-10 md:-left-32 md:-top-20 h-screen" fill='orange' />

                <Spotlight className="top-50 left-full h-[80vh] w-[80vw]" fill='green' />
                <Spotlight className="top-50 left-full h-[80vh] w-[90vw]" fill='green' />

                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='white' />
                <Spotlight className="top-50 left-50 h-[80vh] w-[50vw]" fill='white' />

                <Spotlight className="-top-10 -left-140 md:-left-92 md:-top-70 h-screen" fill='red' />
                <Spotlight className="-top-5 -left-140 md:-left-92 md:-top-70 h-screen" fill='red' />


            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                   
                    
                    {/* <TextGenerateEffect className="font-bold text-center md:text-5xl lg:text-6xl">
                        Sebastian Chkourko

                    /> */}
                    <TextGenerateEffect
                        className="font-bold text-center md:text-7xl lg:text-6xl"
                        words="Sebastian Chkourko"
                    />
                    <div className='mt-20'>
                    <a href="#recent-projects">
                        <MagicButton
                            title='about me'
                            icon={""}
                            position='right'
                        />
                    </a>
                    <div className="ml-1 mt-4 flex space-x-20">
                            {/* GitHub Icon */}
                            <a href="https://github.com/sebo6921" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-5xl text-white" />
                            </a>{/*CV */}
                            <a href="latestresume.pdf" target="" rel="noopener noreferrer">
                            <IoDocumentText className="text-5xl text-white" />
                            </a>
                            {/* LinkedIn Icon */}
                            <a href="https://www.linkedin.com/in/sebastian-chkourko-982a1a295/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-5xl text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
