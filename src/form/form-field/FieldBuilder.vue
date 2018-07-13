<template>
    <div class="fields">
        <div class="form" v-for="(field, index) in classe.fields" v-bind:key="index">
            <form-field :value="field"  v-if="(field.type == 'text' || field.type == 'number') && field.filter == true"></form-field>
            <form-field-select :value="field" v-if="(field.type == 'select') && field.filter == true"  v-bind:data="field"></form-field-select>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import FormField from './FormField.vue';
    import FormFieldSelect from './form-field-select/FormFieldSelect.vue';

    export default Vue.extend({
        components: {
            'form-field' : FormField,
            'form-field-select' : FormFieldSelect
        },
        props: {
            classe: {
                required: true
            }
        }
    });

</script>

<style scoped>

    form .form{
        margin: 10px;
    }

</style>

