import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mintUI from 'mint-ui'
// 公共样式css
import '@/assets/css/commonality.css'
// mintUI的css样式
import 'mint-ui/lib/style.css'
// 解click300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
    // title标题
import VueWechatTitle from 'vue-wechat-title'
// 全局配置axios
Vue.use(VueWechatTitle)

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function(data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]


//然后再修改原型链
Vue.prototype.$http = axios



axios.defaults.baseURL = 'http://8083.apptiming.com'
    // 图片路径
Vue.prototype.imgUrl = function() {
    return 'http://8787.apptiming.com';
};

Vue.config.productionTip = false
Vue.use(mintUI)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})