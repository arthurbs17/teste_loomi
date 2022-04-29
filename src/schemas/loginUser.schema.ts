import * as yup from "yup";

const loginUserSchema = yup.object().shape({
  email: yup.string().email().required("email is a required field"),
  senha: yup.string().required("senha is a required field"),
});
