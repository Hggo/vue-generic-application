export default class Medico {
  
  constructor( nome = '', idade = 0, crm = '', uf = '') {
    this.nome = nome
    this.idade = idade
    this.crm = crm
    this.uf = uf;
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
