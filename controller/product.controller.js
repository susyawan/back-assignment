const models = require("../models/index");

function insertProduct(req, res) {
  let form = req.body;
  models.product.create(form);

  return res.send({ message: "Data has been created", data: form });
}

async function listProduct(req, res) {
  const result = await models.product.findAll();
  if (result.length < 1) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Data is found", data: result });
}

async function detailProduct(req, res) {
  const result = await models.product.findOne({
    where: { id: req.params.id },
  });
  if (!result) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Data is found", data: result });
}

function updateProduct(req, res) {
  let data = req.body;
  models.product.update(data, { where: { id: req.params.id } });

  return res.send({ message: "Data has been updated", data: req.body });
}

function deleteProduct(req, res) {
  models.product.destroy({ where: { id: req.params.id } });
  return res.send({ message: "Data has been deleted" });
}

module.exports = {
  insertProduct,
  listProduct,
  detailProduct,
  updateProduct,
  deleteProduct,
};
