<template>
    <form class="ui form">
        <h4 class="ui dividing header">{{ classe.getClassTitle() }}</h4>
        <div class="fields">
            <!-- this should be a directive -->
            <form-field :value="field" v-for="field in classe.fields" v-if="field.type == 'text' || field.type == 'number'"></form-field>
            <form-field-select :value="field" v-for="field in classe.fields" v-if="field.type == 'select'"></form-field-select>
        </div>
        <form-button type="pesquisar" title="Pesquisar"/>
        <modal-button :classe="classe" :titulo="classe.getClassTitle()">
            <add-builder :classe="classe"></add-builder>
        </modal-button>
    </form>
</template>

<script>

    import FormField from '../form-field/FormField'
    import FormFieldSelect from '../form-field/form-field-select/FormFieldSelect'
    import FormButton from '../../form-button/FormButton'
    import ModalButton from '../../modal-button/ModalButton'
    import AddBuilder from '../add-builder/AddBuilder'

    export default {

        components: {
            'form-field' : FormField,
            'form-button' : FormButton,
            'modal-button' : ModalButton,
            'add-builder' : AddBuilder,
            'form-field-select' : FormFieldSelect
        },
        props: {
            classe: {
                required: true
            }
        },
        data(){
            return {
                buffer: this.classe
            }
        },
    }

</script>

<style scoped>

    form {
        margin: 10px;
    }

</style>