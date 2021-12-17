import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Clientes/clientes.styles.css'
import listaClientes from '../../components/Projetos/ListaClientes'
import listaProj from '../../components/Projetos/ListaProj'

const Clientes = () => {
   
   


  return(
    <>
     <section className='projs'>
      <header>
        <h2>Design e Marketing</h2>

        
      </header>

      <main>
            
   
       <div className= 'div-clientes' id=''> 

       {listaClientes.map(peca =>
        <div className='cliente'>
             <li key={peca.id}>
                <img className="" src={peca.foto} />
                <p>{peca.legenda}</p>

             </li>


        </div>
        
        
        
        )} 

       </div>
        
        
      </main>

    </section> 
    </>
  )
}

export default Clientes