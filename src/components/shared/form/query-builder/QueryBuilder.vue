<template>
    <form class="ui form">
        <h4 class="ui dividing header">{{ classe.getClassTitle() }}</h4>
        <div class="fields">
            <!-- this should be a directive -->
            <form-field :value="field" v-for="field in classe.fields" v-if="field.type == 'text' || field.type == 'number'" v-bind:data="field" v-bind:key="field.type"></form-field>
            <form-field-select :value="field" v-for="field in classe.fields" v-if="field.type == 'select'"  v-bind:data="field" v-bind:key="field.type"></form-field-select>
        </div>
        <!--<pesquisar-button :classe="classe"/>-->
        <form-button type="pesquisar" title="Pesquisar" @click.native="pesquisar"/>
        <modal-button :classe="classe" :titulo="classe.getClassTitle()">
            <add-builder :classe="classe"></add-builder>
        </modal-button>
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

    export default Vue.extend({

        components: {
            'form-field' : FormField,
            'form-button' : FormButton,
            'modal-button' : ModalButton,
            'add-builder' : AddBuilder,
            'form-field-select' : FormFieldSelect,
            'pesquisar-button' : PesquisarButton
        },
        props: ['classe'],
        data(){
            return {
                buffer: this.classe
            }
        },
        methods: {
            pesquisar(){
                this.service.lista().then(data => console.log(data.data));
            }
        },
        created(){
            console.log("aa");
            this.service = new MedicoService(this.$http);
        }
    });

</script>

<style scoped>

    form {
        margin: 10px;
    }

</style>