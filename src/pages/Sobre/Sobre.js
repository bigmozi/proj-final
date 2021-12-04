import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Middle from '../../components/Middle/Middle'
import rep from '../../assets/rep.jpg'


const Sobre = () =>  {
        return (
            <>
            <Menu />
            <Middle image={rep}> <h3> Esse projeto foi desenvolvido em dezembro de 2021, 
                para o bootcamp Reprograma. </h3> </Middle>
            <Footer/>
            </>
        )
}

export default Sobre


