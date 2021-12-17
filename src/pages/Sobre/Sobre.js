import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import banner from '../../assets/banner.png'
// import {ImageBackground} from 'react-router-dom';



const Sobre = () =>  {
    
        return (
            <>
            <Menu />
            <Main>
            

<div className="sobre">
    <div className="sobre-desc"> 
        <h2 className="titulo-sobre">Um pouco mais sobre mim</h2>
        <p>  Sou uma tipo 7 do eneagrama que fala pra caramba </p>

        <p> Procuro estar em contato com diferentes ambientes, caçando possibilidades pra mudar minha realidade. Aproveito as oportunidades que me são dadas, encaro desafios com uma visão exploradora, com maestria e sem medo. Sou voltada a processos e a soluções. Gosto muito de facilitar coisas: processos, comunicações, eventos e apresentações. Me considero uma pessoa criativa e mestre das gambiarras. 
        </p>
        

        <a className="botao-sobre" href="https://drive.google.com/file/d/1G0FWE0r5LzJFq3WMLFr0IpzIBoHoS4rT/view?usp=sharing" target="_blank">Veja meu CV!</a>
    </div>
    </div>
            
            
{/* <h3> Esse projeto foi desenvolvido em dezembro de 2021, para o bootcamp Reprograma. </h3> */}


                
                 </Main>
            <Footer/>
            </>
        )
}

export default Sobre


