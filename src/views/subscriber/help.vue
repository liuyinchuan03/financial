<template>
    <div>
        <div class="centre">
        <a href="./详情.html">
            <div class="content">
                <div class="flow">
                    <ul>
                        <li>1、申请信用卡流程</li>
                        <li>2、申请货款流程</li>
                        <li>3、投保流程</li>
                    </ul>
                </div>
            </div>
        </a>
        <div class="exercise">
            联系我们：<i>400000000</i>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.help()
    },
    methods:{
        help(){
            this.$http.post('/common/queryHelpsList')
            .then((res)=>{
                console.log(res);
            })
        }
    }
}
</script>
<style scoped>
.centre {
    width: 7.5rem;
    margin-bottom: 1rem;
}

.content {
    width: 7.1rem;
    height: 2.66rem;
    background-color: #fff;
    margin: 0.4rem auto;
}

.flow li {
    height: 0.8rem;
    border-bottom: 1px solid #f2f2f2;
    line-height: 0.8rem;
    margin: 0 0.2rem;
    font-size: 0.3rem;
}

.flow li:nth-child(3) {
    border: none;
}

.exercise {
    width: 7.1rem;
    height: 0.74rem;
    margin: 0 auto;
    line-height: 0.74rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.3rem;
}

.exercise i {
    color: #5e97ec;
}
</style>
