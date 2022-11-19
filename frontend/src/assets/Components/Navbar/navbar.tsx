import './navbar.css'
import UnisagradoLogo from '../../images/social/unisagrado-logo.png'
import RegerLogo from '../../images/social/logo-reger.png'
import BurguerMenu from '../../images/bars-solid.svg'

function Navbar() {

    function interactMenu() {
        document.getElementById("navItems")?.classList.toggle("aberto")
        console.log('teste')
    }

    function subirTela() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <>

            <div id='navbar' className="flex space-betwen font">

                <img id='regerLogo' src={RegerLogo} alt="Logo Projeto Reger" onClick={subirTela} />
                <div id='navItems' className='flex'>
                    <nav>
                        <img id='burguer' src={BurguerMenu} alt="Menu" onClick={interactMenu} />
                        <a href="#Projeto">O Projeto</a>
                        <a href="#Projeto">O que fazemos</a>
                        <a href="#Projeto">Como fazemos</a>
                        <a href="#Projeto">Crescemos</a>
                        <a href="#Projeto">Onde Estamos</a>
                        <a href="#sobre">Dicas</a>
                        <a href="https://unisagrado.edu.br/" target={'_blank'}>
                            <img id='unisagradoLogo' src={UnisagradoLogo} alt="Logo Unisagrado" />
                        </a>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar