"use strict";
const common_vendor = require("../../common/vendor.js");
const API_friendApi = require("../../API/friendApi.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      userId: "",
      detail: {},
      msg: "",
      animationData: {},
      animationData2: {},
      animationData3: {},
      animationData4: {}
    };
  },
  onLoad(option) {
    this.userId = option.id;
    this.getDetail();
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    addFriendAnimation(type) {
      let animation = this.initAnimation(0);
      let animation2 = this.initAnimation(0);
      let animation3 = this.initAnimation(300);
      let animation4 = this.initAnimation(0);
      if (type === "up") {
        animation.bottom(0).step();
        animation2.opacity(0).step();
        animation3.opacity(1).step();
        animation4.backgroundColor("rgba(255,228,49,.6)").step();
      } else {
        animation.bottom("-100%").step();
        animation2.opacity(1).step();
        animation3.opacity(0).step();
        animation4.backgroundColor("rgba(255,228,49,0)").step();
      }
      this.animationData = animation.export();
      this.animationData2 = animation2.export();
      this.animationData3 = animation3.export();
      this.animationData4 = animation4.export();
    },
    initAnimation(delay) {
      return common_vendor.index.createAnimation({
        duration: 500,
        timingFunction: "ease",
        delay
      });
    },
    handleSend() {
      if (!this.msg) {
        return utils_util.showToast("请输入内容");
      } else {
        this.apply();
      }
    },
    //----------------------api---------------------
    async getDetail() {
      const [err, data] = await this.$http({ ...API_friendApi._detail, data: {
        id: this.userId
      } });
      this.detail = data.detail;
    },
    async apply() {
      const [err, data] = await this.$http({ ...API_friendApi._apply, data: {
        fid: this.userId,
        msg: this.msg
      } });
      if (data.status === 200) {
        utils_util.showToast(data.message, 1, () => {
          this.msg = "";
          this.addFriendAnimation("down");
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.detail.avatar ? $data.detail.avatar : "/static/images/avatar.png",
    b: common_vendor.o((...args) => $options.back && $options.back(...args)),
    c: $data.detail.avatar ? $data.detail.avatar : "/static/images/avatar.png",
    d: $data.detail.gender === 1
  }, $data.detail.gender === 1 ? {} : {}, {
    e: $data.detail.gender === 2
  }, $data.detail.gender === 2 ? {} : {}, {
    f: $data.detail.gender === 2 ? 1 : "",
    g: $data.detail.gender === 1 ? 1 : "",
    h: $data.animationData2,
    i: common_vendor.t($data.detail.nickName),
    j: common_vendor.t($data.detail.email),
    k: common_vendor.t($data.detail.signature ? $data.detail.signature : ""),
    l: common_vendor.o(($event) => $options.addFriendAnimation("up")),
    m: $data.detail.avatar ? $data.detail.avatar : "/static/images/avatar.png",
    n: $data.animationData3,
    o: common_vendor.t($data.detail.nickName),
    p: $data.msg,
    q: common_vendor.o(($event) => $data.msg = $event.detail.value),
    r: common_vendor.o(($event) => $options.addFriendAnimation("down")),
    s: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args)),
    t: $data.animationData,
    v: $data.animationData4
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e19be651"], ["__file", "G:/personal/HBuilderProject/vechat/pages/make_friends/make_friends.vue"]]);
wx.createPage(MiniProgramPage);
