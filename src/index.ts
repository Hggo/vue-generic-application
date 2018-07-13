import QueryBuilder from './form/query-builder/QueryBuilder.vue'
import { GenericModel } from './domain/model/generic/GenericModel';
import GenericService from './domain/service/generic/GenericService';

export default {
  install (Vue, params = {}) {
    Vue.component('QueryBuilder', QueryBuilder)
  }
}

export {
  GenericModel,
  GenericService
}
