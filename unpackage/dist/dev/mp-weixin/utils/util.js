"use strict";
const common_vendor = require("../common/vendor.js");
const formatDate = (d) => {
  let time = new Date(d);
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let Y = time.getFullYear();
  let M = time.getMonth() + 1;
  let D = time.getDate();
  return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
};
const uploadFile = async (files) => {
  let i = 0;
  let resList = [];
  while (i < files.length) {
    common_vendor.wx$1.showLoading({
      title: "加载中"
    });
    console.log(files);
    let a = await new Promise((resolve, reject) => {
      console.log(files[i]);
      common_vendor.wx$1.uploadFile({
        url: "http://localhost:3000/upload",
        filePath: files[i],
        name: "file",
        success(res) {
          ++i;
          console.log(res);
          resList.push(JSON.parse(res.data).src);
          resolve(i);
        },
        fail(error) {
          reject(error);
        },
        complete() {
        }
      });
    });
    i = a;
  }
  common_vendor.index.hideLoading({
    success: (res) => {
      common_vendor.index.showToast({
        title: "上传成功"
      });
    }
  });
  return resList;
};
const showToast = (title, type, callback) => {
  common_vendor.index.showToast({
    title,
    icon: !type ? "none" : "",
    success: () => {
      if (callback && typeof callback === "function") {
        setTimeout(() => {
          callback();
        }, 500);
      }
    }
  });
};
exports.formatDate = formatDate;
exports.showToast = showToast;
exports.uploadFile = uploadFile;
