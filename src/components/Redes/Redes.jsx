
import './redes.styles.css'
import { AiFillLinkedin, FaTwitterSquare, FaGithubSquare, FaFacebookSquare } from 'react-icons/all'
const Redes = (props) => {
  return (
    <header className='redes'>
        
                    <div class="redes-t">
                        <h1> {props.children}</h1>
                        <div class="redes">
                    <a class= "redes-links" href="https://www.facebook.com/bigmozi/" target="https://www.facebook.com/bigmozi/"> <FaFacebookSquare size={30} color='#fff'/>
                       
                        <p>/bigmozi</p>
                    
                    </a>
                    
                    <a class= "redes-links" href="https://github.com/bigmozi" target="https://github.com/bigmozi"> <FaGithubSquare size={30} color='#fff'/>
                        
                        <p>/bigmozi</p>
                    
                    </a>
                    
                    <a class= "redes-links" href="www.twitter.com/variasqueixasss" target="www.twitter.com/variasqueixasss"> <FaTwitterSquare size={30} color='#fff'/> 
                        <p>/variasqueixasss</p>
                    
                    </a>
                    
           
                    <a class= "redes-links" href="https://www.linkedin.com/in/ane-carolina" target="https://www.linkedin.com/in/ane-carolina"> <AiFillLinkedin size={30} color='#fff'/> 
                      <p> ane carolina</p>
                    </a>
                    
                    </div>
                    </div>
                    
       </header>
  )
}

export default Redes