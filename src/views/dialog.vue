<template>
  <div class="mainPage">
    <div class="list">
      <div class="item" @click="comfirm1">一个按钮(不带标题)</div>
      <div class="item" @click="comfirm2">两个按钮(带有标题)</div>
      <div class="item" @click="feedback">填写反馈</div>
      <!-- <div class="item" @click="toSelect">弹窗选择</div> -->
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  // name: 'dialog',
  data () {
    return {
      list: [
        { myId: 1, myName: '选项一' },
        { myId: 2, myName: '选项二' },
        { myId: 3, myName: '选项三' }
      ]
    }
  },
  methods: {
    comfirm1 () {
      this.$dialog({
        title: '删除提示111',
        text: '是否确定删除此标签？',
        showCancelBtn: false,
        confirmText: '我知道了',
        confirm (content) {
          alert('删除成功')
        }
      })
    },
    comfirm2 () {
      this.$dialog({
        title: '删除提示',
        text: '是否确定删除此标签？',
        showCancelBtn: true,
        confirmText: '确认',
        confirm (content) {
          alert('删除成功')
        }
      })
    },
    feedback () {
      this.$dialog({
        title: '请填写反馈',
        text: '辅助文本',
        type: 'input',
        placeholder: '请输入反馈内容...',
        length: 10,
        showCancelBtn: true,
        confirmText: '确认',
        confirm (content) {
          alert(content)
        }
      })
    },
    toSelect () {
      this.$selectDialog.show({
        title: '流程结束',
        text: '请选择其中一项进行处理',
        showCancelBtn: true,
        confirmText: '确认',
        defaultProps: {
          name: 'myName',
          code: 'myId'
        },
        list: this.list,
        selectItem: {
          myId: 2, myName: '选项二'
        },
        confirm (content) {
          alert(content[this.defaultProps.name])
        }
      })
    }
  }
  // destroyed () {
  //   this.$dialog.hide()
  //   this.$selectDialog.hide()
  // }
}
</script>

<style scoped lang="less">
.mainPage {
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
