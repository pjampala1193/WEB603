const mongoose = require('mongoose');
const Inventory = mongoose.model('Inventory');

// CREATE
exports.createInventory = (req, res) => {
  const inventory = new Inventory({
    prodname: req.body.prodname,
    qty: req.body.qty,
    price: req.body.price,
    status: req.body.status
  });

  inventory.save()
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).json({
        message: "Fail!",
        error: err.message
      });
    });
};

// GET ONE
exports.getInventory = (req, res) => {
  Inventory.findById(req.params.id).select('-__v')
    .then(inventory => {
      res.status(200).json(inventory);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving inventory",
        error: err
      });
    });
};

// GET ALL
exports.inventories = (req, res) => {
  Inventory.find().select('-__v')
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).json({
        message: "Error!",
        error: err
      });
    });
};

// DELETE
exports.deleteInventory = (req, res) => {
  Inventory.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({}))
    .catch(err => {
      res.status(500).send({
        message: "Error deleting",
        error: err.message
      });
    });
};

// UPDATE
exports.updateInventory = (req, res) => {
  Inventory.findByIdAndUpdate(
    req.body._id,
    {
      prodname: req.body.prodname,
      qty: req.body.qty,
      price: req.body.price,
      status: req.body.status
    },
    { new: false }
  )
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).send({
        message: "Error updating",
        error: err.message
      });
    });
};