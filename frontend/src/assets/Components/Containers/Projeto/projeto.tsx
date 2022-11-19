import './projeto.css'
import Celular from '../../../images/celular.png'
import Num1 from '../../../images/num1.svg'
import Num2 from '../../../images/num2.svg'
import Num3 from '../../../images/num3.svg'
import Num4 from '../../../images/num4.svg'
import Localizacao from '../../../images/location.svg'



function Projeto() {
    return (
        <>

            <section id='projeto' className='flex font'>

                <div id='titleProjeto'>
                    <h1>O <span>PROJETO</span></h1>
                </div>

                <div id='itemsProjeto'>

                    <div id='celularProjeto'>{/*(celular)*/}

                        <img src={Celular} alt="" />

                    </div>

                    <div id='items1' className='flex'>

                        <div id='item1Projeto'>{/*(1)*/}
                            <img src={Num1} alt="" />
                            <h2>O QUE FAZEMOS</h2>
                            <p>O projeto tem como função reduzir o consumo de resíduos dentro do campus, assim incentivando o descarte correto.</p>
                        </div>



                        <div id='item2Projeto'>{/*(2)*/}
                            <img src={Num2} alt="" />
                            <h2>COMO FAZEMOS</h2>
                            <p>Dentro do projeto os descartes são feitos através dos lixos de recicláveis, orgânicos, de rejeitos, de medicamentos e de pilhas, fazendo com que os os mesmos sejam descartados adequadamente. </p>
                        </div>

                    </div>

                    <div id='celularDesktop'>{/*(celular)*/}

                        <img src={Celular} alt="" />

                    </div>

                    <div id='items2' className='flex'>

                        <div id='item3Projeto'>{/*(3)*/}
                            <img src={Num3} alt="" />
                            <h2>CRESCEMOS</h2>
                            <p>Até o momento tivemos 189 pessoas atendidas de forma direta e 8340 atendimentos de forma indireta pelo projeto.</p>
                        </div>

                        <div id='item4Projeto'>{/*(4)*/}
                            <img src={Num4} alt="" />
                            <h2>ONDE ESTAMOS</h2>
                            <p>R. Irmã Arminda, 10-50 <br /> - Jardim Brasil, Bauru - SP, <br /> 17011-160 <img id='locaPin' src={Localizacao} alt="" /></p>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default Projeto;