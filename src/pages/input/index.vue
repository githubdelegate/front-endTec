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
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopTips: false,
      radioItems: [
        {
          name: 'cell standard',
          value: '0'
        },
        {
          name: 'cell standard',
          value: '1',
          checked: true
        }
      ],
      checkboxItems: [
        {name: 'detail', value: '0', checked: false},
        {name: 'detail', value: '1', checked: true},
      ],
      time: '09:01',
      date: '2019-01-01',
      contryCodes: ["+86","+80"],
      contries: ["中国","美国"],
      contryIndex: 0,
      accounts: ["微信号","qq"],
      accountsIndex: 0,
    }
  },
  methods: {
    radioChange(e){
      let radioItems = this.radioItems;
      for (let i= 0; i < radioItems.length;i++){
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value;
      }
      this.radioItems = radioItems;
    },
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value);
      var checkboxItems = this.checkboxItems;
      var values = e.mp.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.checkboxItems = checkboxItems;
    }
  },
}
</script>

<style scoped>
</style>

