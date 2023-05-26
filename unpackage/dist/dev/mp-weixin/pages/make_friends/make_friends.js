"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      animationData: {},
      animationData2: {},
      animationData3: {},
      animationData4: {}
    };
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.back && $options.back(...args)),
    b: $data.animationData2,
    c: common_vendor.o(($event) => $options.addFriendAnimation("up")),
    d: $data.animationData3,
    e: common_vendor.o(($event) => $options.addFriendAnimation("down")),
    f: $data.animationData,
    g: $data.animationData4
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e19be651"], ["__file", "G:/personal/HBuilderProject/vechat/pages/make_friends/make_friends.vue"]]);
wx.createPage(MiniProgramPage);
