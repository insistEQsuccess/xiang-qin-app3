<template>
  <div>
    <div class="login-bg-box"></div>
    <div class="login-wraper">
      <div class="login-box">
        <div class="logo-box"><img src="../../assets/img/logo.jpg" alt=""></div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <svg t="1664863815132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5950" width="200" height="200"><path d="M512.641575 897.959719m-41.95899 0a41.95899 41.95899 0 1 0 83.91798 0 41.95899 41.95899 0 1 0-83.91798 0Z" p-id="5951" fill="#8a8a8a"></path><path d="M762.004192 1024H261.960813a109.744281 109.744281 0 0 1-109.650962-109.650961V109.650961A109.744281 109.744281 0 0 1 261.960813 0h500.078374a109.744281 109.744281 0 0 1 109.650962 109.650961v804.721408a109.744281 109.744281 0 0 1-109.685957 109.627631zM261.960813 40.827486a68.823476 68.823476 0 0 0-68.823476 68.823475v804.721408a68.823476 68.823476 0 0 0 68.823476 68.823475h500.078374a68.823476 68.823476 0 0 0 68.823476-68.823475V109.650961a68.823476 68.823476 0 0 0-68.823476-68.823475z" p-id="5952" fill="#8a8a8a"></path><path d="M171.40545 767.171785h682.47225v40.827486H171.40545z" p-id="5953" fill="#8a8a8a"></path></svg>
        </div>
        <div class="form-content">
          <input type="text" class="normal-input" placeholder="请填写手机号" v-model.trim="ruleForm.cellPhone">
        </div>
      </div>
      <div class="form-item">
        <div class="form-label">
          <svg t="1664864127948" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7717" width="200" height="200"><path d="M980.3 730.3c0 63.6-70.1 115.3-156.3 115.3H198.8c-86.2 0-156.3-51.7-156.3-115.3V615H7.8v115.3c0 77.7 85.7 141 191 141H824c105.3 0 191-63.2 191-141V615h-34.7v115.3zM824 128H198.8c-105.3 0-191 63.2-191 141v123.9h34.7V269c0-63.6 70.1-115.3 156.3-115.3H824c86.2 0 156.3 51.7 156.3 115.3v123.9h34.7V269c0-77.8-85.7-141-191-141z" fill="#8a8a8a" p-id="7718"></path><path d="M145.8 277.5h365.6v27.6H145.8zM614.9 291.3h50.6v13.8h-50.6zM138.4 443l58.3-14.5V594h-56.8v23.8h145.4V594h-56.6V395.2l-90.3 22.5zM418.7 544.2c23.6-20.1 39.6-36.6 48-49.6 8.5-13 12.7-26.2 12.7-39.8 0-17.9-6.6-32.2-19.8-42.8-13.2-10.6-31.2-15.9-54-15.9-26.5 0-49.8 6.6-69.7 19.8v28c20.5-16.5 42.1-24.8 64.6-24.8 15.3 0 27 3.3 35 9.9 8.1 6.6 12.1 16.1 12.1 28.5 0 10.9-3.4 21.4-10.3 31.6-6.9 10.2-20.5 24-40.7 41.4l-73.7 63.2v23.9h154.2v-24.5H360.9v-0.6l57.8-48.3zM625.9 587.6c-10.2 7.4-24 11-41.5 11-21.8 0-41.4-5.8-58.8-17.3v28.6c14.7 7.7 34.1 11.5 58.1 11.5 27.3 0 49.2-6 65.6-18 16.4-12 24.7-27.8 24.7-47.4 0-14.1-5.3-25.8-16-35.2-10.6-9.4-25.1-15-43.5-16.7v-0.6c33.8-8.2 50.8-26.5 50.8-55 0-15.5-6.5-28.1-19.6-37.8-13.1-9.7-30.5-14.6-52.1-14.6-22.2 0-41.5 4.1-58.1 12.4v26c15.7-10.3 32.5-15.5 50.3-15.5 31.1 0 46.7 12 46.7 35.9 0 25.9-20.4 38.8-61.1 38.8h-20.2v22.8h21.1c45.9 0 68.9 13.8 68.9 41.4 0 12.5-5.1 22.4-15.3 29.7zM813.9 399.8L701.7 543.4v17.9h118.2v56.6H851v-56.6h32.4v-21.8H851V399.8h-37.1z m6 48.3v91.3h-85.1l75.5-97c4.9-7.6 8.1-13.2 9.6-16.7h0.7c-0.5 8.5-0.7 15.9-0.7 22.4z" fill="#8a8a8a" p-id="7719"></path></svg>
        </div>
        <div class="form-content">
          <input type="text" class="normal-input" placeholder="请填写验证码" v-model.trim="ruleForm.verifyCode">
          <div class="code-box" @click="onGetCode">{{codeMsg}}</div>
        </div>
      </div>
      <div class="login-btn" @click="onLogin">登 录</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginFun, getCodeFun } from '@/apis/url'
