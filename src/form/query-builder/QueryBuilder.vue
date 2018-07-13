<template>
    <form class="ui form">
        <h4 class="ui dividing header">{{ classe.getClassTitle() }}</h4>

        <field-builder :classe="classe"/>
        
        <form-button type="pesquisar" title="Pesquisar" @click.native="pesquisar"/>

        <modal-button texto="Novo" :classe="classe" :titulo="classe.getClassTitle()">
            <add-builder :classe="classe"></add-builder>
        </modal-button>

        <data-table :data="dados" :classe="classe"/>
    </form>
</template>

<script lang="ts">

    import Vue from 'vue';
    import FormField from '../form-field/FormField.vue';
    import FormFieldSelect from '../form-field/form-field-select/FormFieldSelect.vue';
    import FormButton from '../../form-button/FormButton.vue';
    import ModalButton from '../../modal-button/ModalButton.vue';
    import AddBuilder from '../add-builder/AddBuilder.vue';
    import GenericService from '../../domain/service/generic/GenericService';
    import DataTable from '../../table/DataTable.vue';
    import FieldBuilder from '../form-field/FieldBuilder.vue';

    export default Vue.extend({

        components: {
            'form-field' : FormField,
            'form-button' : FormButton,
            'modal-button' : ModalButton,
            'add-builder' : AddBuilder,
            'form-field-select' : FormFieldSelect,
            'data-table' : DataTable,
            'field-builder' : FieldBuilder
        },
        props: ['service'],
        data() {
            return {
                dados: [],
                classe: this.service.getModel() 
            }
        },
        methods: {
            pesquisar(){
                this.service.lista(this.classe)
                            .then(data => this.montaDados(data.data));
            },
            montaDados(dados){
                this.dados = dados;
            }
        },
        watch: {
            dados : function(){
                this.data = this.dados;
            }
        },
        computed:{
            
        },
        created(){
            
        },
    });

</script>

<style scoped>
</style>