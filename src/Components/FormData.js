import { validate } from "./validations.js";

export const formData = {
  username: {
    id: "1",
    type: "text",
    name: "Username",
    placeholder: "Enter Username",
    value: "",
    validations: {
      required: true,
      minLength: 3,
    },
    errors: [],
  },
  password: {
    id: "2",
    type: "password",
    name: "Password",
    placeholder: "Enter Password",
    value: "",
    validations: {
      required: true,
      minLength: 6,
    },
    errors: [],
  },
  confirmPassword: {
    id: "3",
    type: "password",
    name: "Confirm Password",
    placeholder: "Confirm password here",
    value: "",
    validations: {
      required: true,
      matching: true,
    },
    errors: [],
  },
  first_name: {
    id: "1",
    type: "text",
    name: "First Name",
    placeholder: "Enter First Name",
    value: "",
    validations: {
      required: true,
      minLength: 2,
    },
    errors: [],
  },
  last_name: {
    id: "1",
    type: "text",
    name: "Last Name",
    placeholder: "Enter Last Name",
    value: "",
    validations: {
      required: true,
      minLength: 2,
    },
    errors: [],
  },
  email: {
    id: "4",
    type: "email",
    name: "Email",
    placeholder: "Enter email",
    value: "",
    validations: {
      required: true,
      //eslint-disable-next-line
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    errors: [],
  },
  phoneNumber: {
    id: "6",
    type: "numbers",
    name: "phoneNumber",
    placeholder: "Enter your phone number here",
    value: "",
    validations: {
      required: true,
      minLength: 9,
    },
    errors: [],
  },
  address: {
    id: "7",
    type: "text",
    name: "Address",
    placeholder: "Enter your address here",
    value: "",
    validations: {
      required: true,
      minLength: 3,
    },
    errors: [],
  },
  age: {
    id: "8",
    type: "number",
    name: "Age",
    placeholder: "Enter your age here",
    value: "",
    validations: {
      required: true,
      minLength: 2,
    },
    errors: [],
  },
};
export function inputsHandler({ target: { name, value } }, setData, data) {
  data[name].value = value;
  data[name].errors = validate(name, value, data[name].validations, data);
  setData({ ...data });
  if (data[name].errors.length > 0) return false;
  return true;
}

export function validateForm(setData, data) {
  let notValid = false;
  for (let input in data) {
    data[input].errors = validate(
      input,
      data[input].value,
      data[input].validations,
      data
    );
    if (data[input].errors.length) {
      notValid = true;
    }
  }
  setData({ ...data });
  return notValid;
}
