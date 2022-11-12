import './sobre.css'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lixo1 from '../../../images/lixo1.png'
import Lixo1Mobile from '../../../images/lixo1Mobile.png'
import Lixo2 from '../../../images/lixo2.png'
import Lixo2Mobile from '../../../images/lixo2Mobile.png'
import Lixo3 from '../../../images/lixo3.png'
import Lixo3Mobile from '../../../images/lixo3Mobile.png'

function Sobre() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section id='sobre' className='flex font column'>
                <div id='txtSobre'>
                    <h1><span>SOBRE</span> NÓS</h1>
                    <p>O Centro Universitário Sagrado Coração tem uma preocupação constante com os resíduos produzidos
                        em todas as suas atividades. Essa preocupação vem de uma necessidade não só da instituição, mas
                        um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo. O
                        projeto Reger é um programa realizado pela Unisagrado afim de tomar medidas para reduzir o
                        consumo de resíduos, fazendo com que diminua a quantidade os rejeitos produzidos no campus,
                        incentivando o descarte correto.</p>
                </div>

                <div id='imgSobre'>
                    <img data-aos="fade-left" className='lixoDesktop' src={Lixo1} alt="" />
                    <img data-aos="fade-left" className='lixoDesktop' src={Lixo2} alt="" />
                    <img data-aos="fade-left" className='lixoDesktop' src={Lixo3} alt="" />
                </div>
            </section>
        </>
    )
}

export default Sobre