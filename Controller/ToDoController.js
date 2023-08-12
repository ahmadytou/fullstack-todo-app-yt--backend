const ToDoModel = require("../Models/ToDoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.savToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated SuccessFully"))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted SuccessFully"))
    .catch((err) => console.log(err));
};
