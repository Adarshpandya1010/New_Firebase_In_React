import * as yup from "yup";

export const signUp = () => {
  const validations = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Minimum 3 characters are required")
      // .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed.")
      .required("company Name is required."),
    LastName: yup
      .string()
      .min(3, "Minimum 3 characters are required")
      .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed.")
      .required("Employer Name is required."),
    // email: yup
    //   .string()
    //   .email("Please enter a valid email address.")
    //   .required("Email is required."),
    contact: yup
      .number()
      .required("Contact number is required.")
      .typeError("Only numbers are allowed.")
      .positive("Negative numbers are not allowed.")
      .integer("Phone can't contain a decimal.")
      .min(1000000000, "Minimum 10 digits are required.")
      .max(9999999999, "Maximum 10 digits are allowed."),
  });

  return validations;
};

export const login = () => {
  const validations = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    password: yup
      .string()
      .min(8, "Minimum Password length is 8.")
      .max(16, "Maximum Password length is 16")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain atleast a capital letter, a lowercase letter, a number and a special character."
      )
      .required("Password is required."),
  });

  return validations;
};
