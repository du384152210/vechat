"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      emailCheck: false,
      showPassword: false,
      email: "",
      password: "",
      emailReg: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
    };
  },
  methods: {
    onEmailBlur() {
      this.emailCheck = this.emailReg.test(this.email);
    },
    changePasType() {
      this.showPassword = !this.showPassword;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.onEmailBlur && $options.onEmailBlur(...args)),
    b: $data.email,
    c: common_vendor.o(($event) => $data.email = $event.detail.value),
    d: !$data.emailCheck
  }, !$data.emailCheck ? {} : {}, {
    e: !$data.showPassword ? "password" : "text",
    f: $data.password,
    g: common_vendor.o(($event) => $data.password = $event.detail.value),
    h: !$data.showPassword
  }, !$data.showPassword ? {
    i: common_vendor.o((...args) => $options.changePasType && $options.changePasType(...args))
  } : {
    j: common_vendor.o((...args) => $options.changePasType && $options.changePasType(...args))
  }, {
    k: $data.emailCheck && $data.password ? 1 : ""
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
