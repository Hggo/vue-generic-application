<template>
    <form class="ui form">
        <h4 class="ui dividing header">{{ classe.getClassTitle() }}</h4>
        <div class="fields">
            <!-- this should be a directive -->
            <div class="form" v-for="(field, index) in classe.fields" v-bind:key="index">
                <form-field :value="field"  v-if="field.type == 'text' || field.type == 'number'"></form-field>
                <form-field-select :value="field" v-if="field.type == 'select'"  v-bind:data="field"></form-field-select>
            </div>
            
        </div>
        <!--<pesquisar-button :classe="classe"/>-->
        <form-button type="pesquisar" title="Pesquisar" @click.native="pesquisar"/>
        <modal-button :classe="classe" :titulo="classe.getClassTitle()">
            <add-builder :classe="classe"></add-builder>
        </modal-button>

        <data-table :data="dados" :classe="classe"/>
    </form>
</template>

<script lang="ts">

    import Vue from 'vue';
    import FormField from '../form-field/FormField.vue'
    import FormFieldSelect from '../form-field/form-field-select/FormFieldSelect.vue'
    import FormButton from '../../form-button/FormButton.vue'
    import ModalButton from '../../modal-button/ModalButton.vue'
    import AddBuilder from '../add-builder/AddBuilder.vue'
    import PesquisarButton from '../../form-button/pesquisar-button/PesquisarButton.vue'
    import MedicoService from '../../../../domain/service/MedicoService';
    import DataTable from '../../table/DataTable.vue'

    export default Vue.extend({

        components: {
            'form-field' : FormField,
            'form-button' : FormButton,
            'modal-button' : ModalButton,
            'add-builder' : AddBuilder,
            'form-field-select' : FormFieldSelect,
            'pesquisar-button' : PesquisarButton,
            'data-table' : DataTable
        },
        props: ['classe'],
        data() {
            return {
                dados: []   
            }
        },
        methods: {
            pesquisar(){
                this.service.lista()
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
            this.service = new MedicoService(this.$http);
        },
    });

</script>

<style scoped>

    form .form{
        margin: 10px;
    }

</style>