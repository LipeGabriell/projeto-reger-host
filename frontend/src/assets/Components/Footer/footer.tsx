import './footer.css'
import RegerLogo from '../../images/social/logo-reger.png'
import LogoUnisagrado from '../../images/social/unisagrado-logo.png'
import Twitter from '../../images/social/twitter.png'
import Facebook from '../../images/social/facebook.png'
import Instagram from '../../images/social/instagram.png'
import Github from '../../images/social/github.svg'
import Linkedin from '../../images/social/linkedin.png'

function Footer() {
    return (
        <>
            <footer id='footer' className='font' >

                <div id='redesFooter'>
                    <h3>Redes sociais:</h3>
                    <div>
                        <a href='https://pt-br.facebook.com/UNISAGRADOBauru/' target={'_blank'}>
                            <img src={Facebook} alt="Ícone facebook" />
                        </a>
                        <a href='https://www.instagram.com/unisagrado_oficial/' target={'_blank'}>
                            <img src={Instagram} alt="Ícone instagram" />
                        </a>
                    </div>
                </div>

                <div id='orientadoFooter'>
                    <h3>Orientado por:</h3>
                    <a href='https://br.linkedin.com/in/vinicius-santos-andrade-0abb07a0' target={'_blank'}>
                        <img src={Linkedin} alt="Ícone github" />
                        <p>Vinicius Santos Andrade</p>
                    </a>
                </div>

                <div id='desenvolvidoFooter'>
                    <h3>Desenvolvido por:</h3>
                    <div>
                        <div>
                            <a href="https://github.com/LipeGabriell" target={'_blank'}>
                                <img src={Github} alt="Ícone github" />
                                <p>Felipe Gabriel</p>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/jescacelestino" target={'_blank'}>
                                <img src={Github} alt="Ícone github" />
                                <p>Jéssica Celestino</p>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/LauraSchiavon" target={'_blank'}>
                                <img src={Github} alt="Ícone github" />
                                <p>Laura Schiavon</p>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/LuanR44" target={'_blank'}>
                                <img src={Github} alt="Ícone github" />
                                <p>Luan Sancassani</p>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/mariferndes" target={'_blank'}>
                                <img src={Github} alt="Ícone github" />
                                <p>Mariana Fernandes</p>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/pauloferrarez" target={'_blank'}>
                                <img src={Github} alt="Ícone github" />
                                <p>Paulo Cesar Ferrarez</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div id='uniLogoFooter'>
                    <a href="https://unisagrado.edu.br/" target={'_blank'}>
                        <img src={LogoUnisagrado} alt="Logo unisagrado" />
                    </a>

                </div>

            </footer>

        </>
    )
}

export default Footer