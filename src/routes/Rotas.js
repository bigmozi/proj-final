import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'
import Projetos from '../pages/Projetos/Projetos'
 import ProjetosD from '../pages/ProjetosD/ProjetosD'
 import ProjetosF from '../pages/ProjetosF/ProjetosF'
import Orcamentos from '../pages/Orcamentos/Orcamentos'

function Rotas () {
    return (
        <BrowserRouter> 
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/projetos" component={Projetos} />
                <Route path="/design" component={ProjetosD} />
                <Route path="/front" component={ProjetosF} />
                <Route path="/orcamentos" component={Orcamentos} />
                


            </Switch>
               
        </BrowserRouter>
    )

}

export default Rotas