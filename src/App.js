import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import Home from "./pages/Home"
import Customers from "./pages/Customers"

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
            <Route exact path={'/'}>
              <TemplatePage title="Home" Component={Home} />
            </Route>
            <Route path={'/customers'}>
                <TemplatePage title="Clientes" Component={Customers} />
            </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App;
