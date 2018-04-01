<template>
    <table class="ui very compact sortable table" id="tabela">
        <thead>
            <tr>
                <th v-for="(field, index) in classe.getFields()" v-bind:key="index" :class="getSorting(field)" v-on:click="sort(field)">{{ field.title }}</th>
                <th class="table-button"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(linha, i) in tableData" v-bind:key="i">
                <td v-for="(field, index) in linha.getFields()" v-bind:key="index">{{ linha[field.field] }}</td>
                <td>
                <modal-button :classe="getLinha(i)" :titulo="classe.getClassTitle()" icon="edit">
                    <add-builder :classe="getLinha(i)" :ind="i"></add-builder>
                </modal-button>
                </td>
            </tr>
        </tbody>
        <!--<tfoot>
            <tr><th :colspan="classe.getFields().length">
            <div class="ui right floated pagination menu">
                <a class="icon item">
                <i class="left chevron icon"></i>
                </a>
                <a class="item">1</a>
                <a class="item">2</a>
                <a class="item">3</a>
                <a class="item">4</a>
                <a class="icon item">
                    <i class="right chevron icon"></i>
                </a>
            </div>
            </th>
        </tr></tfoot>-->
        </table>

</template>

<script lang="ts">

    import Vue from 'vue';
    import IconButton from '../form-button/IconButton.vue';
    import AddBuilder from '../form/add-builder/AddBuilder.vue';
    import ModalButton from '../modal-button/ModalButton';

    export default Vue.extend({

        components: {
            'icon-button': IconButton,
            'add-builder': AddBuilder,
            'modal-button': ModalButton
        },
        props: ['data', 'classe'],
        data(){
            return {
                tableData: this.data,
                order: '',
                inverse: false
            };
        },
        watch: {
            data : function(){
                this.tableData = this.montaModelos(this.data);
            }
        },
        methods: {
            getLinha(index){
                return this.tableData[index];
            },
            montaModelos(data){
                let lista = [] as any[];
               
                data.forEach(element => {
                    lista.push(new this.classe.constructor(element));
                });
                return lista
            },
            sort(field){
                if(field.field == this.order)
                    this.inverse = !this.inverse;
                
                this.order = field.field;
                
                this.tableData = this.tableData.sort(function(a, b) {
                    let first = a[field.field] != undefined ? a[field.field] : "";
                    let second = b[field.field] != undefined ? b[field.field] : "";

                    return first.localeCompare(second);
                });

                if(this.inverse)
                    this.tableData = this.tableData.reverse();
            }, 
            getSorting(field){
                let css = "";
                
                if(field.field == this.order){
                    css += "sorted";
                    if(this.inverse)
                        css += " descending";
                    else 
                        css += " ascending";
                }
                
                return css;
            }
        }
    });

</script>

<style>

    .table-button{
        width: 5%
    }

</style>