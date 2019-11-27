import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu.jsx';
import Usuarios from './Usuarios';


const Tareas = () => <div>tareas</div>



const App = () => (
<BrowserRouter>
  
<Menu />
<Route exact path='/' component={ Usuarios }/> 
<Route exact path='/tareas' component={ Tareas }/> 
</BrowserRouter>

);



export default App;