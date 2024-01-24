import React, { useState } from 'react';
import Image from 'next/image';
import Snowfall from 'react-snowfall';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import ds_logo from '../public/imgs/discord.png';
import github from '../public/imgs/github.png';
import spotify from '../public/imgs/spotify.png';
import saturn from '../public/imgs/saturn.png';

export default function App() {
    disableReactDevTools();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        avatarLink: '',
        snowfall: false,
        musicLink: '',
        backgroundLink: '',
        skills: [],
        buttons: [
            { name: 'Discord', link: 'https://discord.com/users/930536085598126131', image: ds_logo },
            { name: 'GitHub', link: 'https://github.com/KilDoomWise', image: github },
            { name: 'Spotify', link: 'https://open.spotify.com/user/31gy5dcfnoyhfzizny4pnxaxzjre?si=49ca8b9eaa1e43d5', image: spotify },
            { name: 'Saturn', link: 'https://usesaturn.xyz', image: saturn },
        ],
    });

    const [confirmed, setConfirmed] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSkillsChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            skills: [...prevData.skills, value],
        }));
    };

    const handleButtonChange = (index, field, value) => {
        setFormData((prevData) => {
            const updatedButtons = [...prevData.buttons];
            updatedButtons[index][field] = value;
            return { ...prevData, buttons: updatedButtons };
        });
    };

    const handleConfirm = () => {
        setConfirmed(true);
    };

    const inline = {
        display: 'inline-block',
    };

    return (
        <main className="flex center jcenter tcenter">
            {confirmed ? (
                <div>
                    <Snowfall snowflakeCount={formData.snowfall ? 100 : 0} style={{ zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <div className="video_handler">
                        <audio id="aud-vid" loop playsInline>
                            <source src={formData.musicLink} type="audio/mpeg" />
                        </audio>
                    </div>
                    <header className="App-header">
                        <div className="Chinar center jcenter tcenter container-inline">
                            <div className="avatar-box">
                                <img src={formData.avatarLink} className="avatar" />
                            </div>
                            <h1 className="lol">
                                {formData.name} <p className="username">@kildoom</p>
                            </h1>
                            <code>
                                {/* Добавьте изображения для других языков программирования */}
                                <Image src={ds_logo} className="lang" alt="Discord" />
                                <Image src={github} className="lang" alt="GitHub" />
                                <Image src={spotify} className="lang" alt="Spotify" />
                                <Image src={saturn} className="lang" alt="Saturn" />
                            </code>
                            <div className="about-me">
                                <p className="satoshi">{formData.description}</p>
                            </div>
                            <div className="buttons inline center">
                                {formData.buttons.map((button, index) => (
                                    <a key={index} style={inline} target="_blank">
                                        <button className="Github githubb inline ml10px center" onClick={() => window.open(button.link, '_blank')}>
                                            <Image src={button.image} alt={button.name} className="img32px b25px" />
                                            <p className="dtext satoshi">{button.name}</p>
                                        </button>
                                    </a>
                                ))}
                            </div>
                            <br />
                        </div>
                    </header>
                </div>
            ) : (
                <div className="container-inline">
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Description:
                            <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Avatar Link:
                            <input type="text" name="avatarLink" value={formData.avatarLink} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Show Snowfall:
                            <input type="checkbox" name="snowfall" checked={formData.snowfall} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Music Link:
                            <input type="text" name="musicLink" value={formData.musicLink} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Background Link:
                            <input type="text" name="backgroundLink" value={formData.backgroundLink} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Skills:
                            <select name="skills" onChange={handleSkillsChange}>
                                <option value="Photoshop">Photoshop</option>
                                <option value="JavaScript">JavaScript</option>
                                {/* Добавьте другие навыки по вашему выбору */}
                            </select>
                        </label>
                        <br />
                        <label>
                            Buttons:
                            {formData.buttons.map((button, index) => (
                                <div key={index}>
                                    <input type="text" value={button.name} onChange={(e) => handleButtonChange(index, 'name', e.target.value)} placeholder="Button Name" />
                                    <input type="text" value={button.link} onChange={(e) => handleButtonChange(index, 'link', e.target.value)} placeholder="Button Link" />
                                    <input type="text" value={button.image} onChange={(e) => handleButtonChange(index, 'image', e.target.value)} placeholder="Button Image URL" />
                                </div>
                            ))}
                        </label>
                        <br />
                        <button type="button" onClick={handleConfirm}>
                            Confirm
                        </button>
                    </form>
                </div>
            )}
        </main>
    );
}
