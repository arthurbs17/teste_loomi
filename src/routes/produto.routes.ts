import { Router } from "express";
import multer from "multer";
import multerConfig from "../configs/multer/multer.config";
import { authenticateToken } from "../middlewares/authenticateToken.middleware";
import { validateShape } from "../middlewares/validateShape.middleware";
import { verifyIfIsCliente } from "../middlewares/verifyIfIsCliente.middleware";
import { CreateProdutoController } from "../modules/produto/useCases/CreateProduto.controller";
import { DeleteProdutoController } from "../modules/produto/useCases/DeleteProduto.controller";
import { DeleteProdutoByIdController } from "../modules/produto/useCases/DeleteProdutoById.controller";
import { GetProdutoByIdController } from "../modules/produto/useCases/GetProdutoById.controller";
import { GetProdutoWithParamsController } from "../modules/produto/useCases/GetProdutoWithParams.controller";
import { UpdateProdutoByCodController } from "../modules/produto/useCases/updateProdutoByCod.controller";
import { UpdateProdutoByIdController } from "../modules/produto/useCases/UpdateProdutoById.controller";
import { UploadImagemProdutoController } from "../modules/produto/useCases/UploadImagemProduto.controller";
import { createProdutoSchema } from "../schemas/createProduto.schema";
import { updateProdutoSchema } from "../schemas/updateProduto.schema";

const produtoRouter = Router();

const createProdutoController = new CreateProdutoController();
const getProdutoWithParamsController = new GetProdutoWithParamsController();
const getProdutoByIdController = new GetProdutoByIdController();
const deleteProdutoController = new DeleteProdutoController();
const deleteProdutoByIdController = new DeleteProdutoByIdController();
const updateProdutoByIdController = new UpdateProdutoByIdController();
const updateProdutoByCodController = new UpdateProdutoByCodController();
const uploadImagemProdutoController = new UploadImagemProdutoController();

const uploadMulter = multer(multerConfig.upload());

produtoRouter.post(
  "/register",
  validateShape(createProdutoSchema),
  authenticateToken,
  verifyIfIsCliente,
  createProdutoController.handle
);

produtoRouter.get(
  "/",
  authenticateToken,
  getProdutoWithParamsController.handle
);

produtoRouter.get(
  "/:produto_id",
  authenticateToken,
  getProdutoByIdController.handle
);

produtoRouter.delete(
  "/delete",
  authenticateToken,
  verifyIfIsCliente,
  deleteProdutoController.handle
);

produtoRouter.delete(
  "/delete/:produto_id",
  authenticateToken,
  verifyIfIsCliente,
  deleteProdutoByIdController.handle
);

produtoRouter.patch(
  "/update",
  validateShape(updateProdutoSchema),
  authenticateToken,
  verifyIfIsCliente,
  updateProdutoByCodController.handle
);

produtoRouter.patch(
  "/update/:produto_id",
  validateShape(updateProdutoSchema),
  authenticateToken,
  verifyIfIsCliente,
  updateProdutoByIdController.handle
);

produtoRouter.post(
  "/upload_imagem/:produto_id",
  authenticateToken,
  verifyIfIsCliente,
  uploadMulter.single("file"),
  uploadImagemProdutoController.handle
);

export { produtoRouter };
