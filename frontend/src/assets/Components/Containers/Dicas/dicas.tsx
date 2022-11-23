import './dicas.css'
import Celular from '../../../images/celular.png'
import Num1 from '../../../images/num1.svg'
import Num2 from '../../../images/num2.svg'
import Num3 from '../../../images/num3.svg'
import Num4 from '../../../images/num4.svg'



function Dicas() {
    return (
        <>
            <section id='Dicas' className='flex font'>

                <div id='titleDicas'>
                    <h1>Dicas</h1>
                </div>

                <div id='itemsDicas'>

                    <div id='celularDicas'>{/*(celular)*/}

                        <img src={Celular} alt="" />

                    </div>

                    <div id='items1' className='flex'>

                        <div id='item1Dicas' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">{/*(1)*/}
                            <img src={Num1} alt="" />
                            <h2>dica1</h2>
                            <p>---------</p>
                        </div>



                        <div id='item2Dicas' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">{/*(2)*/}
                            <img src={Num2} alt="" />
                            <h2>dica3</h2>
                            <p>---------</p>
                        </div>

                    </div>

                    <div id='items2' className='flex'>

                        <div id='item3Dicas' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">{/*(3)*/}
                            <img src={Num3} alt="" />
                            <h2>DICA2</h2>
                            <p>---------</p>
                        </div>

                        <div id='item4Dicas' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">{/*(4)*/}
                            <img src={Num4} alt="" />
                            <h2>dica4</h2>
                            <p>------</p>
                        </div>

                    </div>
                </div>


            </section >
        </>
    )
}

export default Dicas;