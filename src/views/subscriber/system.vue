<template>
    <div>
         <div class="centre">
        <div class="content">
            <ul>
                <li>
                    <div class="time">2018-10-16 11:40</div>
                    <div class="news">
                        <div class="news-h">消息标题</div>
                        <div class="news-con">消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容</div>
                    </div>
                </li>
                <li>
                    <div class="time">2018-10-16 11:40</div>
                    <div class="news">
                        <div class="news-h">消息标题</div>
                        <div class="news-con">消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .centre {
  width: 7.5rem;
  height: 100%;
  margin-bottom: 1rem;
}
.centre .content {
  width: 7rem;
  margin: 0 auto;
}
.centre .content li .time {
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.26rem;
  color: #999;
}
.centre .content li .news {
  padding: 0.3rem;
  height: 2.05rem;
  background-color: #fff;
  border-radius: 0.2rem;
}
.centre .content li .news .news-h {
  font-size: 0.3rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.01rem solid #f2f2f2;
}
.centre .content li .news .news-con {
  margin: 0.27rem 0;
  font-size: 0.26rem;
  color: #666666;
}

</style>
