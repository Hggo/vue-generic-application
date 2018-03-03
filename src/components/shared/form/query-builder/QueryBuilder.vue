<template>
    <form class="ui form">
        <h4 class="ui dividing header">{{ classe.getClassTitle() }}</h4>
        <div class="fields">
            <form-field :value="field" v-for="field in classe.fields"></form-field>
        </div>
        <form-button type="pesquisar" title="Pesquisar"/>
        <form-button type="novo" title="Novo"/>
    </form>
</template>

<script>

    import FormField from '../form-field/FormField'
    import FormButton from '../../form-button/FormButton'

    export default {

        components: {
            'form-field' : FormField,
            'form-button' : FormButton
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

    button {
        float: left;
        margin: 0 5px 0;
    }

    form {
        margin: 10px;
    }

</style>