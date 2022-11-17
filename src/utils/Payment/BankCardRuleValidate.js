const currentYear = new Date().getFullYear();
const bankCardNumVal = (rule, value, callback) => {
  if (value.length < 12 || value.length > 20) {
    callback(new Error("请输入正确位数的银行卡账号"));
    return;
  }
  callback();
  //通过输入的卡号匹配显示对应的银行卡的icon 如果银行卡号输入错误就提示输入错误
};
const bankCardYearVal = (rule, value, callback) => {
  if (value < currentYear || value > currentYear + 20) {
    callback(new Error("输入的年份无效"));
  }
  callback();
};
const bankCardCvcVal = (rule, value, callback) => {
  if (value.toString().length < 3) {
    callback(new Error("请输入3-4位的CVC码"));
  }
  callback();
};

export default {
  bankCardNum: [
    { required: true, message: "请输入银行卡账号", trigger: "blur" },
    { validator: bankCardNumVal, trigger: "blur" },
  ],
  bankCardExpirationYear: [
    {
      required: true,
      type: "number",
      trigger: "blur",
    },
    { validator: bankCardYearVal, trigger: "blur" },
  ],
  monthList: [
    {
      required: true,
      message: "请选择银行卡到期的月份",
      trigger: "change",
    },
  ],
  cvc: [
    { required: true, type: "number", trigger: "blur" },
    {
      validator: bankCardCvcVal,
      trigger: "blur",
    },
  ],
  bankCardHolder: [{ required: true, type: "string", trigger: "blur" }],
  city: [{ required: true, type: "string", trigger: "change" }],
};
