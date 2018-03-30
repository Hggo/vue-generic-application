import { GenericModel } from "../../model/generic/GenericModel";

export default class GenericService<T extends GenericModel> {

    private entity!: T;
    private url!: String;

    constructor(private resource: any, private model: new () => T){
        this.entity = new model();
        this.url = this.entity.getUrl();
    }

    lista(){
        return this.resource.get(this.url);
    }
}