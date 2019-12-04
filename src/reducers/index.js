import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer.jsx';
import publicacionesReducer from './publicacionesReducer';
 import tareasReducer from './tareasReducer.jsx';



export default combineReducers({
    usuariosReducer,
    publicacionesReducer,
    tareasReducer
});