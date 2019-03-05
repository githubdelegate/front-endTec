<template>
  <div class="page">
    <div class="page_hd">
      <div class="page_title">UI</div>
      <div class="page_desc">是一套同微信原生视觉体验一致的基础样式</div>
    </div>
    <div class="page_bd page_bd_spacing">
      <div class="kind-list">
        <div v-for="(item, index) in list" :key="index">
          <!-- 主目录 -->
          <div class="kind-list_item">
            <div :id=item.id :class="{'kind-list_item-hd_show':item.open}" class="weui-flex,kind-list_item-hd" @click="toggle">
              <div class="weui-flex__item">{{item.name}}</div>
              <img class="kind-list_img" :src="'/static/images/icon_nav_'+item.id+'.png'">
            </div>
          </div>
          <!-- 子标题目录 -->
          <div :class="{'kind-list_item-bd_show':item.open}" class="kind-list_item-bd">
            <div :class="{'weui-cells_show':item.open}" class="weui-cells">
              <div v-for="(subitem,subindex) in item.pages" :key="subindex">
                <navigator class="weui-cell weui-cell_access" :url="'/pages/'+ subitem +'/main'">
                  <div class="weui-cell__bd">{{subitem}}</div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "form",
          name: "表单",
          open: false,
          pages: ["button","list","input","slider"]
        }
      ]
    }
  },
  methods: {
    toggle(e){
      var id = e.currentTarget.id;
      var list = this.list;
      for (var i = 0, len = list.length; i < len; i++){
        if (id === list[i].id) {
          list[i].open = !list[i].open;
        }
      }
    }
  },  
}
</script>

<style scoped>
.kind-list_item {
  margin: 10px 0;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
}

.kind-list_item:first-child{
  margin-top: 0;
}

.kind-list_item-hd {
  padding: 20px;
  transition: opacity 0.3s;
}

.kind-list_item-hd_show {
  opacity: 0.4;
}

.weui-flex{
  align-items: center;
}

.kind-list_img {
  width: 30px;
  height: 30px;
}

/* 子目录 */
.kind-list_item-bd {
  height: 0;
  overflow: hidden;
}

.kind-list_item-bd_show {
  height: auto;
}
.weui-cells {
  margin-top: 0;
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.3s;
}
.weui-cells:after, .weui-cells:before {
  display: none;
}

.weui-cells_show {
  opacity: 1;
  transform: translateY(0);
}

.weui-cell:before {
  right: 15px;
}
</style>
