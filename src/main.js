import Vue from 'vue'
import App from './App'
// import router from './router'
import  Vuex  from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/css/common.css';
import  mock  from './mock/mock.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.config.productionTip = false;
var vm=new Vue({
  el: '#app',
    store,
  components: {App},
  template: '<App/>'
});
