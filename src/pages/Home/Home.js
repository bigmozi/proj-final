import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Middle from '../../components/Middle/Middle'
import Mozi from '../../assets/mozi.jpg'

const Home = () =>  {
        return (
            <>
            <Menu />
            <Middle image={Mozi}> <h1> E aí, tudo bem? Prazer, sou mozi! </h1> </Middle>
            <Footer />


            </>
        )
}

export default Home