import { Toast } from 'vant'

export default defineComponent({
  setup() {
    const $router = useRouter();
    const ruleForm = reactive({
      cellPhone: '', 
      type: 4,
      verifyCode: '' 
    })
    const codeMsg = ref('获取验证码')
    let number = 60
    let timer: any = null
    async function onGetCode () {
      if (number < 60) {
        return Toast(`请${number}秒后重试`)
      }
      const ret = await getCodeFun({ cellPhone: ruleForm.cellPhone, type: 2 })
      if (ret.code === 100000) {
        Toast('验证码发送成功')
      } else {
        Toast(ret.message)
      }
      timer = setInterval(() => {
        if (number < 0) {
          number = 60
          codeMsg.value = '获取验证码'
          clearInterval(timer)
          return;
        }
        codeMsg.value = number + '秒'
        number--
      }, 1000)
    }
    async function onLogin () {
      const phoneReg = /^1\d{10}$/
      const codeReg = /^\d{4}$/
      if (!phoneReg.test(ruleForm.cellPhone)) {
        return Toast('请填写正确的手机号')
      }
      if (!codeReg.test(ruleForm.verifyCode)) {
        return Toast('请填写正确的验证码')
      }
      const ret = await loginFun(ruleForm)
      if (ret.code === 100000) {
        if (!ret.data.perfect) {
          Toast('未查询到用户信息，请您注册')
          const sendData = JSON.parse(JSON.stringify(ruleForm))
          delete sendData.type
          sessionStorage.setItem('login_param', JSON.stringify(sendData))
          setTimeout(() => {
            $router.push('/info1')
          }, 1000);
        } else {
          localStorage.setItem('token', ret.data.token)
          Toast(ret.message)
        }
      } else {
        Toast(ret.message)
      }
    }
    return {
      onGetCode,
      onLogin,
      ruleForm,
      codeMsg
    }
  },
})
</script>

<style lang="scss" scoped>
.login-bg-box{
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../../assets/img/login-bg.jpg) no-repeat center bottom / 100% auto;
  opacity: 0.2;
}
.login-wraper{
  position: relative;
  height: 100%;
  overflow: auto;
  z-index: 2;
}
.login-box{
  width: 200px;
  height: 200px;
  margin: 50px auto 50px;
  border-radius: 5px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
  }
}
.form-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  margin: 0 10px 20px;
  border-bottom: 1px solid #e8e8e8;
  .form-label{
    margin-right: 15px;
  }
  .form-content{
    position: relative;
    flex: 1;
    .code-box{
      display: flex;
      align-items: center;
      position: absolute;
      right: 0; top: -5px;
      height: 25px;
      padding: 5px 10px;
      text-align: center;
      font-size: 16px;
      border: 1px solid #333;
      border-radius: 10px;
    }
    .normal-input{
      width: 100%;
      height: 30px;
      font-size: 20px;
      outline: none;
      border: 0;
      background: transparent;
    }
  }
  .icon{
    width: 30px;
    height: 30px;
  }
}
.login-btn{
  width: 200px;
  height: 40px;
  margin: 50px auto 0;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  background: #1989fa;
}
</style>
