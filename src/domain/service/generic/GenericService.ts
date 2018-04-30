import { GenericModel } from "../../model/generic/GenericModel";

export default class GenericService<T extends GenericModel> {

    private url!: String;

    constructor(private resource: any, private entity: T){
        this.url = this.entity.getUrl();
    }

    lista(){
        return this.resource.get(this.url);
    }

    getModel(){
        return this.entity;
    }
}