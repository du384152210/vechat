"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toSearch && $options.toSearch(...args)),
    b: common_vendor.o((...args) => $options.toChat && $options.toChat(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
