<template>
  <div class="letter-box">
    <img class="theme-pic" src="../../assets/img/theme.png" alt="">
    <img src="../../assets/img/mailbox.png" alt="" class="mailbox">
    <div class="txt-area">
      <div class="txt-content">
        <div class="title"><span>嗨！亲爱的朋友：</span></div>
        <div class="txt-block">
          你好！很高兴等到你，我们是此平台的初创团队。在你使用之前我们想请你耐心听一听我们的声音。 
        </div>
        <div class="txt-block">
          我们是一群有着多年工作经验的互联网从业人员，我们来自不同的地方，我们不甘心平凡，想要为自己，为社会做点什么，就这样我们走到了一起！
        </div>
        <div class="title1">
          平台创作的背景及灵感
        </div>
        <div class="txt-block">
          我们从事互联网工作，此外我们也是一些公益相亲群的群主。我们在管理相亲群时真实的体会到大家想要寻找另一半的迫切感，于是一个构想由此诞生！ 
        </div>
        <div class="txt-block">
          市面上的相亲平台这么多，为什么大家还有钟意相亲群？因为大部分相亲平台不太靠谱。一个朋友不经意的遭遇，让我们真正下决心去做这件事。事情过程是我们的朋友在某某相亲平台交了几千元钱就和相亲对象约了几次见面，平台会员费少则几千，多则几万。更有甚者相亲会员费达到了十几万，我知道经营者不容易，也知道相亲平台的不容易，我从来不反对收费。但是君子爱财取之有道。
          <span class="txt-block-bold">
            我们的最终理想，是想让每个人的相亲成本都降下来，让相亲变得简单。
          </span>
          我们需要采取一种社交和微信群相结合的模式，于是我们行动了，开始大规模组建相亲群，同时也在打造我们的平台项目。
        </div>
        <div class="title1">
          我们的核心产品
        </div>
        <div class="txt-block">
          它就是一个相当大型微信群，没有壁垒之分，开放式的微信群，展示的都是个人的求偶信息，不支持聊天（后期将支持单聊），聊天去官方的微信群，觉得双方合适的就去交换联系方式，对方同意后就可以沟通交流。为了与微信群区分开，我们给他起名为”相亲圈“。
        </div>
        <div class="title1">
          关于项目的收费问题
        </div>
        <div class="txt-block">
          关于要不要收费这个话题,我们犹豫再三还是决定对其进行收费。因为我们有个公司，如果不收费我们怎么活下去呢，不收费我们怎么全职做下去呢，但我们是有底线的，我们不会胡乱收费，因为我们有个远大的理想，让所有人的相亲成本都降下来。 
        </div>
        <div class="txt-block">
          不花钱在平台上能玩吗？答案是肯定可以的。我们只在部分功能上做了一些限制，不影响正常使用。我们希望大家能够认真的去完成实名认证，只有大家实名认证了，在大家相亲的时候就多一层保障。
        </div>
        <div class="title1">
          后期的发展
        </div>
        <div class="txt-block">
          在后期我们将会加入官方红娘，第三方婚介角色，我们将会有单聊和群聊模式，官方红娘是半公益模式一切以服务优先。官方红娘相当于媒人，采用先介绍、先结婚、后付媒人钱的模式。
        </div>
        <div class="title1">
          关于团队的成员
        </div>
        <div class="txt-block">
          因为资源有限，我们都是身兼数职，感谢在项目初期为此平台付出的所有伙伴和成员。 
        </div>
        <div class="txt-block">
          以下为团队主要人员简介:
        </div>
        <img src="../../assets/img/members.png" alt="" class="members-pic">
        <div class="txt-block">
          同时也感谢各个群主和群管理员的辛勤付出！
        </div>
        <div class="title1">
          最后我想说
        </div>
        <div class="txt-block">
          相遇即是缘分，我们都是一家人，大家可以放心加入我们的微信相亲群，如果你有心事，不管是高兴的、伤心的都可以与我们一起分享。如果你有好的建议或者是我们做的不足的地方，欢迎你反馈给我们。 
        </div>
        <div class="txt-block">
          祝大家在今后的日子中，活得通透，活的潇洒，相信缘分，不管在何地，愿你在不久的将来遇到你心仪的另一半。
        </div>
        <div class="txt-from">
          来自芒果团队
        </div>
      </div>
    </div>
    <img src="../../assets/img/envelope-2.png" alt="" class="envelope-2">
    <img src="../../assets/img/envelope-1.png" alt="" class="envelope-1">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Letter'
})
</script>

<style lang="scss" scoped>
@import '~@/styles/adapt.scss';

div.letter-box{
  position: relative;
  height: 100%;
  @include adapt-width(750px);
  @include adapt-margin(0px, auto, 0px);
  font-family: PingFang SC-粗体, PingFang SC;
  background: rgba(255, 243, 228, 1);
  .theme-pic{
    position: relative;
    z-index: 3;
    @include adapt-width(750px);
  }
  .mailbox{
    position: absolute;
    right: 0;
    z-index: 1;
    @include adapt-top(210px);
    @include adapt-width(250px);
  }
  .txt-area{
    position: relative;
    @include adapt-top(-100px);
    z-index: 2;
    @include adapt-width(702px);
    @include adapt-padding(22px);
    @include adapt-margin(0px, auto, 0px);
    box-sizing: border-box;
    background: #fff;
    @include adapt-border-radius(20px);
    .txt-content{
      @include adapt-padding(82px, 22px, 220px);
      border: 2px solid #FBC484;
      @include adapt-border-radius(20px);
      .title{
        position: relative;
        z-index: 2;
        @include adapt-width(288px);
        @include adapt-margin(0px, 0px, 48px);
        @include adapt-font-size(36px);
        font-weight: normal;
        color: #22263F;
        span{
          position: relative;
          z-index: 2;
        }
        &:after{
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          z-index: 1;
          content: '';
          @include adapt-width(264px);
          @include adapt-height(20px);
          background: #FFDEB6;
        }
      }
      .txt-block{
        @include adapt-margin(0px, 0px, 70px);
        color: #22263F;
        @include adapt-font-size(28px);
        @include adapt-line-height(45px);
        .txt-block-bold{
          font-weight: bolder;
        }
      }
      .title1{
        color: #FF7D00;
        @include adapt-font-size(28px);
        @include adapt-line-height(45px);
      }
      .members-pic{
        width: 100%;
        @include adapt-margin(0px, 0px, 70px);
      }
      .txt-from{
        @include adapt-font-size(36px);
        font-weight: bolder;
        color: #3D3D3D;
        text-align: right;
      }
    }
  }
  .envelope-2{
    position: relative;
    z-index: 1;
    width: 100%;
    @include adapt-margin(-500px, 0px, 0px);
  }
  .envelope-1{
    position: relative;
    z-index: 3;
    width: 100%;
    @include adapt-margin(-500px, 0px, 0px);
  }
}
</style>