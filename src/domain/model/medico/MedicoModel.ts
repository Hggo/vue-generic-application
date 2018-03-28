import { GenericModel } from "../generic/GenericModel";

export class MedicoModel extends GenericModel{
  
  private fields: any[];
  private nome : String = ""; 
  private idade : Number = 0; 
  private crm : String = ""; 
  private uf : String = "";
  
  constructor() {
    super();
    this.fields = this.getFields();
  }

  getClassTitle(){
    return 'Médico';
  }

  getUrl(){
      return 'medicos';
  }

  getFields(){
      return [
        {
            title: 'Nome',
            field: this.nome,
            type: 'text'
        },
        {
          title: 'Idade',
          field: this.idade,
          type: 'number'
        },
        {
          title: 'CRM',
          field: this.crm,
          type: 'number'
        },
        {
          title: 'UF',
          field: this.uf,
          type: 'select',
          options: [ 'CE', 'SP', 'RJ' ]
        }
      ]
    }
}