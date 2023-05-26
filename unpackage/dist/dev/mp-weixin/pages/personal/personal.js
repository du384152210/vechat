"use strict";
const common_vendor = require("../../common/vendor.js");
const API_myApi = require("../../API/myApi.js");
const _sfc_main = {
  data() {
    return {
      url: ""
    };
  },
  onLoad() {
  },
  methods: {
    updateAvatar() {
      common_vendor.index.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: (res) => {
          console.log(res);
          this.url = res.tempFiles[0].tempFilePath;
        }
      });
    },
    onok(ev) {
      this.url = "";
      this.path = ev.path;
    },
    oncancel() {
      this.url = "";
    },
    async getData() {
      const [err, data] = await this.$http({ ...API_myApi._my, data: {
        email: "jack@qq.com"
      } });
      console.log(data);
    }
  }
};
if (!Array) {
  const _easycom_ksp_cropper2 = common_vendor.resolveComponent("ksp-cropper");
  _easycom_ksp_cropper2();
}
const _easycom_ksp_cropper = () => "../../uni_modules/ksp-cropper/components/ksp-cropper/ksp-cropper.js";
if (!Math) {
  _easycom_ksp_cropper();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.updateAvatar && $options.updateAvatar(...args)),
    b: common_vendor.o($options.oncancel),
    c: common_vendor.o($options.onok),
    d: common_vendor.p({
      mode: "free",
      width: 200,
      height: 140,
      maxWidth: 1024,
      maxHeight: 1024,
      url: $data.url
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6ae23533"], ["__file", "G:/personal/HBuilderProject/vechat/pages/personal/personal.vue"]]);
wx.createPage(MiniProgramPage);
