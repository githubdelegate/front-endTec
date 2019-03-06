<template>
  <div class="page">
    <div class="page_hd">
      <div class="page_title">slidr</div>
      <div class="page_desc">slider</div>
    </div>

    <div class="page_bd">
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <div class="weui-uploader">
              <div class="weui-uploader__hd">
                <div class="weui-uploader__title">image uplaoder</div>
                <div class="weui-uploader__info">{{files.length}}/2</div>
              </div>
              <div class="weui-uploader__bd">
                <div class="weui-uploader__files" id="uploadfile">
                  <div v-for="(item,index) in files" :key="index">
                    <div class="weui-uploader__file" @tap="previewImg" :id="item">
                      <image :src="item" class="weui-uploader__img" mode="aspectFill" />
                    </div>
                  </div>

                  <div class="weui-uploader__file">
                    <image class="weui-uploader__img" src="/static/images/pic_160.png" mode="aspectFill" />
                  </div>
                  <div class="weui-uploader__file">
                    <image class="weui-uploader__img" src="/static/images/pic_160.png" mode="aspectFill" />
                  </div>
                  <div class="weui-uploader__file">
                    <image class="weui-uploader__img" src="/static/images/pic_160.png" mode="aspectFill" />
                  </div>
                  <div class="weui-uploader__file">
                    <image class="weui-uploader__img" src="/static/images/pic_160.png" mode="aspectFill" />
                  </div>
                  <div class="weui-uploader__file">
                    <image class="weui-uploader__img" src="/static/images/pic_160.png" mode="aspectFill" />
                  </div>

                  <div class="weui-uploader__file weui-uploader__file_status">
                    <image class="weui-uploader__img" src="/static/images/pic_160.png" mode="aspectFill" />
                    <div class="weui-uploader__file-content">
                      <icon type="warn" size="23" />
                    </div>
                  </div>

                  <div class="weui-uploader__input-box">
                    <div class="weui-uploader__input" @tap="chooseimg"></div>
                  </div>

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
      files: []
    }
  },

  methods: {
    chooseimg () {
      var that = this;
      wx.chooseImage({
        count: '1', //最多可以选择的图片张数,
        success: res => {
          that.files = that.files.concat(res.tempFilePaths)
        }, //返回图片的本地文件路径列表 tempFilePaths,
        fail: () => {
        },
        complete: () => {
          this.files = that.files;
        }
      });
    },
    previewImg (e) {
      wx.previewImage({
        current: e.currentTarget.id,
        urls: this.files //需要预览的图片链接列表,
      });
    }
  },  
}
</script>

<style scoped>

</style>

