<template lang="html">
    <div>
        <form-button type="novo" title="Novo" @click.native="toggle"/>

        <sui-modal v-model="open">
            <sui-modal-header>{{ titulo }}</sui-modal-header>
            <sui-modal-content>
                <sui-modal-description>
                    <sui-header>Cadastro</sui-header>
                    <slot></slot>
                </sui-modal-description>
            </sui-modal-content>
        </sui-modal>
  </div>
</template>

<script>

    import FormButton from '../form-button/FormButton'

    export default {
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
                this.open = true;
            }
        }
    }

</script>

<style>

    .modal {
        margin-top: 100px !important;
        margin-bottom: 100px !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        height: 80%;
    }

    .content {
        height: 100%
    }

</style>