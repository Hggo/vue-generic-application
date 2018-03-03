export default class Medico {
  
  constructor( nome = '', idade = 0, crm='') {
    this.nome = nome
    this.idade = idade
    this.crm = crm
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
      }
      ]
    }
}
