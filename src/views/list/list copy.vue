<template>
  <div className="list-box">
    <div className="list-inner">
        <div className="list-item" v-for="(it, ind) in list" :key="ind" @click="goToDetail(it)">
          <div className="item-box">
            <div className="img-box">
              <img :src="it.icon" alt="" />
            </div>
            <div className="info-box">
              <div className="info-top">
                <div className="info-msg">昵称：{{it.nickName}}</div>
                <div className="info-main">{{it.title}}</div>
              </div>
              <div className="info-divider"></div>
              <div className="info-bottom">
                <div className="info-msg">月薪：10000元/月 独生子</div>
                <div className="info-msg">{{it.userTagList.map((item)=> item.tagName).join(' ')}}</div>
              </div>
              <div className="info-divider"></div>
            </div>
          </div>
          <div className="item-msg">{{it.spouseKeypointValue}}</div>
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
  height: 100%;
  padding: 10px;
  overflow: auto;
  .list-inner{
    overflow-x: hidden;
    overflow-y: auto;
  }
  .list-item{
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    background: #f5f5f5;
    border-radius: 0.1rem;
    .item-box{
      overflow: hidden;
      .img-box{
        width: 2.3rem;
        height: 2.6rem;
        margin-right: 0.2rem;
        overflow: hidden;
        border-radius: 0.1rem;
        float: left;
        img{
          width: 2.3rem;
          height: 2.6rem;
        }
      }
      .info-box{
        overflow: auto;
        .info-bottom{
          padding: 0.05rem 0;
        }
        .info-divider{
          padding: 0.05rem 0;
          border-radius: 0.1rem;
          background: #fff;
        }
        .info-msg{
          padding: 0 0 0.1rem;
          color: #555;
          font-size: 0.3rem;
        }
        .info-main{
          padding: 0.1rem 0;
          color: #333;
          font-size: 0.4rem;
        }
      }
    }
    .item-msg{
      padding: 0.2rem 0 0;
      font-size: 0.3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
