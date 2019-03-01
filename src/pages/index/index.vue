<template>
  <div class="page">
    <!-- 头部标题文字 -->
    <div class="page_hd">
      <div class="page_title">UI</div>
      <div class="page_desc">是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</div>
    </div>
    <div class="page_bd page_bd_spacing">
      <div class="kind-list">
        <div v-for="(item, index) in list" :key="index">
          <div class="kind-list_item">
            <div :id=item.id :class="{'kind-list_item_hd_show':item.open}" class="weui-flex,kind-list_item-hd" @click="toggle">
              <div class="weui-flex__item">{{item.name}}</div>
              <img class="kind-list_img" :src="'/static/images/icon_nav_'+item.id+'.png'">
            </div>
            <div :class="{'kind-list_item-bd_show':item.open}" class="kind-list_item-bd">
              <div :class="{'weui-cells_show':item.open}" class="weui-cells">
                <div v-for="(subem,subdex) in item.pages" :key="subdex">
                  <navigator class="weui-cell weui-cell_access" :url="'/pages/'+subem+'/'+'main'+''">
                    <div class="weui-cell__bd">{{subem}}xxxx</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                  </navigator>
                </div>
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
        list: [{
            id: 'form',
            name: '表单',
            open: false,
            pages: ['button', 'list', 'input', 'slider', 'uploader']
          },
          {
            id: 'widget',
            name: '基础组件',
            open: false,
            pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress', 'swiper']
          },
          {
            id: 'feedback',
            name: '操作反馈',
            open: false,
            pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
          },
          {
            id: 'nav',
            name: '导航相关',
            open: false,
            pages: ['navbar', 'tabbar']
          }
        ]
      };
    },
    methods: {
      toggle(e) {
        var id = e.currentTarget.id;
        var list = this.list;
        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
        this.list = list;
      }
    },
  };
</script>

<style scoped>
  .weui-flex {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .weui-cells {
    margin-top: 0;
    opacity: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  /* 表示在cell 前后都不要显示任何元素
  display:none ---不为被隐藏的对象保留其物理空间
  ，即该对象在页面上彻底消失，通俗来说就是看不见也摸不到。
 */
  .weui-cells:after,
  .weui-cells.before {
    display: none;
  }

  .weui-cells_show {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .weui-cell:before{
    right: 15px;
  }

  .kind-list_item {
    margin: 10px 0;
    background-color: #fff;
    border-radius: 2px;
    overflow: hidden;
  }

  .kind-list_item:first-child{
    margin-top: 0;
  }

  .kind-list_img {
    width:30px;
    height: 30px;
  }

  .kind-list_item-hd {
    padding: 20px;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .kind-list_item-hd_show {
    opacity: 0.4;
  }

  .kind-list_item-bd{
    height: 0;
    overflow: hidden;
  }

  .kind-list_item-bd_show {
    height: auto;
  }
</style>
