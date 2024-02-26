/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
    return (
        <div className='pt-56'>
            <footer id='footer'>
                <div className="container text-white">
                    <div className="flex flex-wrap">
                        <div className=" ml-[15%]">
                            <h1 className="mb-4 text-2xl">Contacto</h1>
                            <p>Dirección: Mi restaurante, medio mundo</p>
                            <p>Teléfono: +34 666 666 666</p>
                            <p><a href="info.html" className="text-blue-500 hover:underline">Sobre nosotros</a></p>
                        </div>
                        <div className="ml-[30%]">
                            <h1 className="mb-4 text-2xl">Horario</h1>
                            <p>Lunes a Viernes: 11am - 10pm</p>
                            <p>Sábados y Domingos: 12pm - 11pm</p>
                            <div className="cc">
                                <p>
                                    <span className="font-bold">El Olivo</span> by{' '}
                                    <span className="font-bold">Fran</span> is licensed under{' '}
                                    <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
                                        target="_blank" rel="license noopener noreferrer"
                                        className="text-blue-500 hover:underline">
                                        CC BY-NC 4.0
                                        <img className="h-5 ml-1 inline" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
                                        <img className="h-5 ml-1 inline" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="BY" />
                                        <img className="h-5 ml-1 inline" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="NC" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
