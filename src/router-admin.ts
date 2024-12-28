import express from "express";
const routerAdmin = express.Router();
import motoController from "./controllers/moto.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** Restaurant */
routerAdmin.get("/", motoController.goHome);

routerAdmin
  .get("/login", motoController.getLogin)
  .post("/login", motoController.processLogin);

routerAdmin
  .get("/signup", motoController.getSignup)
  .post(
    "/signup",
   // makeUploader("members").single("memberImage"),
    motoController.processSignup
  );

routerAdmin.get("/logout", motoController.logOut);

routerAdmin.get("/check-me", motoController.checkAuthSession);

/** Product */

routerAdmin.get(
  "/product/all",
  motoController.verifyMoto,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  motoController.verifyMoto,
  //  uploadProductImage.single('productImage'),
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  motoController.verifyMoto,
  productController.updateChosenProduct
);

/** User */

routerAdmin.get(
  "/user/all",
  motoController.verifyMoto,
  motoController.getUsers
);
routerAdmin.post(
  "/user/edit",
  motoController.verifyMoto,
  motoController.updateChosenUser
);

export default routerAdmin;
