<template>
    <button class="ui button" :class="classButton" type="button">{{ title }}</button>
</template>

<script>

    export default {
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
            classButton() {
                return this.type == 'pesquisar' ? 'secondary' : '';
            }
        }
    }

</script>

<style>

    button {
        float: left;
        margin: 10px 10px 10px;
    }

</style>