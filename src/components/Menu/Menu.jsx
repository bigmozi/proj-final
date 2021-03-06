import { Link } from 'react-router-dom'
import './menu.styles.css'

const Menu = () =>{
  return(
    <ul className="navbar">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link className="link" to="/projetos">Projetos</Link>
      </li>
      <li>
        <Link className="link" to="/orcamentos">Orçamentos</Link>
      </li>
    </ul>
  )
}

export default Menu