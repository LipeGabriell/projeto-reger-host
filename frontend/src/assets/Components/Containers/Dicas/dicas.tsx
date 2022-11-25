import './dicas.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Reduzir from '../../../images/reduzir.png'
import Reutilizar from '../../../images/reutilizar.png'
import Reciclar from '../../../images/reciclar.png'
import Repensar from '../../../images/repensar.png'



function Dicas() {
    AOS.init({
        disable: window.innerWidth < 768
    })


    return (
        <>
            <div id='Dicas' className='flex font'>

                <div id='dicasEsquerda' className='flex'>
                    <img src={Reciclar} alt="" />
                    <h3>RECICLAR</h3>
                    <p>Envolve a transformação dos materiais para a produção de matéria-prima para outros produtos por meio de processos industriais ou artesanais. É fabricar um produto a partir de um material usado.
                    </p>
                </div>

                <div id='dicasMeio' className='flex'>
                    <h2>DICAS</h2>
                    <div id='dicasCima'>
                        <img src={Reutilizar} alt="" />
                        <h3>REUTILIZAR</h3>
                        <p>Usar novamente as embalagens.</p>
                    </div>
                    <div id='dicasBaixo'>
                        <img src={Reduzir} alt="" />
                        <h3>REDUZIR</h3>
                        <p>Consumir menos produtos e preferir aqueles que ofereçam menor potencial de geração de resíduos e tenham maior durabilidade.</p>
                    </div>
                </div>

                <div id='dicasDireita' className='flex'>
                    <img src={Repensar} alt="" />
                    <h3>REPENSAR</h3>
                    <p>Sobre os seus atos de consumo e os impactos que eles provocam sobre você mesmo, a economia, as relações sociais e a natureza.</p>

                </div>

            </div>
        </>
    )
}

export default Dicas;