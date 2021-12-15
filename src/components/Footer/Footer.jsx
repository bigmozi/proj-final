import './Footer.css'
import { AiFillLinkedin, FaTwitterSquare, FaGithubSquare, FaFacebookSquare } from 'react-icons/all'

const Footer = () => {
  return(
    <div className="footer">
      <h4> Feito por Ane Carolina - 2021</h4>


      <div className="redes">
                    <a class= "redes-links" href="https://www.facebook.com/bigmozi/" target="_blank"> <FaFacebookSquare size={30} color='#fff'/>
                       
                       
                    
                    </a>
                    
                    <a class= "redes-links" href="https://github.com/bigmozi" target="_blank"> <FaGithubSquare size={30} color='#fff'/>
                        
                      
                    
                    </a>
                    
                    <a class= "redes-links" href="https://www.twitter.com/variasqueixasss" target="_blank"> <FaTwitterSquare size={30} color='#fff'/> 
                                          
                    </a>
                    
           
                    <a class= "redes-links" href="https://www.linkedin.com/in/ane-carolina" target="_blank"> <AiFillLinkedin size={30} color='#fff'/> 
                    
                    </a>
                    </div>
    </div>
  )
}

export default Footer