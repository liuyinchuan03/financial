<template>
    <div>
         <div class="centre">
             <router-link class="insure" tag="div" to="/apply">
             <a href="javascript:;">立即投保</a></router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.centre {
    position: absolute;
    width: 7.5rem;
    height: 11.8rem;
  background: url(../../assets/images/（P023）保险详情_02.png) no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  margin-bottom: 0.5rem;
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
