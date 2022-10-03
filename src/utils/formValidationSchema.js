import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const signupSchema = yup.object().shape({
    name: yup
    .string()
    .min(5, "Name must be at least 5 characters long")
    .required("Your name is required"),
  phoneNo: yup.string()
  .required("Your Phone Number is required")
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(11, 'Must be exactly 11 digits')
  .max(11, 'Must be exactly 11 digits'),
  email: yup.string().email("Please enter a valid email").required("Your Email is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 6 characters long")
    .matches(passwordRules, { message: "Password must have at least: 1 uppercase and 1 digit" })
    .required("You must enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm password"),
});

export const signinSchema = yup.object().shape({
email: yup.string().email("Please enter a valid email").required("Your Email is required"),
password: yup
.string()
.required("You Password is required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});