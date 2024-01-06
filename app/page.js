"use client"
import './page.css';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import pyl from '../public/imgs/py.png'
import gol from '../public/imgs/golang.png'
import kotlin from '../public/imgs/kotlin.png'
import js from '../public/imgs/js.png'
import Snowfall from 'react-snowfall';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import ds_logo from "../public/imgs/discord.png"
import github from "../public/imgs/github.png"
import spotify from "../public/imgs/spotify.png"
import saturn from "../public/imgs/saturn.png"


export default function App(){
    disableReactDevTools();
    const [clicked, setClicked] = useState(false);
    let isMuted = 0

    const handleButtonClick = () => {
        setClicked(true);
        const audio = document.getElementById("aud-vid");
        audio.play();
        audio.volume = 0.3;
    }
    const handleMuteMusic = () => {
        if (isMuted === 0){
            const audio = document.getElementById("aud-vid");
            audio.pause();
            isMuted = 1
        }else{
            const audio = document.getElementById("aud-vid");
            audio.play();
            isMuted = 0
        }
    }


    const inline = {
        display: 'inline-block',
    }
    return (
        <main className='flex center jcenter tcenter'>
            <Snowfall snowflakeCount={100} style={{ zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />


            {!clicked && (
                <div className="clickToEnter" onClick={handleButtonClick}>
                    <p className='App-header text-cte'>[ Click to Enter ]</p><br/>
                </div>
            )}


            <div className="video_handler">
                <audio id="aud-vid" loop playsInline>
                    <source src="https://cdn3.deliciouspeaches.com/get/music/20230621/Clovis_Reyes_-_Fluxxwave_76176652.mp3" type="audio/mpeg"/>
                </audio>
            </div>
            <header className='App-header'>
                <div className='Chinar center jcenter tcenter container-inline'>

                    <div className="avatar-box">
                        <img src="https://cdn.usesaturn.xyz/kildoom.png" className="avatar"/>
                    </div>
                    <h1 className="lol">KilDoom <p className="username">@kildoom</p></h1>

                    <code>
                        <Image src={pyl} className="lang" alt="Python"/>
                        <Image src={gol} className="lang" alt="Python"/>
                        <Image src={js} className="lang" alt="Python"/>
                        <Image src={kotlin} className="lang" alt="Python"/>

                    </code>
                    <div className="about-me">

                            <p className="satoshi">
                                Hi! I am a KilDoom developer from Russia,<br/>
                                I am the owner of UseSaturn Projects,<br/>
                                as well as the staff of FruitSpace
                            </p>


                    </div>
                    <div className="buttons inline center">
                        <a style={inline} target="_blank">
                            <button className="Github githubb inline ml10px center"
                                    onClick={() => window.open('https://discord.com/users/930536085598126131', '_blank')}>
                                <Image src={ds_logo} alt='discord' className="img32px b25px"/>
                                <p className="dtext satoshi">Discord</p>
                            </button>
                        </a>
                        <a style={inline} target="_blank">
                            <button className="Github githubb inline ml10px center"
                                    onClick={() => window.open('https://usesaturn.xyz', '_blank')}>
                                <Image src={github} className="img32px b25px"/>
                                <p className="dtext satoshi">GitHub</p>
                            </button>
                        </a>
                        <a style={inline} target="_blank">
                            <button className="Github githubb ml10px center"
                                    onClick={() => window.open('https://usesaturn.xyz', '_blank')}>
                                <Image src={spotify} className="img32px b25px"/>
                                <p className="dtext satoshi">Spotify</p>
                            </button>
                        </a>
                        <a style={inline} target="_blank">
                            <button className="Github githubb ml10px center"
                                    onClick={() => window.open('https://usesaturn.xyz', '_blank')}>
                                <Image src={saturn} width={32}/>
                                <p className="dtext satoshi">Saturn</p>
                            </button>
                        </a>


                    </div>
                    <br/>

                </div>

            </header>
        </main>
    );
}