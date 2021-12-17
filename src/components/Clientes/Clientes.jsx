import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Clientes/clientes.styles.css'
import listaClientes from '../../components/Projetos/ListaClientes'
import listaProj from '../../components/Projetos/ListaProj'

const Clientes = () => {
   
   


  return(
    <>
     <section className='projs-c'>
      <header>
     
         
     {listaClientes.map(name => 
        
       <h2>  {name.cliente} </h2>)}
        
           
            

        
      </header>

      <main>
            
   
       <div className= 'cliente-div' id=''> 

       {listaClientes.map(peca =>
        <div className='cliente-solo'>
             <li key={peca.id}>
                <img className="" src={peca.foto} />
                <p>Legenda:</p>
                <p> {peca.legenda}</p>

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