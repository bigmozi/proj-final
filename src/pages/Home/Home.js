import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Middle from '../../components/Main/Main'
//import Mozi from '../../assets/mozi.jpg'

const Home = () =>  {
        return (
            <>
            <Menu />
            <Middle> 
            <div class= "banner">
         <h1> Oi, eu sou Ane!  </h1>
         <h3>Mas pode me chamar de mozi!</h3>
         
          <p class="sub"> Conheca mais sobre mim!</p>
         <a class= "botao" href= "https://www.linkedin.com/in/ane-carolina" target="_blank" >Quem é Mozi?</a>
        </div>
            
            
             </Middle>
            <Footer />


            </>
        )
}

export default Home