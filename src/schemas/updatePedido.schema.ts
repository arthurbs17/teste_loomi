import * as yup from "yup";

export const updatePedidoSchema = yup.object().shape({
  status: yup.string().required("status is required for att pedido"),
});
