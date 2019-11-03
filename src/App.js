import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Componets/Pages/PageHome';
import Blog from './Componets/Pages/PageBlog';
import Contacto from './Componets/Pages/PageContacto';
import Nosotros from './Componets/Pages/PageNosotros';
import './Assest/Estilos.scss';

function App() {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/pageHome" />
        <Switch>
          <Route exact path = "/pageHome" component = {Home}/>
          <Route exact path = "/pageBlog" component = {Blog}/>
          <Route exact path = "/pageContacto" component = {Contacto}/>
          <Route exact path = "/pageNosotros" component = {Nosotros}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;