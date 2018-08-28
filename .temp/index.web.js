import Vue from 'vue'
import weex from 'weex-vue-render'

weex.init(Vue)
// 全局注册 sidebar 组件
// weex.registerComponent('sidebar', Sidebar)
// 或者使用 Vue.component
// Vue.component('sidebar', Sidebar)

const App = require('..\\src\\index.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
