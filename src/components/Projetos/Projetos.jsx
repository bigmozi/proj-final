import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './projetos.styles.css'

const Projetos = () => {
   
  // const [projs, setProjs] = useState ([])
  // // const [newTask, setNewTask] = useState ('')

  // function irParaProjetosDesign(){
  //         const projsD = {
             
  //         }

        
  // }
    

  return(
    <>
     <section className='projs'>
      <header>
        <h2>Projetos</h2>

        
      </header>

      <main>


      <li>
        <Link className="button-design" to="/design">Design e Marketing</Link>
      </li>
      <li>
        <Link  className="button-front" to="/front">Front End</Link>
      </li>

            
        
        
      </main>

    </section> 
    </>
  )
}

export default Projetos