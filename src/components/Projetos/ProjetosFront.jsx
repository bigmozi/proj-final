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

  //a ideia aqui é consumir a api do GIT


    

  return(
    <>
     <section className='projs'>
      <header>
        <h2>Front-End</h2>

        
      </header>

      <main>


            <li className='div-clientes'> 

            <div className='cliente'>React</div>
            <div className='cliente'>CSS</div>
            <div className='cliente'>React</div>
            <div className='cliente'>CSS</div>
            <div className='cliente'>React</div>
            <div className='cliente'>CSS</div>
          

            </li>            
        
        
      </main>

    </section> 
    </>
  )
}

export default ProjetosFront