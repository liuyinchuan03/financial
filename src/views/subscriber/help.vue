<template>
    <div>
        <div class="centre">
            <div class="content">
                <div class="flow">
                    <ul>
                        <li @click="general(val.id)" v-for="(val,index) in helpArr" :key="index">{{index+' 丶 '+val.description}}</li>
                    </ul>
                </div>
            </div>
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
            // 帮助流程
            helpArr:[],
        }
    },
    mounted(){
        this.help()
    },
    methods:{
        help(){
            this.$http.post('/common/queryHelpsList')
            .then((res)=>{
                this.helpArr=res.data.data
            })
        },
        general(id){
             this.$router.push({ 
                path: '/general',
                 query:{id: id }
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
    /* height: 2.66rem; */
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
