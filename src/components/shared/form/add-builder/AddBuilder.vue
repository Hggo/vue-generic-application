<template>
    <div>
        <form class="ui form">
            <div class="fields">
                <form-field :value="field" v-for="field in classe.fields" v-bind:data="field" v-bind:key="field.type"></form-field>
            </div>
        </form>
        <form-button type="adicionar" title="Adicionar"></form-button>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import FormField from '../form-field/FormField.vue';
    import FormButton from '../../form-button/FormButton.vue';

    export default Vue.extend({

        components: {
            'form-field' : FormField,
            'form-button' : FormButton
        },
        data(){
            return {
                buffer: this.classe
            }
        },
        props: [ 'classe' ],
    });

</script>

<style scoped>

    form {
        margin: 10px;
    }

</style>