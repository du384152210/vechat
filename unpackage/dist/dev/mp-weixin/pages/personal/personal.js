"use strict";
const common_vendor = require("../../common/vendor.js");
const API_myApi = require("../../API/myApi.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      detail: {},
      avatar: "",
      gender: ["保密", "男", "女"],
      focus: false,
      nickName: "",
      signature: "",
      birthday: "",
      phone: "",
      phoneReg: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    };
  },
  computed() {
  },
  onLoad() {
  },
  onShow() {
    this.getData();
  },
  methods: {
    // 剪切图片
    async updateAvatar() {
      const img = await utils_util.chooseMedia(["image"], 1);
      const res = await utils_util.uploadFile([img.tempFilePath]);
      this.avatar = res[0];
      this.update("avatar");
    },
    // 预览
    previewImg(url) {
      common_vendor.index.previewImage({
        urls: [url],
        current: url
      });
    },
    // 修改昵称
    showPup(option) {
      this.$refs[option].open();
      this[option] = this.detail[option];
      this.focus = true;
      console.log(this[option]);
    },
    closePup(option) {
      this.$refs[option].close();
      this.focus = false;
    },
    clearInput(str) {
      this[str] = "";
    },
    pupSubmit(option) {
      if (!this[option] || this[option] === this.detail[option])
        return;
      if (option === "phone" && !this.phoneReg.test(this.phone)) {
        return utils_util.showToast("请输入正确的电话号码");
      }
      this.update(option);
    },
    birthdayChange(e) {
      this.birthday = e;
    },
    //-------------------------------api----------------------------------
    async getData() {
      const [err, data] = await this.$http({
        ...API_myApi._my
      });
      data.data.createTime = utils_util.formatDate(data.data.createTime);
      this.detail = data.data;
    },
    async update(option) {
      const [err, data] = await this.$http({
        ...API_myApi._update,
        data: { [option]: this[option] }
      });
      if (data.status === 200) {
        utils_util.showToast(data.message, 1, () => {
          this.$refs[option] && this.$refs[option].close();
          this.getData();
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_uni_popup2 + _easycom_uni_datetime_picker2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.detail.avatar ? $data.detail.avatar : "/static/images/avatar.png",
    b: common_vendor.o(($event) => $options.previewImg($data.detail.avatar)),
    c: common_vendor.o((...args) => $options.updateAvatar && $options.updateAvatar(...args)),
    d: common_vendor.t($data.detail.signature),
    e: common_vendor.o(($event) => $options.showPup("signature")),
    f: common_vendor.t($data.detail.createTime),
    g: common_vendor.t($data.detail.nickName),
    h: common_vendor.o(($event) => $options.showPup("nickName")),
    i: common_vendor.t($data.gender[$data.detail.gender]),
    j: common_vendor.t($data.detail.birthday),
    k: common_vendor.o(($event) => $options.showPup("birthday")),
    l: common_vendor.t($data.detail.phone),
    m: common_vendor.o(($event) => $options.showPup("phone")),
    n: common_vendor.t($data.detail.email),
    o: common_vendor.o(($event) => $options.closePup("nickName")),
    p: $data.nickName && $data.nickName !== $data.detail.nickName ? 1 : "",
    q: common_vendor.o(($event) => $options.pupSubmit("nickName")),
    r: $data.nickName
  }, $data.nickName ? {
    s: common_vendor.o(($event) => $options.clearInput("nickName"))
  } : {}, {
    t: $data.focus,
    v: $data.nickName,
    w: common_vendor.o(($event) => $data.nickName = $event.detail.value),
    x: common_vendor.sr("nickName", "29be9066-0"),
    y: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    z: common_vendor.o(($event) => $options.closePup("birthday")),
    A: $data.birthday && $data.birthday !== $data.detail.birthday ? 1 : "",
    B: common_vendor.o(($event) => $options.pupSubmit("birthday")),
    C: common_vendor.o($options.birthdayChange),
    D: common_vendor.p({
      type: "date",
      value: $data.birthday
    }),
    E: common_vendor.sr("birthday", "29be9066-1"),
    F: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    G: common_vendor.o(($event) => $options.closePup("signature")),
    H: $data.signature && $data.signature !== $data.detail.signature ? 1 : "",
    I: common_vendor.o(($event) => $options.pupSubmit("signature")),
    J: $data.focus,
    K: $data.signature,
    L: common_vendor.o(($event) => $data.signature = $event.detail.value),
    M: common_vendor.sr("signature", "29be9066-3"),
    N: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    O: common_vendor.o(($event) => $options.closePup("phone")),
    P: $data.phone && $data.phone !== $data.detail.phone ? 1 : "",
    Q: common_vendor.o(($event) => $options.pupSubmit("phone")),
    R: $data.phone
  }, $data.phone ? {
    S: common_vendor.o(($event) => $options.clearInput("phone"))
  } : {}, {
    T: $data.focus,
    U: $data.phone,
    V: common_vendor.o(($event) => $data.phone = $event.detail.value),
    W: common_vendor.sr("phone", "29be9066-4"),
    X: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/personal/personal.vue"]]);
wx.createPage(MiniProgramPage);
