<template>
  <div class="groups-box">
    <div class="group-item" v-for="(it, ind) in groupList" :key="ind">
      <div class="group-top">
        <img :src="it.icon" alt="">
        <div class="group-msg">
          <div class="group-name">{{ it.name || '无' }}</div>
          <div class="group-saoma">请扫码进群</div>
        </div>
      </div>
      <div class="group-code-box">
        <img class="code-pic" :src="it.qrCode" alt="">
        <div class="group-code-modal" v-show="it.price > 0">
          <div class="code-msg">【收费群】解锁二维码</div>
          <button class="code-btn" @click="deblockingGroup(it)">解锁</button>
          <div class="code-cost">
            <img src="../../assets/img/clock.png" alt="">
            收费{{it.price}}元
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { getGroupsList, deblocking } from '@/apis/url'

export default defineComponent({
  name: 'Groups',
  setup() {
    const param = reactive({
      pageSize: 10,
      pageNum: 1
    })
    const groupList = reactive([])
    async function getData () {
      const ret = await getGroupsList(param)
      if (ret.code === 100000) {
        groupList.length = 0
        groupList.push(...ret.data.list)
      }
    }
    getData()
    async function deblockingGroup (it) {
      const ret = await deblocking({ datingCircleWechatGroupId: it.datingCircleGroupId })
      if (ret.code === 100000) {

      } else {

      }
    }
    return {
      groupList,
      deblockingGroup
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/adapt.scss';
.groups-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: normal;
  position: relative;
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
  @include adapt-padding(24px);
  box-sizing: border-box;
  font-family: PingFang SC-中等, PingFang SC;
  background: #F5F6FA;
  overflow-x: hidden;
  overflow-y: auto;
  .group-item{
    flex-shrink: 0;
    @include adapt-width(340px);
    @include adapt-height(444px);
    @include adapt-padding(24px);
    @include adapt-margin(0px, 0px, 24px, 0px);
    background: #FFFFFF;
    box-sizing: border-box;
    @include adapt-border-radius(24px);
    .group-top{
      overflow: hidden;
      img{
        @include adapt-width(80px);
        @include adapt-height(80px);
        @include adapt-margin(0px, 20px, 0px, 0px);
        float: left;
        @include adapt-border-radius(4px);
      }
      .group-msg{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        // background: greenyellow;
        .group-name{
          @include adapt-font-size(32px);
          @include adapt-margin(0px, 0px, 8px, 0px);
          font-family: PingFang SC-粗体, PingFang SC;
          font-weight: normal;
          color: #22263F;
        }
        .group-saoma{
          @include adapt-font-size(24px);
          font-family: PingFang SC-中等, PingFang SC;
          font-weight: normal;
          color: #7A808C;
        }
      }
    }
    .group-code-box{
      position: relative;
      @include adapt-width(292px);
      @include adapt-height(292px);
      @include adapt-margin(24px, 0px, 0px, 0px);
      background: rgba(255,255,255,0.96);
      .code-pic{
        @include adapt-width(292px);
        @include adapt-height(292px);
      }
      .group-code-modal{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        @include adapt-width(292px);
        @include adapt-height(292px);
        @include adapt-padding(15px, 0px);
        box-sizing: border-box;
        text-align: center;
        background: rgba(255,255,255,0.8);
        .code-msg{
          @include adapt-font-size(24px);
          font-family: PingFang SC-中等, PingFang SC;
          font-weight: normal;
          color: #7A808C;
        }
        .code-btn{
          @include adapt-width(200px);
          @include adapt-height(88px);
          @include adapt-font-size(32px);
          font-family: PingFang SC-中等, PingFang SC;
          font-weight: normal;
          color: #FFFFFF;
          background: linear-gradient(#FF7D00, #FFB151);
          outline: none;
          border: 0;
          @include adapt-border-radius(44px);
        }
        .code-cost{
          @include adapt-font-size(28px);
          font-family: PingFang SC-中等, PingFang SC;
          font-weight: normal;
          color: #7A808C;
          img{
            @include adapt-width(48px);
            @include adapt-height(48px);
            vertical-align: bottom;
          }
        }
      }
    }
  }
}
</style>
