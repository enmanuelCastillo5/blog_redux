import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer.jsx';
import publicacionesReducer from './publicacionesReducer';
 



export default combineReducers({
    usuariosReducer,
    publicacionesReducer
});