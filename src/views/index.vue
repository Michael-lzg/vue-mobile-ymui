<template>
  <div class="mainPage">
    <div class="list">
      <div class="list">
        <div class="item" @click="successTip">成功提示</div>
        <div class="item" @click="failTip">失败提示</div>
        <div class="item" @click="warningTip">警示提示</div>
        <div class="item" @click="loadingTip">加载提示</div>
        <div class="item" @click="oneTip">字数少</div>
        <div class="item" @click="multiTip">字数多</div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  name: 'toast',
  components: { footerBar },
  data () {
    return {

    }
  },
  methods: {
    successTip () {
      this.$toast({
        msg: '成功提示',
        type: 'success'
      })
    },
    failTip () {
      this.$toast({
        msg: '失败提示',
        type: 'fail'
      })
    },
    warningTip () {
      this.$toast({
        msg: '警示提示',
        type: 'warning'
      })
    },
    loadingTip () {
      this.$toast({
        msg: '正在加载',
        type: 'loading'
      })
    },
    oneTip () {
      this.$toast({
        msg: '手机号码不能为空'
      })
    },
    multiTip () {
      this.$toast({
        msg: '字数多怎么办字数多怎么办哈哈哈'
      })
    }
  }
}
</script>
<style scoped lang="less">
.mainPage{
  height: 100%;
  background-color: #fff;
  padding-top: 10px;
}
.list {
  padding: 0 15px;
}
.item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #597ef7;
  margin-bottom: 10px;
  border: 0.01rem solid #597ef7;
  border-radius: 4px;
  font-size: 16px;
}
</style>
