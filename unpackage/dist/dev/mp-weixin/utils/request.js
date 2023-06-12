"use strict";
const common_vendor = require("../common/vendor.js");
const base_url = "http://localhost:3000";
const http = (obj) => {
  return new Promise((resolve, reject) => {
    if (!obj.hideLoading) {
      common_vendor.index.showLoading({
        title: "加载中"
      });
    }
    common_vendor.index.request({
      url: (base_url + obj.url).trim(),
      method: obj.method || "GET",
      data: obj.data,
      header: {
        "content-type": obj.method === "POST" ? "application/json" : "application/json",
        "Authorization": common_vendor.index.getStorageSync("token")
      },
      success: (res) => {
        common_vendor.index.hideLoading();
        switch (res.statusCode) {
          case 201:
            resolve([null, res.data]);
            break;
          case 400:
            common_vendor.index.showToast({
              title: res.data.message,
              icon: "none"
            });
            break;
          case 401:
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
            break;
          default:
            resolve([null, res.data]);
            break;
        }
        resolve(res);
      },
      fail: (err) => {
        common_vendor.index.hideLoading();
        resolve([err, void 0]);
      }
    });
  });
};
exports.http = http;
