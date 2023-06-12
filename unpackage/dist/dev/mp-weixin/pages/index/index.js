"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      animationData: {},
      isShow: false
    };
  },
  onLoad() {
  },
  onHide() {
    this.hideAdd();
  },
  methods: {
    toSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    },
    toChat() {
      common_vendor.index.navigateTo({
        url: "/pages/chat/chat"
      });
    },
    showAdd() {
      this.isShow = true;
      this.addFriendAnimation("show");
    },
    hideAdd() {
      this.isShow = false;
      this.addFriendAnimation("hide");
    },
    toAddFriendPage() {
      common_vendor.index.navigateTo({
        url: "/pages/add_search/add_search"
      });
    },
    addFriendAnimation(type) {
      let animation = this.initAnimation(0);
      if (type === "show") {
        animation.scale(1).step();
      } else {
        animation.scale(0).step();
      }
      this.animationData = animation.export();
    },
    initAnimation(delay) {
      return common_vendor.index.createAnimation({
        duration: 300,
        timingFunction: "ease",
        delay
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow
  }, $data.isShow ? {
    b: common_vendor.o((...args) => $options.hideAdd && $options.hideAdd(...args))
  } : {}, {
    c: common_vendor.o((...args) => $options.toSearch && $options.toSearch(...args)),
    d: common_vendor.o((...args) => $options.showAdd && $options.showAdd(...args)),
    e: common_vendor.o((...args) => $options.toAddFriendPage && $options.toAddFriendPage(...args)),
    f: $data.animationData,
    g: common_vendor.o((...args) => $options.toChat && $options.toChat(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
