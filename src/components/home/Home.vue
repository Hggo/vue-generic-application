<template>
    <query-builder :classe="medico"></query-builder>
</template>

<script lang="ts">

import Vue from 'vue';
import Medico from '../../domain/medico/Medico'
import QueryBuilder from '../shared/form/query-builder/QueryBuilder.vue'

export default Vue.extend({
    
    components: {
        'query-builder' : QueryBuilder,
    },
    
    created() {
        this.medico = new Medico("", 0, "", "");
    }, 

});

</script>

<style>
</style>
