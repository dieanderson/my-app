import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Fragment } from "react"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'
import Home from "./pages/Home"
import CustomersList from "./pages/customers/List"
import CustomersRegister from "./pages/customers/Register"
import CustomersEdit from "./pages/customers/Edit"
import Login from "./pages/Login"

const App = () => {
  return (
    <div>
      <BrowserRouter> 
        <Fragment>        
          <Routes>          

            <Route exact path="/" 
              element={
                <TemplateDefault> 
                  <TemplatePage title="Página Inicial" Component={Home} /> 
                </TemplateDefault>
              } 
            />

            <Route path="/customers" 
              element={
                <TemplateDefault> 
                  <TemplatePage title="Lista de Clientes" Component={CustomersList} /> 
                </TemplateDefault>
              } 
            /> 

            <Route path="/customers/add" 
              element={
                <TemplateDefault> 
                  <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} /> 
                </TemplateDefault>
              } 
            />
            
            <Route path="/customers/edit/:id" 
              element={
                <TemplateDefault> 
                  <TemplatePage title="Editar Cliente" Component={CustomersEdit} /> 
                </TemplateDefault>
              } 
            />

            <Route path="/login" 
              element={
                <TemplateClean title="Acesso Restrito" Component={Login} />
              } 
            />
            
          </Routes>
        </Fragment> 
      </BrowserRouter>         
    </div>
  )
}

export default App
