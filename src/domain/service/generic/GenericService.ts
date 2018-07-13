import { GenericModel } from "../../model/generic/GenericModel";

export default class GenericService<T extends GenericModel> {

    private url!: String;

    constructor(private resource: any, private entity: T){
        this.url = this.entity.getUrl();
    }

    lista(filtro: GenericModel){
        return this.resource.post(this.url + "/lista", filtro.getFiltro());
    }

    getModel(){
        return this.entity;
    }
}