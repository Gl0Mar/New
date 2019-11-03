import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Componets/Pages/PageHome';
import Blog from './Componets/Pages/PageBlog';
import Contacto from './Componets/Pages/PageContacto';
import Nosotros from './Componets/Pages/PageNosotros';

function App() {
  return (
    <BrowserRouter>
    <Redirect from="/" to="/pageHome" />
    <Switch>
      <Route exact path = "/pageHome" render = {()=><Home/>}/>
      <Route exact path = "/pageNosotros" render = {() => <Nosotros/>} />
      <Route exact path = "/pageBlog" render = {() => <Blog/>} />
      <Route exact path = "/pageContacto" render = {() => <Contacto/>} />
    </Switch>
</BrowserRouter>
  );
}

export default App;