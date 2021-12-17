import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './projetos.styles.css'
import listaProj from '../../components/Projetos/ListaProj'
import listaClientes from '../../components/Projetos/ListaClientes'

const ProjetosDes = () => {
   
function cliqueDesign () {
    
    
    {listaClientes.map(peca =>
        <div className='cliente'>
             <li key={peca.id}>
                <img className="" src={peca.foto} />
                <p>{peca.legenda}</p>

             </li>


        </div>
        
        
        
        )} 
}

const [pecas, setPecas] = useState(false);
 



    // const cliqueDesign = (
    //     { 
    //         return(console.log('o clique rolou'));
    //     }
    // )


  return(
    <>
     <section className='projs'>
      <header>
        <h2>Design e Marketing</h2>

        
      </header>

      <main>
            
   
       <div className= 'div-clientes'> 

             {listaProj.map(cliente =>
            <button className='cliente' onClick={ () => cliqueDesign}>

             <li key={cliente.id}>
                <img className="" src={cliente.logo} alt={cliente.nome} />
                <p>{cliente.nome}</p>
             </li>
             </button>
             )}

       </div>
        
        
      </main>

    </section> 
    </>
  )
}

export default ProjetosDes