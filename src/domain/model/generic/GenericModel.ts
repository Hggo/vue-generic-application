export class GenericModel{

    constructor() {
    }

    getUrl() : String{
        throw new Error("Get url not implemented");
    }
}