import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './projetos.styles.css'


const ProjetosFront = () => {
   
//   const [projs, setProjs] = useState ([])
//   // const [newTask, setNewTask] = useState ('')

//   function irParaProjetosDesign(){
//           const projsD = {
             
//           }

//   }

  


    

  return(
    <>
     <section className='projs'>
      <header>
        <h2>Front-End</h2>

        
      </header>

      <main>


            <li> 

            <div className='div-projs'>React</div>
            <div className='div-projs'>CSS</div>
            <div className='div-projs'>React</div>
            <div className='div-projs'>CSS</div>
            <div className='div-projs'>React</div>
            <div className='div-projs'>CSS</div>
          

            </li>            
        
        
      </main>

    </section> 
    </>
  )
}

export default ProjetosFront