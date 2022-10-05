<template>
  <div class="info-box">
    <div class="info-item">
      <div class="item-t">1、期望配偶-单身状态</div>
      <div class="item-b">
        <ul>
          <!-- 1:未婚 2:离异 0:无要求 -->
          <li><label><input type="radio" name="spouseMaritalStatus" value="0" v-model="ruleForm.spouseMaritalStatus">无要求</label></li>
          <li><label><input type="radio" name="spouseMaritalStatus" value="1" v-model="ruleForm.spouseMaritalStatus">未婚</label></li>
          <li><label><input type="radio" name="spouseMaritalStatus" value="2" v-model="ruleForm.spouseMaritalStatus">离异</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">2、期望配偶-年龄范围</div>
      <div class="item-b">
        <div class="slider-box">
          <van-slider v-model="ruleForm.ageArr" range :min="18" :max="40" @change="onAgeChange" />
        </div>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">3、期望配偶-学历</div>
      <div class="item-b">
        <ul>
          <!-- 1:专科及以上 2:本科及以上 3:硕士及以上 0:无要求 -->
          <li><label><input type="radio" name="spouseRecordOfFormalSchooling" value="0" v-model="ruleForm.spouseRecordOfFormalSchooling">无要求</label></li>
          <li><label><input type="radio" name="spouseRecordOfFormalSchooling" value="1" v-model="ruleForm.spouseRecordOfFormalSchooling">专科及以上</label></li>
          <li><label><input type="radio" name="spouseRecordOfFormalSchooling" value="2" v-model="ruleForm.spouseRecordOfFormalSchooling">本科及以上</label></li>
          <li><label><input type="radio" name="spouseRecordOfFormalSchooling" value="3" v-model="ruleForm.spouseRecordOfFormalSchooling">硕士及以上</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">4、期望配偶-身高</div>
      <div class="item-b">
        <ul>
          <!-- 1:150以上 2:160以上 3:170以上 4:180以上 0:无要求 -->
          <li><label><input type="radio" name="spouseHeight" value="0" v-model="ruleForm.spouseHeight">无要求</label></li>
          <li><label><input type="radio" name="spouseHeight" value="1" v-model="ruleForm.spouseHeight">150及以上</label></li>
          <li><label><input type="radio" name="spouseHeight" value="2" v-model="ruleForm.spouseHeight">160及以上</label></li>
          <li><label><input type="radio" name="spouseHeight" value="3" v-model="ruleForm.spouseHeight">170及以上</label></li>
          <li><label><input type="radio" name="spouseHeight" value="4" v-model="ruleForm.spouseHeight">180及以上</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">5、期望配偶-工作单位</div>
      <div class="item-b">
        <ul>
          <!-- 0 无要求 1 国企 -->
          <li><label><input type="radio" name="spouseJob1" value="0" v-model="ruleForm.spouseJob1">无要求</label></li>
          <li><label><input type="radio" name="spouseJob1" value="1" v-model="ruleForm.spouseJob1">国企/央企</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">6、期望配偶-年收入</div>
      <div class="item-b">
        <ul>
          <!-- 1:0-10W 2:10-30w 3:30-50w 4:50w以上 -0:无要求 -->
          <li><label><input type="radio" name="spouseYearSalary" value="0" v-model="ruleForm.spouseYearSalary">无要求</label></li>
          <li><label><input type="radio" name="spouseYearSalary" value="1" v-model="ruleForm.spouseYearSalary">0-10W</label></li>
          <li><label><input type="radio" name="spouseYearSalary" value="2" v-model="ruleForm.spouseYearSalary">10-30w</label></li>
          <li><label><input type="radio" name="spouseYearSalary" value="3" v-model="ruleForm.spouseYearSalary">30-50w</label></li>
          <li><label><input type="radio" name="spouseYearSalary" value="4" v-model="ruleForm.spouseYearSalary">50w以上</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">7、期望配偶-住房情况</div>
      <div class="item-b">
        <ul>
          <!-- 0 无要求 1 必须有房  2 可以无房但是能够随时购买 -->
          <li><label><input type="radio" name="spousehHouse" value="0" v-model="ruleForm.spousehHouse">无要求</label></li>
          <li><label><input type="radio" name="spousehHouse" value="1" v-model="ruleForm.spousehHouse">必须有房</label></li>
          <li><label><input type="radio" name="spousehHouse" value="2" v-model="ruleForm.spousehHouse">可以无房，但是随时可以买房</label></li>
        </ul>
      </div>
    </div>
    <div class="info-item">
      <div class="item-t">8、请选择您求偶的重点</div>
      <div class="item-b">
        <ul>
          <li><label><input type="radio" name="spouseKeypoint" value="1" v-model="ruleForm.spouseKeypoint">
            更要求性格，踏踏实实过日子，性格好
          </label></li>
          <li><label><input type="radio" name="spouseKeypoint" value="2" v-model="ruleForm.spouseKeypoint">
            更要求长相，身材匀称，可以忍受她的小脾气
          </label></li>
          <li><label><input type="radio" name="spouseKeypoint" value="3" v-model="ruleForm.spouseKeypoint">
            更偏向工作和家庭稳定，体面的工作和良好的家庭环境
          </label></li>
          <li><label><input type="radio" name="spouseKeypoint" value="4" v-model="ruleForm.spouseKeypoint">
            更偏向上进心，工作和家庭无所谓，关键是有潜力有上进心
          </label></li>
        </ul>
      </div>
    </div>
    <div class="submit-btn" @click="onSbumit">完 成</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { Toast } from 'vant';
  export default defineComponent({
    name: 'Info',
    setup () {
      interface Dict { [k: string]: any }
      const $router = useRouter()
      const ruleForm = reactive<Dict>({
        info3Done: false,
        ageArr: [20, 25], // +++++++
        spouseBirthStart: '', //配偶的最小年龄 +++++++
        spouseBirthEnd: '', //配偶的最大年龄 +++++++
        spouseRecordOfFormalSchooling: '', //配偶学历 1:专科及以上 2:本科及以上 3:硕士及以上 0:无要求
        spouseHeight: '', //配偶身高   1:150以上 2:160以上 3:170以上 4:180以上 0:无要求
        spouseMaritalStatus: '', //配偶单身情况 1:未婚 2:离异 0:无要求
        spouseKeypoint: '', //配偶的重点 1 2 3 4
        spouseYearSalary: '', //配偶的年收入 1:0-10W 2:10-30w 3:30-50w 4:50w以上 -0:无要求
        spouseJob1: '', //配偶的工作性质 0 无要求 1 国企
        spousehHouse: '', //配偶住房情况 0无要求1必须有房2可以无房但是能够随时购买
      })
      const msgObj: Dict = {
        spouseBirthStart: '请选择期望配偶的最小年龄', //配偶的最小年龄 +++++++
        spouseBirthEnd: '请选择期望配偶的最大年龄', //配偶的最大年龄 +++++++
        spouseRecordOfFormalSchooling: '请选择期望配偶的学历', //配偶学历 1:专科及以上 2:本科及以上 3:硕士及以上 0:无要求
        spouseHeight: '请选择期望配偶的身高', //配偶身高   1:150以上 2:160以上 3:170以上 4:180以上 0:无要求
        spouseMaritalStatus: '请选择期望配偶的单身情况', //配偶单身情况 1:未婚 2:离异 0:无要求
        spouseKeypoint: '请选择期望配偶的重点', //配偶的重点 1 2 3 4
        spouseYearSalary: '请选择期望配偶的年收入', //配偶的年收入 1:0-10W 2:10-30w 3:30-50w 4:50w以上 -0:无要求
        spouseJob1: '请选择期望配偶的工作性质', //配偶的工作性质 0 无要求 1 国企
        spousehHouse: '请选择期望配偶的住房情况', //配偶住房情况 0无要求1必须有房2可以无房但是能够随时购买
      }
      onMounted(() => {
        const info3_param = JSON.parse(sessionStorage.getItem('info3_param') || '{}')
        for (const k in ruleForm) {
          ruleForm[k] = info3_param[k]
        }
        ruleForm.ageArr = [info3_param.spouseBirthEnd, info3_param.spouseBirthStart]
      })
      function onAgeChange (val: any[]) {
        console.log('年龄范围：', val);
        ruleForm.spouseBirthStart = val[0]
        ruleForm.spouseBirthEnd = val[1]
        Toast(`选择年龄范围：${val[0]}岁-${val[1]}岁`);
      }
      function onSbumit () {
        const sendData = JSON.parse(JSON.stringify(ruleForm))
        delete sendData.ageArr
        let msg = ''
        for (const k in sendData) {
          if (sendData[k] === '') {
            msg = msgObj[k]
            break
          }
        }
        if (msg) {
          return Toast(msg)
        }
        sendData.info3Done = true
        console.log(sendData)
        sessionStorage.setItem('info3_param', JSON.stringify(sendData))
        $router.push('/info1')
      }
      return {
        onSbumit,
        onAgeChange,
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
      .slider-box{
        margin: 20px 0 10px;
      }
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