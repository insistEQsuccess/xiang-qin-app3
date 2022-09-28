<template>
  <div className='detail-box'>
    <ul className="fav-box">
      <li><span>讨厌所有晴天以外的天气</span></li>
      <li><span>可是如果你来</span></li>
      <li><span>风雨雷电我都陪你</span></li>
      <img className='sweet' src='../../assets/img/sweet.gif' alt=""/>
      <li><span>主动一点</span></li>
      <li>
        <span>也许你的命定爱情就在这里</span>
        <!-- <img src='../../assets/img/heart.png' alt=""/> -->
      </li>
    </ul>
    <div className='guest'>▼▼今日推荐嘉宾▼▼</div>
    <div className='msg'>与其等待爱情，不如主动出击！</div>
    <div className="pic-top">
      <img src='../../assets/img/female.png' alt=""/>
      征婚交友
    </div>
    <div className="pic-box">
      <img src='../../assets/img/women.png' alt=""/>
    </div>
    <div className="info-title">
      <div className="info-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      自我介绍
    </div>
    <ul className="info-box">
      <li>会员号：<span>2111121320</span></li>
      <li>性别：<span>女</span></li>
      <li>出生年月：<span>1990-05-02</span></li>
      <li>属相：<span>马</span></li>
      <li>身高：<span>162 CM</span></li>
      <li>体重：<span>55 KG</span></li>
      <li>婚姻状况：<span>离异</span></li>
      <li>有无子女：<span>无小孩</span></li>
      <li>星座：<span>巨蟹座</span></li>
      <li>民族：<span>汉族</span> </li>
      <li>学历:  <span>专科</span></li>
      <li>目前所在地：<span>河南省 鹤壁市</span></li>
      <li>籍贯所在：<span>河南省 安阳市 *</span></li>
    </ul>
    <div className="info-title">
      <div className="info-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      择偶要求
    </div>
    <ul className="info-box">
      <li>年龄：<span>30 岁 ~ 35 岁</span></li>
      <li>婚姻状况：<span>不限</span></li>
      <li>身高：<span>172 CM ~ 180 CM</span></li>
      <li>民族：<span>汉族</span></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Detail',
  setup() {
    
  },
})
</script>
<style lang="scss" scoped>
.detail-box{
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
  overflow: auto;
  .fav-box{
    outline: 0px;
    letter-spacing: 0.544px;
    font-family: -apple-system-font, BlinkMacSystemFont, Arial, sans-serif;
    text-align: center;
    font-size: 22px;
    line-height: 50px;
    word-wrap: break-word!important;
    .sweet{
      width: 300px;
      height: 158px;
    }
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 20px;
        height: 20px;
        margin-left: 5px;
      }
      span{
        outline: 0px;
        text-shadow: rgb(255 145 143) 2px 2px 10px;
      }
    }
  }
  .guest{
    height: 36px;
    margin: 30px 0 0;
    line-height: 36px;
    letter-spacing: 2px;
    font-size: 22px;
    visibility: visible;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    color: rgb(217, 33, 66);
    font-weight: bold;
    text-align: center;
  }
  .msg{
    margin: 10px 0 50px;
    color: rgb(216, 21, 97);
    font-size: 22px;
    letter-spacing: 0.544px;
    text-align: center;
  }
  .pic-top{
    position: relative;
    top: 2px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 150px;
    align-items: center;
    // padding-right: 10px;
    // padding-left: 10px;
    max-width: 100%;
    min-width: 10%;
    border-width: 2px;
    border-radius: 8px 8px 0px 0px;
    border-style: solid;
    border-color: rgb(216, 21, 97) rgb(216, 21, 97) rgb(255, 255, 255);
    color: rgb(216, 21, 97);
    text-align: center;
    font-size: 18px;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    img{
      width: 24px;
      height: 24px;
      margin: 0 5px 0 0;
    }
  }
  .pic-box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    outline: 0px;
    max-width: 100%;
    display: inline-block;
    width: 670.219px;
    vertical-align: top;
    border-color: rgb(216, 21, 97);
    border-width: 2px;
    border-radius: 0px 0px 8px 8px;
    border-style: solid;
    overflow: hidden;
    visibility: visible;
    box-sizing: border-box !important;
    overflow-wrap: break-word !important;
    img{
      width: 100%;
    }
  }
  .info-title{
    display: flex;
    align-items: center;
    margin: 20px 0 30px;
    font-size: 22px;
    font-weight: bold;
    color: rgb(216, 21, 97);
    .info-icon{
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      span{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-bottom: 3px;
        &:nth-child(1){
          background-color: rgba(216, 21, 97, 0.3);
        }
        &:nth-child(2){
          background-color: rgba(216, 21, 97, 0.6);
        }
        &:nth-child(3){
          background-color: rgba(216, 21, 97, 1);
        }
      }
    }
  }
  .info-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    li{
      height: 40px;
      color: rgb(34, 34, 34);
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
      font-size: 22px;
      text-indent: 2em;
    }
    span{
      color: rgb(102, 102, 102);
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", 微软雅黑, Tahoma, Arial, sans-serif;
      font-weight: 400;
      text-indent: 0px;
      word-spacing: 0px;
      text-decoration-style: initial;
      text-decoration-color: initial;
      display: inline !important;
    }
  }
}
</style>
