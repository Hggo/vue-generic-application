<template lang="html">
    <div>
        <form-button type="novo" title="Novo" @click.native="toggle"/>

        <sui-modal v-model="open">
            <sui-modal-header>{{ titulo }}</sui-modal-header>
            <sui-modal-content>
                <sui-modal-description>
                    <sui-header>Cadastro</sui-header>
                    <slot></slot>
                    <form-button type="pesquisar" title="Cancelar" @click.native="toggle"></form-button>
                </sui-modal-description>
            </sui-modal-content>
        </sui-modal>
  </div>
</template>

<script lang="ts">

    import Vue from 'vue';

    import FormButton from '../form-button/FormButton.vue'

    export default Vue.extend({
        components: {
            'form-button' : FormButton,
        },
        data() {
            return { open: false };
        },
        props: {
            classe: {
                required: true,
                type: Object
            },
            titulo: {
                required: true,
                type: String
            }
        },
        created(){
            
        },
        methods: {
            toggle(){
                this.open = !this.open;
            }
        }
    });

</script>

<style>

    .modal {
        margin-top: 100px !important;
        margin-bottom: 100px !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        overflow:auto;
    }

    button {
        margin-left: 10px !important;
        margin-bottom: 20px !important;
    }

    .content {
        height: 100%
    }

</style>