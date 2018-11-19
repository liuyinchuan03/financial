<template>
    <div>
            <div class="content">
                <img :src="imgUrl()+loanArr.cover" alt="">
                <router-link class="apply" tag="div" to="/apply"><a>一键申请</a></router-link>
            </div>

         <!-- 底部 -->
        <div class="credFoot">
             <div class="credFoot-l fl" >
                <span @click="retun"> <img src="../assets/images/left.png" alt=""> </span>
            </div>
            <div class="credFoot-r fr">
                <span> <img src="../assets/images/right.png" alt=""> </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loanArr:[]
        }
    },
    mounted(){
        this.loanDetails();
    },
    methods:{
        loanDetails(){
            let obj={
                productId:this.$route.query.id
            }
            this.$http.post('/loan/loanDetail',obj)
            .then((res)=>{
                this.loanArr=res.data.data
            })
        },
        retun: function () {
      this.$router.go(-1)
    }
    }
}
</script>
<style scoped>
/* 底 */
.credFoot{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background-color: #e6e9f0;
}

.credFoot-l{
    width: 40%;
    height: 0.5rem;
    text-align: right;
}
.credFoot-r{
    width: 40%;
    height: 0.5rem;
}
.credFoot-l span{
    font-size: 0.2rem;
    color: #101010;
    display:block;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: right;
}
.credFoot-r span{
    font-size: 0.2rem;
    display:block;
    color: #999999 ;
    height: 0.5rem;
    line-height: 0.5rem;
}
.content{
        width: 100%;
    height: 100%;
}
.centre {
    position: absolute;
    width: 7.5rem;
    height: 11.8rem;
    margin-bottom: 1.5rem;
}
.centre img{
 width: 7.5rem;
    height: 11.8rem;
}
.centre .apply {
    position: fixed;
    left: 1.3rem;
    bottom: 1rem;
    width: 4.9rem;
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: #f4a12b;
    text-align: center;
    border-radius: 0.2rem;
}

.centre .apply a {
    font-size: 0.3rem;
    color: #fff;
}
.credFoot img{
    width: 0.14rem;
    height: 0.27rem;
}
</style>
