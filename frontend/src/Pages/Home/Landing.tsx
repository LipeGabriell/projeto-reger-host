
import Navbar from "../../assets/Components/Navbar/navbar"
import Home from '../../assets/Components/Containers/Home/home'
import Projeto from "../../assets/Components/Containers/Projeto/projeto"
import Footer from "../../assets/Components/Footer/footer"
import Sobre from "../../assets/Components/Containers/Sobre/sobre"

function Landing() {
    return (
        <>
            <Navbar />
            <Home />
            <Projeto />
            <Sobre />
            <Footer />
        </>
    )
}

export default Landing