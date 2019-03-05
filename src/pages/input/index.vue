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
      <div appear-active-class=""></div>
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
        {name: 'detail', value: '0', checked: true},
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
        radioItems[i].checked = radioItems[i].value == e.mp.detail.value;
      }
      this.radioItems = radioItems;
    }
  },
}
</script>

<style scoped>
</style>

