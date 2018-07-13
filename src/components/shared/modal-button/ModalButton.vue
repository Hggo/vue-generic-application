<template lang="html">
    <div>
        
        <form-button type="novo" :title="texto" @click.native="toggle" v-if="!icon"/>
        <icon-button :type="icon" @click.native="toggle" v-if="icon"/>

        <sui-modal v-model="open">
            <sui-modal-header>{{ titulo }}</sui-modal-header>
            <sui-modal-content>
                <sui-modal-description>
                    <sui-header>{{ getTitle() }}</sui-header>
                    <slot></slot>
                    <form-button type="pesquisar" title="Cancelar" @click.native="toggle"></form-button>
                </sui-modal-description>
            </sui-modal-content>
        </sui-modal>
  </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import FormButton from '../form-button/FormButton.vue';
    import IconButton from '../form-button/IconButton.vue';

    export default Vue.extend({
        components: {
            'form-button' : FormButton,
            'icon-button' : IconButton
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
            },
            icon: {
                required: false,
                type: String
            },
            texto: {
                required: false,
                type: String
            }
        },
        created(){
            
        },
        methods: {
            toggle(){
                this.open = !this.open;
            },
            getTitle(){
                return this.classe['_id'] != undefined ? 'Alteração' : 'Cadastro';
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