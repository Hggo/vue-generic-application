import { GenericModel } from "../../model/generic/GenericModel";

export default class GenericService<T extends GenericModel> {

    private url!: String;

    constructor(private resource: any, private entity: T){
        this.url = this.entity.getUrl();
    }

<<<<<<< HEAD
    lista(filtro: GenericModel){
        return this.resource.post(this.url + "/lista", filtro.getFiltro());
=======
    lista(){
        return this.resource.get(this.url);
>>>>>>> 1f71801189505974f1a58d93f21732b6c46f4b02
    }

    getModel(){
        return this.entity;
    }
}