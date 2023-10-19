const express = require ('express')
const router = express.Router()
const product = require ("../controllers/books.controller")

router.get("/", product.showProduct);
router.post("/", product.addProduct);
router.post("/delete", product.deleteProduct);
router.post("/edit", product.editProduct);

module.exports = router;