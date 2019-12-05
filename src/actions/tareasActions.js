import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes';


export const traerTodas = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })

     try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos')
     
        const tareas = {};
        respuesta.data.map((tar) => (
            tareas[tar.userId] = {
                ...tareas[tar.usuerId],
                [tar.id]: {
                    ...tar
                }
            }
        ));

        dispatch({
            type: TRAER_TODAS,
            payload: tareas 
        })
     } catch (error) {
         console.log("error: ", error.message)
         dispatch({
             type: ERROR,
             payload: 'informacion de tareas no disponible.'
         })
     }
}


export const cambioUsuarioId = (usuario_id) => (dispatch) => {
    dispatch({
        type: 'cambio_usuario_id',
        payload: usuario_id
    })
}




export const cambioTitulo = (titulo) => (dispatch) => {
    dispatch({
        type: 'cambio_titulo',
        payload: titulo
    })
}