export default class Medico {
  
  private fields: any[];

  constructor( private nome : String = "", private idade : Number = 0, private crm : String = "", private uf : String = "") {
    this.fields = this.getFields();
  }

  getClassTitle(){
    return 'Médico';
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
