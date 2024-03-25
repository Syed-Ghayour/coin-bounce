import * as yup from "yup";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const errorMessage = "use lowercase, uppercase & digits";

const signupSchema = yup.object({
  name: yup.string().max(30).required("name is required"),
  username: yup.string().min(5).max(30).required("username is required"),
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup
    .string()
    .min(8)
    .max(25)
    .matches(passwordPattern, { errorMessage })
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("password is required"),
});


export default signupSchema;