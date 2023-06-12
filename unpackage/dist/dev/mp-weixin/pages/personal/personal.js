"use strict";
const common_vendor = require("../../common/vendor.js");
const API_myApi = require("../../API/myApi.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      url: "",
      detail: {},
      gender: ["保密", "男", "女"],
      foucus: false,
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
    // 修改图像
    updateAvatar() {
      common_vendor.index.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        maxDuration: 30,
        camera: "back",
        success: (res) => {
          console.log(res);
          this.url = res.tempFiles[0].tempFilePath;
        }
      });
    },
    onok(ev) {
      this.url = "";
      this.path = ev.path;
      console.log(ev.path);
      utils_util.uploadFile([ev.path]);
    },
    oncancel() {
      this.url = "";
    },
    // 修改昵称
    showPup(option) {
      this.$refs[option].open();
      this[option] = this.detail[option];
      console.log(this[option]);
    },
    closePup(option) {
      this.$refs[option].close();
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
          this.$refs[option].close();
          this.getData();
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_ksp_cropper2 = common_vendor.resolveComponent("ksp-cropper");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_ksp_cropper2 + _easycom_uni_popup2 + _easycom_uni_datetime_picker2)();
}
const _easycom_ksp_cropper = () => "../../uni_modules/ksp-cropper/components/ksp-cropper/ksp-cropper.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_ksp_cropper + _easycom_uni_popup + _easycom_uni_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.detail.avatar ? $data.detail.avatar : "/static/images/avatar.png",
    b: common_vendor.o((...args) => $options.updateAvatar && $options.updateAvatar(...args)),
    c: common_vendor.t($data.detail.signature),
    d: common_vendor.o(($event) => $options.showPup("signature")),
    e: common_vendor.t($data.detail.createTime),
    f: common_vendor.t($data.detail.nickName),
    g: common_vendor.o(($event) => $options.showPup("nickName")),
    h: common_vendor.t($data.gender[$data.detail.gender]),
    i: common_vendor.t($data.detail.birthday),
    j: common_vendor.o(($event) => $options.showPup("birthday")),
    k: common_vendor.t($data.detail.phone),
    l: common_vendor.o(($event) => $options.showPup("phone")),
    m: common_vendor.t($data.detail.email),
    n: common_vendor.o($options.oncancel),
    o: common_vendor.o($options.onok),
    p: common_vendor.p({
      mode: "free",
      width: 200,
      height: 140,
      maxWidth: 1024,
      maxHeight: 1024,
      url: $data.url
    }),
    q: common_vendor.o(($event) => $options.closePup("nickName")),
    r: $data.nickName && $data.nickName !== $data.detail.nickName ? 1 : "",
    s: common_vendor.o(($event) => $options.pupSubmit("nickName")),
    t: $data.nickName
  }, $data.nickName ? {
    v: common_vendor.o(($event) => $options.clearInput("nickName"))
  } : {}, {
    w: $data.nickName,
    x: common_vendor.o(($event) => $data.nickName = $event.detail.value),
    y: common_vendor.sr("nickName", "29be9066-1"),
    z: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    A: common_vendor.o(($event) => $options.closePup("birthday")),
    B: $data.birthday && $data.birthday !== $data.detail.birthday ? 1 : "",
    C: common_vendor.o(($event) => $options.pupSubmit("birthday")),
    D: common_vendor.o($options.birthdayChange),
    E: common_vendor.p({
      type: "date",
      value: $data.birthday
    }),
    F: common_vendor.sr("birthday", "29be9066-2"),
    G: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    H: common_vendor.o(($event) => $options.closePup("signature")),
    I: $data.signature && $data.signature !== $data.detail.signature ? 1 : "",
    J: common_vendor.o(($event) => $options.pupSubmit("signature")),
    K: $data.foucus,
    L: $data.signature,
    M: common_vendor.o(($event) => $data.signature = $event.detail.value),
    N: common_vendor.sr("signature", "29be9066-4"),
    O: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    P: common_vendor.o(($event) => $options.closePup("phone")),
    Q: $data.phone && $data.phone !== $data.detail.phone ? 1 : "",
    R: common_vendor.o(($event) => $options.pupSubmit("phone")),
    S: $data.phone
  }, $data.phone ? {
    T: common_vendor.o(($event) => $options.clearInput("phone"))
  } : {}, {
    U: $data.phone,
    V: common_vendor.o(($event) => $data.phone = $event.detail.value),
    W: common_vendor.sr("phone", "29be9066-5"),
    X: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "G:/personal/HBuilderProject/vechat/pages/personal/personal.vue"]]);
wx.createPage(MiniProgramPage);
