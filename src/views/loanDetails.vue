<template>
    <div>
            <div class="content">
                <router-link class="apply" tag="div" to="/apply"><a>一键申请</a></router-link>
            </div>

         <!-- 底部 -->
        <div class="credFoot">
            <router-link class="credFoot-l fl" tag="div" to="/loan">
                <span> &lt; </span>
            </router-link>
            <div class="credFoot-r fr">
                <span> &gt; </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
    background-color: #fff;
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
.centre {
    position: absolute;
    width: 7.5rem;
    height: 11.8rem;
    background: url(../assets/images/（P020）贷款详情_02.png) no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    margin-bottom: 1.5rem;
}

.centre .apply {
    position: absolute;
    left: 1.3rem;
    bottom: 0.2rem;
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
</style>
