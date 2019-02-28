<template>
  <div></div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
            id: 'ferm',
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
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
  
  .userinfo-nickname {
    color: #aaa;
  }
  
  .usermotto {
    margin-top: 150px;
  }
  
  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }
  
  .all {
    width: 7.5rem;
    height: 1rem;
    background-color: blue;
  }
  
  .all:after {
    display: block;
    content: "";
    clear: both;
  }
  
  .left {
    float: left;
    width: 3rem;
    height: 1rem;
    background-color: red;
  }
  
  .right {
    float: left;
    width: 4.5rem;
    height: 1rem;
    background-color: green;
  }
</style>
