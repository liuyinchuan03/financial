<template>
    <div>
        <div class="centre">
        <div class="content">
            <div class="title">{{helpArr.description}}</div>
            <div class="con" v-html="helpArr.value">{{helpArr.value}}</div>
            <!-- <div class="card"><img src="imgUrl()+helpArr." alt=""></div> -->
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                helpArr:[]
            }
        },
        mounted(){
            this.general()
        },
        methods:{
            general(){
                let obj={id:this.$route.query.id}
                this.$http.post('/common/helpsDetail',obj)
                .then((res)=>{
                    this.helpArr=res.data.data;
                    // console.log(this.helpArr);
                    
                })
            }
        }
}
</script>
<style scoped>
.centre {
  width: 7.5rem;
  height: 100%;
}
.centre .content {
  width: 6.9rem;
  margin: 0.2rem auto;
}
.centre .content .title {
  font-size: 0.28rem;
  margin-bottom: 0.3rem;
}
.centre .content .con {
  height: 2.5rem;
  font-size: 0.26rem;
  color: #626262;
}
.centre .content .card {
  width: 6.3rem;
  margin: 0 auto;
}
.centre .content .card img {
  width: 6.3rem;
}

</style>