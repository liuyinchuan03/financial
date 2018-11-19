<template>
    <div>
         <div class="centre">
           <img :src="imgUrl()+safeArr.cover" alt="">
             <router-link class="insure" tag="div" to="/apply">
             <a href="javascript:;">立即投保</a></router-link>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      safeArr:[]
    }
  },
  mounted(){
    this.receive()
  },
  methods:{
    receive(){
      let id={productId:this.$route.query.id}
      this.$http.post('/insurance/insuranceDetail',id)
      .then((res=>{
        console.log(res.data.data);
        this.safeArr=res.data.data
      }))
      
    }
  }
}
</script>
<style scoped>
.centre {
    box-sizing: border-box;
    position: absolute;
    width: 7.5rem;
    height: 11.8rem;
  /* background: url(../../assets/images/（P023）保险详情_02.png) no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%; */
  margin-bottom: 0.5rem;
}
img{
  width: 7.5rem;
  height: 100%;
}
.centre .insure {
  position: fixed;
  bottom: 0.7rem;
  left: 1.3rem;
  width: 4.9rem;
  height: 0.84rem;
  line-height: 0.84rem;
  text-align: center;
  background-color: #f4a12b;
  border-radius: 0.2rem;
}
.centre .insure a {
  font-size: 0.3rem;
  color: #fff;
}

</style>
