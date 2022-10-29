import axiosService from "./service";
import { ResposePuestoTabajo } from '../models/PustoTrabajo';

export const getPuestosTrabajo = async() : Promise<any> => {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const response = await axiosService.get<ResposePuestoTabajo>('search/jobs?query=per_page=10&page=1',requestOptions)

    return response
        
}
    