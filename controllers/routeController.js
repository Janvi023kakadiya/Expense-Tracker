const transactionModel = require('../models/transactionModel');
const fs = require('fs');

const defaultController = async (req, res) => {
  console.log("Default Page");
  try {
    const transactionData = await transactionModel.find();
    res.render('index', { transactionData });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error"); 
  }
};

const addController = (req, res) => {
  console.log('Add Transaction Page');
  res.render('addTransaction');
};

const addTransactionController = async (req, res) => {
  const { title, description, amount, category, date, paymentMethod, transactionType } = req.body;
  let path = null; // Or a default path 

  if (req.file) {
    path = req.file.path;
  }

  // Validate required fields BEFORE attempting to save
  if (!paymentMethod || !transactionType) { 
    return res.status(400).send("paymentMethod and transactionType are required fields."); 
  }

  try {
    const transaction = new transactionModel({
      title,
      amount,
      category,
      date,
      description,
      path,
      paymentMethod, 
      transactionType, 
    });

    await transaction.save();
    console.log('Data Added.');
    res.redirect('/'); 
  } catch (error) {
    console.error("Error adding transaction:", error);
    if (path && fs.existsSync(path)) { 
      fs.unlink(path, (err) => {
        
        if (err) {
          console.error("Error deleting uploaded image after database error:", err);
        } 
      });
    }

    res.status(500).send("Internal Server Error"); 
  }
};

const editController = async (req, res) => {
  try {
    const transactionData = await transactionModel.findById(req.params.id);
    console.log("Data Found.");
    res.render('editTransaction', { transactionData });
  } catch (error) {
    console.error("Error fetching data for edit:", error);
    res.status(500).send("Internal Server Error");
  }
};

const editTransactionController = async (req, res) => {
  const { title, description, amount, category, date, paymentMethod, transactionType } = req.body;
  let path = req.body.existingPath || null; 

  if (req.file) {
    path = req.file.path; 
    if (req.body.existingPath) {
      fs.unlink(req.body.existingPath, (err) => {
        if (err) {
          console.error("Error deleting previous image:", err);
        }
      });
    }
  }

  try {
    const data = {
      title,
      amount,
      category,
      date,
      description,
      path: path, 
      paymentMethod, 
      transactionType, 
    };

    await transactionModel.findByIdAndUpdate(req.params.id, data);
    console.log('Data Updated.');
    res.redirect('/');

  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).send("Internal Server Error"); 
  }
};


const deleteController = async (req, res) => {
  try {
    const deletedData = await transactionModel.findById(req.params.id);
    const localDelete = deletedData.path;

    if (localDelete) { 
      fs.unlink(localDelete, (err) => {
        if (err) {
          console.error("Error deleting image:", err); 
        } else {
          console.log('Image Deleted From Local Storage.');
        }
      });
    }

    await transactionModel.findByIdAndDelete(req.params.id);
    console.log('Data Deleted.');
    res.redirect('/');

  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).send("Internal Server Error"); 
  }
};

module.exports = {
  default: defaultController,
  add: addController,
  addTransaction: addTransactionController,
  edit: editController,
  editTransaction: editTransactionController,
  delete: deleteController,
};
