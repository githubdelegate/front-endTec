import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import '../src/css/app.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
