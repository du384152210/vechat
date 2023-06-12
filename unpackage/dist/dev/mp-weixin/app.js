"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const utils_request = require("./utils/request.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/register/register.js";
  "./pages/login/login.js";
  "./pages/chat/chat.js";
  "./pages/search/search.js";
  "./pages/make_friends/make_friends.js";
  "./pages/personal/personal.js";
  "./pages/add_search/add_search.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/personal/HBuilderProject/vechat/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$http = utils_request.http;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
