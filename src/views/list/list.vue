<template>
  <div className="list-box">
    <div class="list-scroll">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <img :src="item.icon" alt="">
        <div class="item-info">
          <div class="user-info">{{item.title}}</div>
          <div class="user-tag">
            <div class="tag-item" v-for="(it, ind) in item.userTagList" :key="ind">{{it.tagName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getList } from '@/apis/url'
import { Toast } from 'vant'

export default defineComponent({
  setup() {
    const $router = useRouter()
    const list = reactive<any[]>([])
    async function getData () {
      const ret = await getList({})
      if (ret.code === 100000) {
        list.length = 0;
        list.push(...ret.data.visitingCardVos)
      } else {
        Toast(ret.message)
      }
    }
    getData()
    function goToDetail (it: any) {
      const perfect = localStorage.getItem('perfect')
      if (perfect == '0' || !perfect) {
        Toast('请您登陆')
        $router.push('/login')
        return;
      }
      $router.push({
        path: '/detail',
        query: {
          userId: it.userId
        }
      })
    }
    return {
      list,
      goToDetail,
      getData
    }
  },
})
</script>
<style lang="scss" scoped>
@use '../../styles/adapt' as adapt;
.list-box{
  max-width: 750px;
  @include adapt.adapt-padding(22px);
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  background: #F5F6FA;
  font-family: PingFang SC-中等, PingFang SC;
  .list-scroll{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: auto;
    .list-item{
      flex-shrink: 0;
      position: relative;
      @include adapt.adapt-width(340px);
      @include adapt.adapt-height(532px);
      @include adapt.adapt-margin(0px,0px,20px);
      @include adapt.adapt-border-radius(24px);
      overflow: hidden;
      background: #FFFFFF;
      & > img{
        width: 100%;
      }
      .item-info{
        position: absolute;
        bottom: 0; left: 0; right: 0;
        @include adapt.adapt-padding(0px, 26px, 0px);
        background: #fff;
        .user-info{
          @include adapt.adapt-margin(24px, 0px, 24px);
          @include adapt.adapt-font-size(32px);
          font-weight: normal;
          color: #22263F;
        }
        .user-tag{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .tag-item{
            flex-shrink: 0;
            @include adapt.adapt-width(76px);
            @include adapt.adapt-height(36px);
            @include adapt.adapt-margin(0px, 0px, 24px);
            @include adapt.adapt-border-radius(4px);
            @include adapt.adapt-font-size(20px);
            @include adapt.adapt-line-height(36px);
            font-weight: normal;
            color: #7A808C;
            text-align: center;
            background: #F2F3F5;
          }
        }
      }
    }
  }
}
</style>
