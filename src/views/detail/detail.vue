<template>
  <div className='detail-box'>
    <div class="detail-box1">
      <div class="detail-success">
        <div class="phone-number"><span>TA的联系方式：</span><span>18515871492</span></div>
        <img src="../../assets/img/copy-btn.png" alt="">
      </div>
      <div class="detail-fail">
        <span>对方拒绝与您交换联系方式，一周内不能重新发起</span>
        <img src="../../assets/img/detail-fail.png" alt="">
      </div>
      <div class="detail-expire">
        <span>您发起的交换联系方式已过期，TA未能及时查看，您可以通过以下方式进行联系： 1.通过发送短信方式提醒TA，短信提醒2元一条； 2.通过官方客服联系TA，平台将收取25元服务费，联系失败将退还您的费用。</span>
        <img src="../../assets/img/detail-expire.png" alt="">
      </div>
    </div>
    <div class="detail-box2">
      <div class="bg-box"></div>
      <div class="user-info">
        <div class="avatar-box">
          <img src="https://t7.baidu.com/it/u=128764686,1887614532&fm=193&f=GIF" alt="">
        </div>
        <div class="info-box">
          <div class="info1-box">
            魏淑芬
            <img src="../../assets/img/female.png" alt=""/>
            <!-- <img src="../../assets/img/male.png" alt=""> -->
          </div>
          <div class="info2-box">女·1988·未婚·天津</div>
        </div>
      </div>
      <div class="img-box">
        <ul>
          <li><img src="https://t7.baidu.com/it/u=2587880631,1511870074&fm=193&f=GIF" alt=""></li>
          <li><img src="https://t7.baidu.com/it/u=2791136945,265310095&fm=193&f=GIF" alt=""></li>
          <li><img src="https://t7.baidu.com/it/u=3964797077,2797302290&fm=193&f=GIF" alt=""></li>
        </ul>
      </div>
      <div class="self-intro-box">
        <div class="intro-title">自我介绍</div>
        <ul class="intro-list">
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>性格</span><span>活泼型-开朗的性格，喜欢玩，很乐观， 话特别多，喜欢新鲜，富有多姿多彩的 创造力</span></li>
        </ul>
      </div>
      <div class="self-intro-box">
        <div class="intro-title">择偶要求</div>
        <ul class="intro-list">
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>私家车</span><span>有车,25w以上</span></li>
          <li class="intro-item"><span>性格性格</span><span>活泼型-开朗的性格，喜欢玩，很乐观， 话特别多，喜欢新鲜，富有多姿多彩的 创造力</span></li>
        </ul>
      </div>
      <div class="self-intro-box">
        <div class="intro-title">补充说明</div>
        <ul class="intro-list">
          <li class="intro-item">活泼型-开朗的性格，喜欢玩，很乐观， 话特别多，喜欢新鲜，富有多姿多彩的 创造力</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getDetails } from '@/apis/url'
import { Toast } from 'vant'

