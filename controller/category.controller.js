const models = require("../models/index");

function insertCategory(req, res) {
  let form = req.body;
  models.category.create(form);

  return res.send({ message: "Data has been created", data: form });
}

async function listCategory(req, res) {
  const result = await models.category.findAll();
  if (result.length < 1) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Data is found", data: result });
}

async function detailCategory(req, res) {
  const result = await models.category.findOne({
    where: { id: req.params.id },
  });
  if (!result) {
    return res.status(204).send({ message: "Data is empty" });
  }
  return res.send({ message: "Data is found", data: result });
}

function updateCategory(req, res) {
  let data = req.body;
  models.category.update(data, { where: { id: req.params.id } });

  return res.send({ message: "Data has been updated", data: req.body });
}

function deleteCategory(req, res) {
  models.category.destroy({ where: { id: req.params.id } });
  return res.send({ message: "Data has been deleted" });
}

module.exports = {
  insertCategory,
  listCategory,
  detailCategory,
  updateCategory,
  deleteCategory,
};
