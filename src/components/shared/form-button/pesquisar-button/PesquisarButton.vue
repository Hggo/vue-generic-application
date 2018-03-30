<template>
    <form-button type="pesquisar" title="Pesquisar"/>
</template>

<script lang="ts">

    import Vue from 'vue';
    import FormButton from '../../form-button/FormButton.vue'
   
    export default Vue.extend({
        components: {
            'form-button' : FormButton,
        },
        props: [ 'classe' ],
        computed: {
           
        }
    });

</script>

<style>



</style>