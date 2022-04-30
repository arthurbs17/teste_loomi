import * as yup from "yup";
import bcrypt from "bcrypt";

export const createUserSchema = yup.object().shape({
  email: yup.string().email().required("email is a required field"),
  senha: yup
    .string()
    .required("senha is a required field")
    .transform((pwd) => bcrypt.hashSync(pwd, 10)),
});
