import * as yup from "yup";

export const updateProdutoSchema = yup.object().shape({
  nome: yup.string(),
  preco: yup.string(),
  codigo: yup.string(),
  caracteristicas: yup.string(),
});
