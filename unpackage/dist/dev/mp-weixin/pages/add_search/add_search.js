"use strict";
const common_vendor = require("../../common/vendor.js");
const API_search = require("../../API/search.js");
const _sfc_main = {
  data() {
    return {
      keyword: "",
      list: [],
      type: 1,
      empty: false
    };
  },
  watch: {
    keyword: function(oldVal, newVal) {
      if (!newVal) {
        this.empty = false;
      }
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    handleClearInput() {
      this.keyword = "";
    },
    toFriendDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/make_friends/make_friends?id=${id}`
      });
    },
    async search() {
      if (!this.keyword)
        return;
      const [err, data] = await this.$http({ ...API_search._search, data: {
        key: this.keyword
      } });
      if (data.list.length === 0) {
        this.empty = true;
      }
      this.list = data.list;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.search && $options.search(...args)),
    b: $data.keyword,
    c: common_vendor.o(($event) => $data.keyword = $event.detail.value),
    d: $data.keyword,
    e: common_vendor.o((...args) => $options.handleClearInput && $options.handleClearInput(...args)),
    f: common_vendor.o((...args) => $options.back && $options.back(...args)),
    g: $data.type === 1
  }, $data.type === 1 ? common_vendor.e({
    h: common_vendor.f($data.list, (item, k0, i0) => {
      return common_vendor.e({
        a: item.avatar ? item.avatar : "/static/images/avatar.png",
        b: common_vendor.t(item.nickName),
        c: item.state === 0
      }, item.state === 0 ? {} : {
        d: common_vendor.o(($event) => $options.toFriendDetail(item._id), item._id)
      }, {
        e: item._id
      });
    }),
    i: $data.empty && $data.keyword
  }, $data.empty && $data.keyword ? {} : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/add_search/add_search.vue"]]);
wx.createPage(MiniProgramPage);
