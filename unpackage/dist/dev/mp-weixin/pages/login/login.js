"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_util = require("../../utils/util.js");
const API_loginApi = require("../../API/loginApi.js");
const _sfc_main = {
  data() {
    return {
      email: "admin@g.com",
      password: "admin",
      emailReg: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
    };
  },
  onLoad() {
  },
  methods: {
    toRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    },
    submit() {
      if (!this.email) {
        return utils_util.showToast("请输入邮箱地址！");
      } else if (!this.emailReg.test(this.email)) {
        return utils_util.showToast("请输入正确的邮箱地址！");
      } else if (!this.password) {
        return utils_util.showToast("请输入密码！");
      } else {
        this.login();
      }
    },
    async login() {
      const [err, data] = await this.$http({ ...API_loginApi._login, data: {
        email: this.email,
        password: this.password
      } });
      if (data.status === 200) {
        utils_util.showToast(data.message, 1);
        common_vendor.index.setStorageSync("token", data.token);
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 500);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.email,
    b: common_vendor.o(($event) => $data.email = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    f: common_vendor.o((...args) => $options.toRegister && $options.toRegister(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
