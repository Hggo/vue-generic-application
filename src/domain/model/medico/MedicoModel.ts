import { GenericModel } from "../generic/GenericModel";

export class MedicoModel extends GenericModel{
  
  private fields: any[];
  private nome!  : String; 
  private idade! : Number; 
  private crm! : String; 
  private uf! : String;
  
  constructor(object = {}) {
    super(object);
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
          field: 'nome',
          value: this['nome'],
          type: 'text'
        },
        {
          title: 'Idade',
          field: 'idade',
          value: this['idade'],
          type: 'number'
        },
        {
          title: 'CRM',
          field: 'crm',
          value: this['crm'],
          type: 'number'
        },
        {
          title: 'UF',
          field: 'uf',
          type: 'select',
          value: this['uf'],
          options: [ 'CE', 'SP', 'RJ' ]
        }
      ]
    }
}