<template>
  <div class="info-box">
    <div class="info-item">
      <div class="item-t">1、请选择性别</div>
      <div class="item-b">
        <label><input type="radio" name="sex" :value="1" v-model="ruleForm.gender"/> 男性</label>
        <label><input type="radio" name="sex" :value="2" v-model="ruleForm.gender"/> 女性</label>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">2、请选择出生年月</div>
      <div class="item-b">
        <input readonly type="text" class="normal-input" v-model="ruleForm.birthday" @click="showChooseDate = true"/>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">3、请选择您的所在地</div>
      <div class="item-b">
        <input readonly type="text" class="normal-input" v-model="ruleForm.areaName" @click="showChooseArea = true"/>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">4、请选择您的婚姻状态</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="maritalStatus" :value="1" v-model="ruleForm.maritalStatus">丧偶</label></li>
          <li><label><input type="radio" name="maritalStatus" :value="2" v-model="ruleForm.maritalStatus">离异，无子女</label></li>
          <li><label><input type="radio" name="maritalStatus" :value="3" v-model="ruleForm.maritalStatus">离异，子女归对方</label></li>
          <li><label><input type="radio" name="maritalStatus" :value="4" v-model="ruleForm.maritalStatus">离异，带子女</label></li>
          <li><label><input type="radio" name="maritalStatus" :value="5" v-model="ruleForm.maritalStatus">未婚</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">5、请选择您身高</div>
      <div class="item-b">
        <input readonly type="text" class="normal-input" v-model="ruleForm.height" @click="showChooseHeight = true"/>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">6、请选择您体重（KG）</div>
      <div class="item-b">
        <input readonly type="text" class="normal-input" v-model="ruleForm.weight" @click="showChooseWeight = true"/>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">7、请选择您的学历</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="education" :value="1" v-model="ruleForm.recordOfFormalSchooling">专科</label></li>
          <li><label><input type="radio" name="education" :value="2" v-model="ruleForm.recordOfFormalSchooling">专接本</label></li>
          <li><label><input type="radio" name="education" :value="3" v-model="ruleForm.recordOfFormalSchooling">本科</label></li>
          <li><label><input type="radio" name="education" :value="4" v-model="ruleForm.recordOfFormalSchooling">硕士及以上</label></li>
          <li><label><input type="radio" name="education" :value="5" v-model="ruleForm.recordOfFormalSchooling">在职研究生</label></li>
          <li><label><input type="radio" name="education" :value="6" v-model="ruleForm.recordOfFormalSchooling">博士</label></li>
          <li><label><input type="radio" name="education" :value="7" v-model="ruleForm.recordOfFormalSchooling">博士后</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">8、请选择您的单位性质</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="enterprise" :value="1" v-model="ruleForm.job1">国企</label></li>
          <li><label><input type="radio" name="enterprise" :value="2" v-model="ruleForm.job1">私企</label></li>
          <li><label><input type="radio" name="enterprise" :value="3" v-model="ruleForm.job1">自营</label></li>
          <li><label><input type="radio" name="enterprise" :value="4" v-model="ruleForm.job1">其他</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">9、请选择您的年收入</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="annualIncome" :value="1" v-model="ruleForm.yearSalary">10万以下</label></li>
          <li><label><input type="radio" name="annualIncome" :value="2" v-model="ruleForm.yearSalary">10-30万</label></li>
          <li><label><input type="radio" name="annualIncome" :value="3" v-model="ruleForm.yearSalary">30-50万</label></li>
          <li><label><input type="radio" name="annualIncome" :value="4" v-model="ruleForm.yearSalary">50万以上</label></li>
          <li><label><input type="radio" name="annualIncome" :value="-1" v-model="ruleForm.yearSalary">保密</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">10、请选择您的住房情况</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="housing" :value="1" v-model="ruleForm.house">无住房，暂无意向买房</label></li>
          <li><label><input type="radio" name="housing" :value="2" v-model="ruleForm.house">无住房，有意向买房</label></li>
          <li><label><input type="radio" name="housing" :value="3" v-model="ruleForm.house">有住房</label></li>
          <li><label><input type="radio" name="housing" :value="4" v-model="ruleForm.house">多套住房</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">11、请选择您的私家车情况</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="car" :value="0" v-model="ruleForm.car">无车</label></li>
          <li><label><input type="radio" name="car" :value="1" v-model="ruleForm.car">有车，10万以下</label></li>
          <li><label><input type="radio" name="car" :value="2" v-model="ruleForm.car">有车，10-25万</label></li>
          <li><label><input type="radio" name="car" :value="3" v-model="ruleForm.car">有车，25万以上</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">12、请选择您的父母情况</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="pension" value="1" v-model="ruleForm.parentCondition">无养老金</label></li>
          <li><label><input type="radio" name="pension" value="2" v-model="ruleForm.parentCondition">有养老金</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">13、我的性格更符合</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="character" :value="1" v-model="ruleForm.character">
            活泼型-开朗的性格，喜欢玩，很乐观，话特别多，喜欢新鲜，富有多姿多彩的创造力
          </label></li>
          <li><label><input type="radio" name="character" :value="2" v-model="ruleForm.character">
            力量型-天生的领袖，性格偏暴躁，天生具有管理能力、决策能力和坚强的意志力
          </label></li>
          <li><label><input type="radio" name="character" :value="3" v-model="ruleForm.character">
            和平行-顺从的性格，天生的协调能力，后来居上的领导者
          </label></li>
          <li><label><input type="radio" name="character" :value="4" v-model="ruleForm.character">
            完美型-严肃认真，细腻，有条理，活在计划中，崇尚美感，往往具有诗歌，音乐，文学，绘画等多方面的才能
          </label></li>
        </ul>
      </div>
    </div>
    <div class="submit-btn" @click="onSbumit">完 成</div>
    <van-calendar v-model:show="showChooseDate" @confirm="onConfirm" :min-date="new Date('1980-01-01')" />
    <van-popup v-model:show="showChooseArea" position="bottom" :style="{ height: '50%' }" >
      <van-cascader
        v-model="ruleForm.area"
        title="请选择所在地区"
        :options="cityJSON.provList"
        @close="showChooseArea = false"
        @finish="onConfirmArea"
      />
    </van-popup>
    <van-popup v-model:show="showChooseHeight" position="bottom" :style="{ height: '50%' }" >
      <van-cascader
        v-model="ruleForm.area"
        title="请选择身高"
        :options="HeightJSON"
        @close="showChooseHeight = false"
        @finish="onConfirmHeight"
      />
    </van-popup>
    <van-popup v-model:show="showChooseWeight" position="bottom" :style="{ height: '50%' }" >
      <van-cascader
        v-model="ruleForm.area"
        title="请选择体重"
        :options="WeightJSON"
        @close="showChooseWeight = false"
        @finish="onConfirmWeight"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import { Toast } from 'vant'
  const cityJSON = require('../../assets/city.json') // '@/assets/city.json'
  import HeightJSON from '@/assets/height'
  import WeightJSON from '@/assets/weight'
  export default defineComponent({
    name: 'Info',
    setup () {
      interface Dict { [k: string]: any }
      const ruleForm = reactive<Dict>({
        areaName: '',
        // 我的性格  字段值 和 含义
        // 1更要求性格，踏踏实实过日子的，性格好
        // 2更要求长相，身材匀称
        // 3更偏向工作和家庭稳定，体面的工作和良好的家庭环境
        // 4更偏向上进心，阳光，乐观，为理想努力奋斗
        gender: '', //性别 1 男 2 女
        birthday: '',//* 出生年月
        job1: '', // 单位性质 01:国企 02:私企 03:自营 09:其他
        character: '',//我的性格
        house: '',//住房情况  3.有住房 4.多套住房 2.无住房,有意向购买 1.无住房,暂无意向购买
        recordOfFormalSchooling: '',//我的学历 1:大专 2:专接本 3:本科 4:硕士 5:在职研 6.:博士 7:博士后
        car: '',//私家车情况  0:无车 1:有车 0-10w 2:有车 10-25w 3:有车,25w以上
        provId: '',//* 省
        cityId: '',//* 市
        areaId: '',//* 区
        //婚姻状况 5:未婚 2:离异无子女 4:离异带子女 3:离异子女归对方 1:丧偶
        maritalStatus: '',
        yearSalary: '',//年收入 1:0-10W 2:10-30w 3:30-50w 4:50w以上 -1:保密
        parentCondition: '',//父母情况 2.有养老金 1.无养老金
        // spouseRemark: '',//* 补充说明
        weight: '',//体重
        height: '',//身高
        publishInfoEnable: 0,//是否公开联系方式 0否 1是
      })
      const msgObj: Dict = {
        areaName: '地区名称',
        gender: '性别', //性别 1 男 2 女
        birthday: '出生年月',//* 出生年月
        job1: '单位性质', // 单位性质 01:国企 02:私企 03:自营 09:其他
        character: '我的性格',//我的性格
        house: '住房情况',//住房情况  3.有住房 4.多套住房 2.无住房,有意向购买 1.无住房,暂无意向购买
        recordOfFormalSchooling: '学历',//我的学历 1:大专 2:专接本 3:本科 4:硕士 5:在职研 6.:博士 7:博士后
        car: '私家车情况',//私家车情况  0:无车 1:有车 0-10w 2:有车 10-25w 3:有车,25w以上
        //婚姻状况 5:未婚 2:离异无子女 4:离异带子女 3:离异子女归对方 1:丧偶
        maritalStatus: '婚姻状况',
        yearSalary: '年收入',//年收入 1:0-10W 2:10-30w 3:30-50w 4:50w以上 -1:保密
        parentCondition: '父母情况',//父母情况 2.有养老金 1.无养老金
        weight: '体重',//体重
        height: '身高',//身高
        publishInfoEnable: 1,//是否公开联系方式 0否 1是
      }
      const showChooseDate = ref(false)
      const showChooseArea = ref(false)
      const showChooseHeight = ref(false)
      const showChooseWeight = ref(false)
      function onConfirm (val: Date) {
        console.log(val)
        const y = val.getFullYear()
        const m = ((val.getMonth() + 1) + '').padStart(2, '0')
        const d = (val.getDate() + '').padStart(2, '0')
        ruleForm.birthday = `${y}-${m}-${d}`
        showChooseDate.value = false
      }
      function onConfirmArea (val: any) {
        console.log(val)
        ruleForm.areaName = val.selectedOptions.map((it: any) => it.text).join('-')
        const arr = val.selectedOptions.map((it: any) => it.value)
        ruleForm.areaId = arr[0]
        ruleForm.cityId = arr[1]
        ruleForm.provId = arr[2]
        showChooseArea.value = false
      }
      function onConfirmHeight (val: any) {
        console.log(val)
        ruleForm.height = val.selectedOptions.map((it: any) => it.value).join('')
        showChooseHeight.value = false
      }
      function onConfirmWeight (val: any) {
        console.log(val)
        ruleForm.weight = val.selectedOptions.reduce((init: number, it: any) => {
          init += it.value
          return init
        }, 0)
        showChooseWeight.value = false
      }
      function onSbumit () {
        const sendData = JSON.parse(JSON.stringify(ruleForm))
        console.log(sendData)
        delete sendData.areaName
        let msg = ''
        for (const k in sendData) {
          if (sendData[k] === '') {
            msg = msgObj[k]
            break
          }
        }
        if (msg) {
          return Toast('请完善【' + msg + '】')
        }
        console.log(sendData)
      }
      return {
        onSbumit,
        onConfirm,
        onConfirmArea,
        onConfirmHeight,
        onConfirmWeight,
        showChooseDate,
        showChooseArea,
        showChooseHeight,
        showChooseWeight,
        cityJSON,
        HeightJSON,
        WeightJSON,
        ruleForm
      }
    }
  })
</script>

<style lang="scss">
.info-box{
  .normal-input{
    width: 80%;
    height: 30px;
    padding: 5px 10px;
    font-size: 20px;
    outline: 0;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
  }
  .info-item{
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    font-size: 18px;
    .item-t{
      margin-bottom: 15px;
    }
    .item-b{
      label{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        &:first-child{
          margin-right: 60px;
        }
        input{
          width: 20px;
          flex-shrink: 0;
        }
      }
      ul > li {
        margin-bottom: 5px;
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