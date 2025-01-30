import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');








//  Расширение js в js файлах (data.js) указывать не обязательно
//  Первый вариант импорта
//import dataNew, {message} from "./constants";
//import {messageNew} from "./constants";
//  Второй вариант импорта с default экспортом
//  import dataNew from "./constants"
//import messageInput from "./utils"

//alert(message);
//  alert(data.message);
//alert(messageNew);

//alert(dataNew.message);

//alert(messageInput)

