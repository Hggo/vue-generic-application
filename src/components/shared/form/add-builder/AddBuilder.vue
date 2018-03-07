<template>
    <form class="ui form">
        <div class="fields">
            <form-field :value="field" v-for="field in classe.fields"></form-field>
        </div>
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

    form {
        margin: 10px;
    }

</style>