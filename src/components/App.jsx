import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu.jsx';
import Usuarios from './Usuarios';
import Publicaciones from '../components/Publicaciones';
import Tareas from '../components/Tareas/index.jsx'



const App = () => (
<BrowserRouter>
  
<Menu />
    <div  className="margen">
        <Route exact path='/' component={ Usuarios }/> 
        <Route exact path='/tareas' component={Tareas} />
        <Route exact path='/publicaciones/:key' component={ Publicaciones }/> 
    </div>
</BrowserRouter>

);



export default App;