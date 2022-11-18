export default {
  companyName: [
    {
      required: true,
      message: "The company name cannot be empty",
      trigger: "blur",
    },
  ],
  mail: [
    {
      required: true,
      message: "Mailbox cannot be empty",
      trigger: "blur",
    },
    { type: "email", message: "Incorrect email format", trigger: "blur" },
  ],
  phone: [
    {
      required: true,
      message: "The phone number cannot be empty",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please fill in the password",
      trigger: "blur",
    },
    {
      type: "string",
      min: 6,
      message: "The password length cannot be less than 6 bits",
      trigger: "blur",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Confirming password is required",
      trigger: "blur",
    },
  ],
  city: [
    {
      required: true,
      message: "Please select the city",
      trigger: "change",
    },
  ],
  firstName: [
    {
      required: true,
      message: "Required field",
      trigger: "blur",
    },
  ],
  lastName: [
    {
      required: true,
      message: "Required field",
      trigger: "blur",
    },
  ],
};
