import Vue from 'vue';
import App from './App.vue';
import Home from './components/home/Home.vue';
import Rotas from './router/Rotas';
import 'semantic-ui-css/semantic.min.css';

import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Rotas,
  components: { App },
  template: '<App/>'
});
