import * as yup from "yup";

export const createProdutoSchema = yup.object().shape({
  nome: yup.string().required("nome is a required field"),
  preco: yup.string().required("preço is a required field"),
  codigo: yup.string().required("codigo is a required field"),
  caracteristicas: yup.string().required("caracteristicas is a required field"),
});