export default defineComponent({
  name: 'Detail',
  setup() {
    interface Dict { [k: string]: any }
    const $route = useRoute();
    const userId = $route.query.userId
    const icon = ref('')
    const lifePhoto = ref('')
    const selfIntroduce = reactive<any[]>([])
    const spouseDemand = reactive<any[]>([])
    const spouseRemark = reactive<any[]>([])
    async function getData () {
      const ret = await getDetails({ userId })
      if (ret.code === 100000) {
        icon.value = ret.data.icon
        lifePhoto.value = ret.data.lifePhoto
        selfIntroduce.length = 0
        selfIntroduce.push(...ret.data.selfIntroduce)
        spouseDemand.length = 0
        spouseDemand.push(...ret.data.spouseDemand)
        spouseRemark.length = 0
        spouseRemark.push(...ret.data.spouseRemark)
      } else {
        Toast(ret.message)
      }
    }
    getData()
    watch(
      $route,
      (to) => {
        if (to.path === '/detail') {
          getData()
          location.reload()
        }
      }
    )
    return {
      icon,
      lifePhoto,
      selfIntroduce,
      spouseDemand,
      spouseRemark
    }
  },
})
</script>
<style lang="scss" scoped>
@import '~@/styles/adapt.scss';
.detail-box{
  position: relative;
  height: 100%;
  max-width: 750px;
  font-family: PingFang SC-中等, PingFang SC;
  background: #F5F6FA;
  overflow: auto;
  .detail-box1{
    .detail-success{
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include adapt-height(80px);
      @include adapt-margin(24px);
      @include adapt-padding(0px, 24px);
      box-sizing: border-box;
      background: #E8FFEA;
      @include adapt-border-radius(24px);
      overflow: auto;
      .phone-number span{
        @include adapt-font-size(28px);
        font-weight: normal;
        color: #00B42A;
      }
      img{
        @include adapt-width(110px);
        @include adapt-height(48px);
      }
    }
    .detail-fail{
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include adapt-height(80px);
      @include adapt-margin(24px);
      @include adapt-padding(0px, 24px);
      @include adapt-font-size(28px);
      color: #F53F3F;
      box-sizing: border-box;
      background: #FFECE8;
      @include adapt-border-radius(24px);
      overflow: auto;
      img{
        @include adapt-width(32px);
        @include adapt-height(32px);
      }
    }
    .detail-expire{
      display: flex;
      // align-items: center;
      justify-content: space-between;
      // @include adapt-height(80px);
      @include adapt-margin(24px);
      @include adapt-padding(24px);
      @include adapt-font-size(28px);
      color: #FFFFFF;
      box-sizing: border-box;
      background: #C9CDD4;
      @include adapt-border-radius(24px);
      overflow: auto;
      img{
        @include adapt-width(32px);
        @include adapt-height(32px);
      }
    }
  }
  .detail-box2{
    position: relative;
    overflow: auto;
    .bg-box{
      position: absolute;
      z-index: 1;
      @include adapt-width(750px);
      @include adapt-height(271px);
      background: linear-gradient(315deg, #E7F5FE 0%, #FFEAEF 271px);
    }
    .user-info{
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      @include adapt-height(140px);
      @include adapt-padding(24px,0px,0px,48px);
      .avatar-box{
        @include adapt-width(140px);
        @include adapt-height(140px);
        @include adapt-margin(0px,20px,0px,0px);
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .info-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @include adapt-height(104px);
        // @include adapt-padding(18px,0px,0px,0px);
        .info1-box{
          @include adapt-font-size(28px);
          font-weight: normal;
          color: #7A808C;
        }
        img{
          @include adapt-width(28px);
          @include adapt-height(28px);
          @include adapt-margin(0px,0px,0px,12px);
        }
        .info2-box{
          @include adapt-font-size(32px);
          font-weight: normal;
          color: #22263F;
        }
      }
    }
    .img-box{
      position: relative;
      z-index: 2;
      // @include adapt-top(-74px);
      @include adapt-margin(-74px,auto,0px);
      @include adapt-width(702px);
      @include adapt-height(350px);
      @include adapt-padding(110px,24px,40px,24px);
      // margin: 0 auto;
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 24px 24px 24px 24px;
      overflow: hidden;
      ul{
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        list-style: none;
        &::before{
          content: '共6张';
          position: absolute;
          @include adapt-right(0px);
          @include adapt-bottom(0px);
          @include adapt-width(200px);
          @include adapt-height(200px);
          @include adapt-font-size(28px);
          @include adapt-line-height(200px);
          text-align: center;
          font-weight: normal;
          color: #FFFFFF;
          background: rgba(34,38,63,0.8);
          @include adapt-border-radius(24px);
        }
        li{
          flex-shrink: 0;
          @include adapt-width(200px);
          @include adapt-height(200px);
          @include adapt-margin(0px,28px,0px,0px);
          @include adapt-border-radius(24px);
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .self-intro-box{
      @include adapt-width(702px);
      @include adapt-padding(40px, 24px);
      @include adapt-margin(24px, auto, 0px);
      @include adapt-border-radius(24px);
      box-sizing: border-box;
      background: #FFFFFF;
      &:last-child{
        @include adapt-margin(24px, auto, 38px);
      }
      .intro-title{
        display: flex;
        align-items: center;
        @include adapt-margin(0px, 0px, 28px, 0px);
        @include adapt-font-size(28px);
        font-weight: normal;
        color: #7A808C;
        &::before{
          content: '';
          display: inline-block;
          @include adapt-width(16px);
          @include adapt-height(30px);
          @include adapt-margin(0px, 12px, 0px, 0px);
          @include adapt-border-radius(8px);
          background: #FF7D00;
        }
      }
      .intro-list{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li{
          display: flex;
          width: 50%;
          box-sizing: border-box;
          @include adapt-margin(0px, 0px, 24px, 0px);
          @include adapt-font-size(28px);
          font-weight: normal;
          color: #22263F;
          &:nth-child(odd){
            @include adapt-padding(0px, 20px, 0px, 0px);
          }
          &:last-child{
            width: 100%;
            padding: 0;
          }
          span:first-child{
            flex-shrink: 0;
            @include adapt-width(120px);
            @include adapt-font-size(28px);
            font-weight: normal;
            color: #7A808C;
            white-space: nowrap;
            overflow: hidden;
          }
          span:last-child{
            @include adapt-font-size(28px);
            font-weight: normal;
            color: #22263F;
          }
        }
      }
    }
  }
}
</style>
