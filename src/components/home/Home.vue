<template>
    <query-builder :classe="medico"></query-builder>
</template>

<script>

import Medico from '../../domain/medico/Medico'
import QueryBuilder from '../shared/form/query-builder/QueryBuilder'

export default {
    
    components: {
        'query-builder' : QueryBuilder,
    },
    created() {

        this.medico = new Medico();
      
    }, 

}


</script>

<style>
</style>
