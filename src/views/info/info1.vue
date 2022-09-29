<template>
  <div class="info1-box">
    <div class="info-item">
      <div class="item-l">头像</div>
      <div class="item-r">
        <img src="https://img1.baidu.com/it/u=867274163,2110018517&fm=253&fmt=auto&app=138&f=JPEG?w=329&h=448" alt="">
        <svg t="1664288770307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="200" height="200"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2535" fill="#8a8a8a"></path></svg>
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">昵称</div>
      <div class="item-r">
        <input type="text" class="normal-input" placeholder="请填写您的昵称">
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">您的自身条件</div>
      <div class="item-r">
        <div class="r-txt">去完善</div>
        <svg t="1664288770307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="200" height="200"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2535" fill="#8a8a8a"></path></svg>
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">您的求偶需求</div>
      <div class="item-r">
        <div class="r-txt">去完善</div>
        <svg t="1664288770307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="200" height="200"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="2535" fill="#8a8a8a"></path></svg>
      </div>
    </div>
    <div class="info-item">
      <div class="item-l">公开联系方式</div>
      <div class="item-r">
        <div class="public-box">
          <label><input type="radio" name="isPublic" :value="1" v-model="formData.isPublic" @change="onPublicChange"/>是</label>
          <label><input type="radio" name="isPublic" :value="0" v-model="formData.isPublic" @change="onPublicChange"/>否</label>
        </div>
      </div>
    </div>
    <div class="info-item">
      <div class="item-h">
        <div class="h-txt">附1-3张生活照（选填）</div>
        <div class="img-wraper">
          <div v-show="imgList.length">
            <div class="img1-box" v-for="(it, index) in imgList" :key="index">
              <img :src="it" alt="">
            </div>
          </div>
          <div class="img1-box" v-show="!imgList.length">
            <svg t="1664461634454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2127" width="200" height="200"><path d="M877.4 528.2H148.7c-10.5 0-19.1-8.6-19.1-19.1s8.6-19.1 19.1-19.1h728.7c10.5 0 19.1 8.6 19.1 19.1s-8.5 19.1-19.1 19.1z" fill="#333333" p-id="2128"></path><path d="M513.1 892.5c-10.5 0-19.1-8.6-19.1-19.1V144.7c0-10.5 8.6-19.1 19.1-19.1 10.5 0 19.1 8.6 19.1 19.1v728.7c0 10.6-8.6 19.1-19.1 19.1z" fill="#333333" p-id="2129"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="info-item">
      <div class="item-h">
        <div class="h-txt">附1-3张生活照（选填）</div>
        <div class="img-wraper">
          <textarea cols="30" rows="10" class="normal-txt" placeholder="选填，例如您的优势或特殊说明"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Dialog } from 'vant';
export default defineComponent({
  name: 'Info1',
  setup () {
    const formData = reactive({ isPublic: 0 })
    const imgList = reactive([])
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
    return {
      formData,
      imgList,
      onPublicChange
    }
  }
})
</script>
<style lang="scss">
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
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          margin-top: 10px;
          background-color: #e8e8e8;
          svg{
            width: 50px;
            height: 50px;
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
}
</style>