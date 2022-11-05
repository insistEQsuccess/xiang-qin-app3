<template>
  <div className='detail-box'>
    <div class="top1-box">
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
  height: 100%;
  max-width: 750px;
  font-family: PingFang SC-中等, PingFang SC;
  background: #F5F6FA;
  .top1-box{
    @include adapt-width(750px);
    @include adapt-height(271px);
    background: linear-gradient(315deg, #E7F5FE 0%, #FFEAEF 100%);
    .user-info{
      position: relative;
      z-index: 2;
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
      z-index: 1;
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
    }
  }
  
}
</style>
