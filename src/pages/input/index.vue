<template>
<div class="page">
  <div class="page_hd">
    <div class="page_title">input</div>
    <div class="page_desc">表单输入</div>
  </div>

  <div class="page_bd">
    <div class="weui-toptips weui-toptips_warn" v-if="showTopTips">error
    </div>
    <div class="weui-cells__title">单选</div>
    <div class="weui-cells weui-cells_after-title">
      <!-- 单选 使用了小程序标签 radio label icon -->
      <radio-group @change="radioChange">
        <label class="weui-cell weui-check__label" v-for="(item,index) in radioItems" :key="index">
            <radio class="weui-check" :value="item.value" :checked="item.checked" />
            <div class="weui-cell__bd">{{item.name}}</div>
            <div class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
              <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
            </div>
          </label>
      </radio-group>
      <div class="weui-cell weui-cell_link">
        <div class="weui-cell__bd">添加更多</div>
      </div>
    </div>
    <div class="weui-cells__title">复选</div>
    <div class="weui-cells weui-cells_after-title">
      <checkbox-group @change="checkboxChange">
        <label class="weui-cell weui-check__label" v-for="(item,index) in checkboxItems" :key="index">
            <checkbox class="weui-check" :value="item.value" :checked="item.checked" />
            <div class="weui-cell__hd weui-cell__hd_in-checkbox">
              <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon>
              <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon>
            </div>
            <div class="weui-cell__bd">{{item.name}}</div>
          </label>
      </checkbox-group>
      <div class="weui-cell weui-cell_link">
        <div class="weui-cell__bd">add more link</div>
      </div>
    </div>

    <div class="weui-cells__title">表单</div>
    <div class="weui-cells weui-cells_after__title">
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">qq</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="please input qq"></input>
        </div>
      </div>

      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">手机号</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="phone number"></input>
        </div>
        <div class="weui-cell__ft">
          <div class="weui-vcode-btn">验证码</div>
        </div>
      </div>

      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">日期</div>
        </div>
        <div class="weui-cell__bd">
          <picker mode="date" value="date" @change="datechange">
            <div class="weui-input">{{date}}</div>
          </picker>
        </div>
      </div>

      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">时间</div>
        </div>
        <div class="weui-cell__bd">
          <picker mode="time" value="time" @change="timechange">
            <div class="weui-input">{{time}}</div>
          </picker>
        </div>
      </div>

      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">验证码</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="phone number"></input>
        </div>
        <div class="weui-cell__ft">
          <image class="weui-vcode-img" src="/static/images/vcode.jpg" style="width:108px;" />
        </div>
      </div>
    </div>

    <div class="weui-cells__tips">底部说明文字</div>

    <div class="weui-cells__title">表单报错</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_input weui-cell_warn">
        <div class="weui-cell__hd">
          <div class="weui-label">卡号</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="input word"></input>
        </div>
        <div class="weui-cell__ft">
          <icon type="warn" size="23" color="#e64340"></icon>
        </div>
      </div>
    </div>

    <div class="weui-cells__title">开关</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">标题</div>
        </div>
        <div class="weui-cell__ft">
          <switch checked />
        </div>
      </div>
    </div>

    <div class="weui-cells__title">文本框</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_input">
        <input class="weui-input" placeholder="input sth"/>
        </div>
      </div>

      <div class="weui-cells__title">文本域</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__bd">
            <textarea class="weui-textarea" placeholder="input sth" style="height: 3.3em;"/>
            <div class="weui-textarea-counter">0/200</div>
          </div>
        </div>
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <picker :range="contryCodes"  @change="changecontrycode">
              <div class="weui-select">{{contryCodes[contryIndex]}}</div>
            </picker>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="input sth" />
          </div>
        </div>
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__bd">
          <picker @change="weichatchange" :range="accounts">
            <div class="weui-select">{{accounts[accountsIndex]}}</div>
          </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__bd">
          <picker @change="weichatchange" :range="accounts">
            <div class="weui-select">{{accounts[accountsIndex]}}</div>
          </picker>
          </div>
        </div>
      </div>

      <checkbox-group>
      <label class="weui-agree">
        <div class="weui-agree__text">
          <checkbox class="weui-agree__checkbox" id="weuiAgree" value="agree" checked="isagree" />
          <div class="weui-agree__checkbox-icon">
            <icon class="weui-agree__checkbox-icon-check" type="success_no_circle" size="9" v-if="isagree"></icon>
          </div>
          同意并<navigator class="weui-agree__link">xxxx</navigator>
        </div>
      </label>
    </checkbox-group>

    <div class="weui-btn-area">
      <button type="primary" class="weui-btn" >xxx</button>
    </div>

    </div>

    

  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopTips: false,
      radioItems: [{
          name: 'cell standard',
          value: '0'
        },
        {
          name: 'cell standard',
          value: '1',
          checked: true
        }
      ],
      checkboxItems: [{
          name: 'detail',
          value: '0',
          checked: false
        },
        {
          name: 'detail',
          value: '1',
          checked: true
        },
      ],
      time: '09:01',
      date: '2019-01-01',
      contryCodes: ["+86", "+80"],
      contries: ["中国", "美国"],
      contryIndex: 0,
      accounts: ["微信号", "qq"],
      accountsIndex: 0,
      isagree : true
    }
  },
  methods: {
    radioChange(e) {
      let radioItems = this.radioItems;
      for (let i = 0; i < radioItems.length; i++) {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value;
      }
      this.radioItems = radioItems;
    },
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value);
      let checkboxItems = this.checkboxItems;
      // values 包含了当前选中的值
      let values = e.mp.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;
        for (var j = 0; j < values.length; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.checkboxItems = checkboxItems;
    },
    datechange(e) {
      this.date = e.mp.detail.value;
    },
    timechange(e) {
      this.time = e.mp.detail.value;
    },
    changecontrycode(e) {
      this.contryIndex = e.mp.detail.value;
    },

    weichatchange(e) {
      this.accountsIndex = e.mp.detail.value;
    }
  },
}
</script>

<style scoped>
</style>
