<template>
    <query-builder :classe="medico"></query-builder>
</template>

<script lang="ts">

import Vue from 'vue';
import QueryBuilder from '../shared/form/query-builder/QueryBuilder.vue'
import { MedicoModel } from '../../domain/model/medico/MedicoModel';

export default Vue.extend({
    
    components: {
        'query-builder' : QueryBuilder,
    },
    
    created() {
        this.medico = new MedicoModel();
    }, 

});

</script>

<style>
</style>
