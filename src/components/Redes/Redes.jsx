
import './redes.styles.css'
import { AiFillLinkedin, FaTwitterSquare, FaGithubSquare, FaFacebookSquare } from 'react-icons/all'
const Redes = (props) => {
  return (
    <header className='redes'>
        
                    <div class="redes-t">
                        <h1> {props.children}</h1>
                        <div class="redes">
                    <a class= "redes-links" href="https://www.facebook.com/bigmozi/" target="_blank"> <FaFacebookSquare size={30} color='#fff'/>
                       
                        <p>/bigmozi</p>
                    
                    </a>
                    
                    <a class= "redes-links" href="https://github.com/bigmozi" target="_blank"> <FaGithubSquare size={30} color='#fff'/>
                        
                        <p>/bigmozi</p>
                    
                    </a>
                    
                    <a class= "redes-links" href="https://www.twitter.com/variasqueixasss" target="_blank"> <FaTwitterSquare size={30} color='#fff'/> 
                        <p>/variasqueixasss</p>
                    
                    </a>
                    
           
                    <a class= "redes-links" href="https://www.linkedin.com/in/ane-carolina" target="_blank"> <AiFillLinkedin size={30} color='#fff'/> 
                      <p> ane carolina</p>
                    </a>
                    
                    </div>
                    </div>
                    
       </header>
  )
}

export default Redes