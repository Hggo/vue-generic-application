<template>
    <div class="field">
        <label class="ui left">{{ buffer.title }}</label>
        <div class="ui input focus">
            <input :type="buffer.type" :placeholder="buffer.title" v-model="buffer.field" @input="$emit('input', buffer.field)">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                buffer: this.value
            }
        },
        props: {
            value: {
                required: true
            }
        },
    }
</script>

<style scoped>
    label {
        float: left;
        margin: 0 5px 0;
    }
</style>