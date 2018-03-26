<template>
    <button class="ui button" :class="classButton" type="button">{{ title }}</button>
</template>

<script lang="ts">

    import Vue from 'vue';
   
    export default Vue.extend({
        props: {
            type: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            }
        },
        computed: {
            classButton() : String {
                return this.type == 'pesquisar' ? 'secondary' : ( this.type == 'adicionar' ? 'primary' : '' );
            }
        }
    });

</script>

<style>

    button {
        float: left;
        margin: 10px 10px 10px;
    }

</style>