import * as yup from "yup";
import bcrypt from "bcrypt";

export const createClienteSchema = yup.object().shape({
  nome: yup.string().required("nome is a required field"),
  email: yup.string().email().required("email is a required field"),
  senha: yup
    .string()
    .required("senha is a required field")
    .transform((pwd) => bcrypt.hashSync(pwd, 10)),
  telefone: yup.string(),
  endereco: yup.string().required("endereço is a required field"),
});
