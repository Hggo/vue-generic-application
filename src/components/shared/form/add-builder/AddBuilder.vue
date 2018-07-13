<template>
    <div>
        <form class="ui form">
            <div class="fields">
                <form-field :value="field" v-for="(field, index) in classe.fields" v-bind:data="field" v-bind:key="index"></form-field>
            </div>
        </form>
        <form-button type="adicionar" :title="getTitleButton()"></form-button>
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
                buffer: this.classe,
            }
        },
        methods: {
            getTitleButton(){
                return this.classe['_id'] != undefined ? 'Alterar' : 'Adicionar';
            }
        },
        props: [ 'classe' ],
    });

</script>

<style scoped>

    form {
        margin: 10px;
    }

    form-button {
        position: fixed; 
        bottom: 0;
    }

    form {
        height: 100%
    }

</style>