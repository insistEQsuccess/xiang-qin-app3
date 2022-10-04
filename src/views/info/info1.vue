<template>
  <div class="info1-box">
    <div class="info-item">
      <div class="item-l">头像</div>
      <div class="item-r">
        <input type="file" class="file-input" @change="onFileInputChange1" accept="png,jpg,jpeg" :multiple="false">
        <img :src="ruleForm.icon" alt="">
        <svg t="1664288770307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="200" height="200"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2535" fill="#8a8a8a"></path></svg>
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">昵称</div>
      <div class="item-r">
        <input type="text" class="normal-input" v-model="ruleForm.nickName" placeholder="请填写您的昵称">
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">您的自身条件</div>
      <div class="item-r" @click="goInfo2">
        <div class="r-txt">去完善</div>
        <svg t="1664288770307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="200" height="200"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2535" fill="#8a8a8a"></path></svg>
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">您的求偶需求</div>
      <div class="item-r" @click="goInfo3">
        <div class="r-txt">去完善</div>
        <svg t="1664288770307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="200" height="200"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2535" fill="#8a8a8a"></path></svg>
      </div>
    </div>
    <!-- <div class="info-item">
      <div class="item-l">公开联系方式</div>
      <div class="item-r">
        <div class="public-box">
          <label><input type="radio" name="isPublic" :value="1" v-model="formData.isPublic" @change="onPublicChange"/>是</label>
          <label><input type="radio" name="isPublic" :value="0" v-model="formData.isPublic" @change="onPublicChange"/>否</label>
        </div>
      </div>
    </div> -->
    <div class="info-item">
      <div class="item-h">
        <div class="h-txt">附1-3张生活照（选填）</div>
        <div class="img-wraper">
          <div class="img1-box" v-for="(it, index) in imgList" :key="index">
            <svg @click="onDelLifeImg(index)" class="close-icon" t="1664850810146" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2539" width="200" height="200"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-572.330667L300.629333 240.213333a42.538667 42.538667 0 0 0-60.16 0.213334 42.410667 42.410667 0 0 0-0.213333 60.16L451.669333 512 240.213333 723.370667a42.538667 42.538667 0 0 0 0.213334 60.16 42.410667 42.410667 0 0 0 60.16 0.213333L512 572.330667l211.370667 211.413333a42.538667 42.538667 0 0 0 60.16-0.213333 42.410667 42.410667 0 0 0 0.213333-60.16L572.330667 512l211.413333-211.370667a42.538667 42.538667 0 0 0-0.213333-60.16 42.410667 42.410667 0 0 0-60.16-0.213333L512 451.669333z" fill="#3D3D3D" p-id="2540"></path></svg>
            <img :src="it" alt="">
          </div>
          <div class="img1-box" v-show="imgList.length < 3">
            <input type="file" class="file-input" @change="onFileInputChange2" accept="png,jpg,jpeg" :multiple="false">
            <svg class="add-icon" t="1664461634454" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2127" width="200" height="200"><path d="M877.4 528.2H148.7c-10.5 0-19.1-8.6-19.1-19.1s8.6-19.1 19.1-19.1h728.7c10.5 0 19.1 8.6 19.1 19.1s-8.5 19.1-19.1 19.1z" fill="#333333" p-id="2128"></path><path d="M513.1 892.5c-10.5 0-19.1-8.6-19.1-19.1V144.7c0-10.5 8.6-19.1 19.1-19.1 10.5 0 19.1 8.6 19.1 19.1v728.7c0 10.6-8.6 19.1-19.1 19.1z" fill="#333333" p-id="2129"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="info-item">
      <div class="item-h">
        <div class="h-txt">补充说明（选填）</div>
        <div class="img-wraper">
          <textarea cols="30" rows="10" class="normal-txt" placeholder="选填，例如您的优势或特殊说明"></textarea>
        </div>
      </div>
    </div>
    <div class="submit-btn" @click="onSbumit">完 成</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Dialog, Toast } from 'vant';
