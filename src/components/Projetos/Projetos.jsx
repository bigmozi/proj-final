import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './projetos.styles.css'

const Projetos = () => {
   

    

  return(
    <>
     <section className='projs'>
      <header>
        <h2>Projetos</h2>

        
      </header>

      <main>


      <li>
        <Link className="button-design" to="/projetos/design">Design e Marketing</Link>
      </li>
      <li>
        <Link  className="button-front" to="/projetos/front">Front End</Link>
      </li>

            
        
        
      </main>

    </section> 
    </>
  )
}

export default Projetos