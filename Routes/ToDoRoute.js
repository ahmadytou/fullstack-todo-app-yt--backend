const { Router } = require("express");
const { getTodo, savToDo, updateTodo, deleteTodo } = require("../Controller/ToDoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", savToDo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