import { uploadImg } from '@/apis/url'
export default defineComponent({
  name: 'Info1',
  setup () {
    interface Dict { [k: string]: any }
    const $router = useRouter()
    const formData = reactive({ isPublic: 0 })
    const imgList = reactive<any[]>([])
    const ruleForm = reactive<Dict>({
      // 注册接口字段和注释
      name: '', //* 名称
      weChatOpenId: '', //* 微信登录id
      qqOpenId: '', //* QQ登录id
      ////登录类型：1-手机一键注册 2-微信注册 3-qq注册 4-手机验证吗注册 5-账号登陆
      type: '', 
      icon: 'https://img1.baidu.com/it/u=867274163,2110018517&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=448', //* 头像
      nickName: '', //* 昵称
      lifePhoto: '', //* 生活照 逗号拼接
      cellPhone: '', //* 手机号
      verifyCode: '', //* 验证码
      persalSign: '', //* 个性签名 暂时无用
      //是否公开联系方式 0否 1是
      publishInfoEnable: 1
    })
    function onPublicChange (e: any) {
      if (e.target.value == 1) {
        Dialog.confirm({
          title: '温馨提示',
          message:
            '您已选择公开联系方式，他人将直接获取您的联系方式，是否确认公开？',
        }).then(() => {
          console.log('on confirm')
        }).catch(() => {
          console.log('on cancel')
          formData.isPublic = 0
        });
      }
    }
    async function onFileInputChange1 (e: TouchEvent) {
      const tar = e.target as any
      const file = tar.files[0]
      console.log(file)
      if (file.size > 5 * 1024 *1024) {
        return Toast('头像大小不能大于5M')
      }
      if (!/\.(png)|(jpg)|(jpeg)$/.test(file.name)) {
        return Toast('请上传【png】【jpg】【jpeg】格式的图片')
      }
      const fd = new FormData()
      fd.append('file', file)
      fd.append('thumb', '1')
      try {
        const ret = await uploadImg(fd)
        if (ret.code === 100000) {
          ruleForm.icon = ret.data.iconUrl
          tar.value = null
        } else {
          tar.value = null
        }
      } catch (err) {
        tar.value = null
      }
    }
    async function onFileInputChange2 (e: TouchEvent) {
      const tar = e.target as any
      const file = tar.files[0]
      if (file.size > 5 * 1024 *1024) {
        return Toast('头像大小不能大于5M')
      }
      if (!/\.(png)|(jpg)|(jpeg)$/.test(file.name)) {
        return Toast('请上传【png】【jpg】【jpeg】格式的图片')
      }
      const fd = new FormData()
      fd.append('file', file)
      fd.append('thumb', '1')
      try {
        const ret = await uploadImg(fd)
        if (ret.code === 100000) {
          imgList.push(ret.data.iconUrl)
          setLifePic()
          tar.value = null
        } else {
          tar.value = null
        }
      } catch (err) {
        tar.value = null
      }
    }
    function onDelLifeImg (index: number) {
      imgList.splice(index, 1)
      setLifePic()
    }
    function setLifePic () {
      ruleForm.lifePhoto = imgList.join(',')
    }
    function goInfo2 () {
      $router.push('/info2')
    }
    function goInfo3 () {
      $router.push('/info3')
    }
    return {
      onFileInputChange1,
      onFileInputChange2,
      onDelLifeImg,
      ruleForm,
      formData,
      imgList,
      goInfo2,
      goInfo3,
      onPublicChange
    }
  }
})
</script>
<style lang="scss">
.file-input{
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  opacity: 0;
}
.info1-box{
  .info-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    padding: 5px 10px;
    margin-top: 15px;
    box-sizing: border-box;
    font-size: 18px;
    background-color: #fff;
    .item-r{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        height: 50px;
        width: 50px;
        margin-right: 5px;
        border-radius: 50%;
      }
      svg{
        width: 15px;
        height: 15px;
      }
      .normal-input{
        height: 30px;
        width: 180px;
        padding: 0 10px;
        font-size: 14px;
        outline: none;
        border: 1px solid #e8e8e8;
        border-radius: 3px;
      }
      .r-txt{
        font-size: 16px;
        color: #ccc;
      }
      .public-box{
        display: flex;
        justify-content: space-between;
        width: 200px;
        padding-right: 20px;
        box-sizing: border-box;
      }
    }
    .item-h{
      width: 100%;
      .img-wraper{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .img1-box{
          position: relative;
          flex-shrink: 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 140px;
          height: 140px;
          margin-top: 10px;
          margin-right: 10px;
          background-color: #e8e8e8;
          overflow: hidden;
          .add-icon{
            width: 50px;
            height: 50px;
          }
          .close-icon{
            position: absolute;
            top: 0; left: 0;
            z-index: 9;
            width: 20px;
            height: 20px;
          }
          img{
            width: 140px;
            height: 140px;
          }
        }
        .normal-txt{
          height: 80px;
          width: 100%;
          margin-top: 10px;
          padding: 10px;
          resize: both;
          outline: none;
          border: 1px solid #e8e8e8;
        }
      }
    }
  }
  .submit-btn{
    height: 40px;
    width: 200px;
    margin: 40px auto 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background-color: #1989fa;
  }
}
</style>