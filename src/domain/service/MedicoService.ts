import GenericService from './generic/GenericService';
import { MedicoModel } from '../model/medico/MedicoModel';

export default class MedicoService extends GenericService<MedicoModel> {

    constructor(resource){
        super(resource, MedicoModel);
    }

}