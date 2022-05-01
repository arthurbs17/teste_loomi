import * as yup from "yup";
import bcrypt from "bcrypt";

export const updateClienteSchema = yup.object().shape({
  nome: yup.string(),
  email: yup.string().email(),
  senha: yup.string().transform((pwd) => bcrypt.hashSync(pwd, 10)),
  telefone: yup.string(),
  endereco: yup.string(),
});
