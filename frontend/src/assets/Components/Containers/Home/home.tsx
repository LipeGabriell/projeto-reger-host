import './home.css'
import Trees from '../../../images/Trees.png'
import Folhas from '../../../images/FolhasBar.png'

function Home() {
    return (
        <>
            <section id='homeSection' className="flex font">
                <div id='inicioHome'>
                    <img id='trees' src={Trees} alt="" />
                    <div className='flex column'>
                        <h1 className='font'>Projeto Reger</h1>
                        <h2 className='font'>O Centro Universitário Sagrado Coração tem uma preocupação constante com os resíduos produzidos em todas as suas atividades...</h2>
                        <a href=""><span>Sobre</span> nós</a>
                    </div>
                </div>
                <div id='folhasDiv'>
                    <div id='folhasHome'>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home