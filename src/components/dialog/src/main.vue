<template>
  <div class="dialog-mask" v-if="showDialog" @click.self="cancelClick">
    <div class="dialog-box">
      <header class="header" v-html="title" v-if="title">
      </header>
      <article class="body tc" v-html="text" v-if="text">
      </article>
      <article class="edit-block" v-if="type === 'input'" :class="text ? '' : 'pt-15'">
        <textarea class="edit-el" rows="3" :placeholder="placeholder" v-model.trim="content" :maxlength="maxLength"></textarea>
      </article>
      <footer class="footer tc">
        <div class="my-cancel-btn dib" v-show="showCancelBtn" v-text="cancelText" @click="cancelClick">
        </div>
        <div class="confirm-btn" :style="{width: showCancelBtn ? '50%' : '100%'}" v-text="confirmText" @click="confirmClick" :class="showCancelBtn ? 'dib' : ''">
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dialog-box',
  data () {
    return {
      showDialog: true,
      type: '',
      title: '',
      /* 文本 */
      text: '',
      /* 输入内容 */
      content: '',
      /* 默认输入最长20个字 */
      maxLength: 20,
      showCancelBtn: true,
      confirmText: '确定',
      cancelText: '取消',
      placeholder: '请输入...（最多20个字）',
      confirm: null
    }
  },
  methods: {
    cancelClick () {
      this.showDialog = false
    },
    confirmClick () {
      this.confirm(this.content)
      this.showDialog = false
    }
  },
  mounted () {
    this.maxLength = this.length ? this.length : 20
  }
}
/*  使用例子 只有type = input 时是有输入框的
  this.$dialog({
        title: '流程结束',
        text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
        // type: 'input',
        // placeholder: '请输入内容文本...',
        // length: 10,
        showCancelBtn: false,
        confirmText: '确认',
        confirm () {
        }
      })
  */
</script>

<style lang="less" scoped>
.dialog-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-box {
  position: fixed;
  background-color: #ffffff;
  width: 270px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 16px;
  border-radius: 4px;
  .header {
    color: #000000;
    padding: 15px 15px 0;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }
  .body {
    padding: 0 15px 15px;
    color: #555555;
    font-size: 16px;
    line-height: 26px;
  }
  .pt-15 {
    padding-top: 15px !important;
  }
  .edit-block {
    padding: 0 15px 15px;
    .edit-el {
      border-radius: 0.1rem;
      padding: 8px 10px;
      width: 100%;
      color: #555555;
      font-size: 16px;
    }
    .edit-el::placeholder {
      color: #888888;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .footer {
    border-top: 0.01rem solid #eeeeee;
    white-space: nowrap;
    font-size: 0;
    .my-cancel-btn {
      padding: 11px 0;
      font-size: 18px;
      line-height: 28px;
      width: 50%;
      color: #222222;
      border-radius: 0 0 0 4px;
      border-right: 0.01rem solid #eeeeee;
      background-color: white;
    }
    .confirm-btn {
      padding: 11px 0;
      font-size: 18px;
      line-height: 28px;
      width: 50%;
      color: #222222;
      border-radius: 0 0 0 4px;
      background-color: white;
      color: #597ef7;
    }
  }
}
textarea {
  background-color: #f5f5f5;
}
</style>
