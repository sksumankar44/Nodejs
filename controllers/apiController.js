var Todos = require("../models/todoModel");
var bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos/:uname", function (req, res) {
    // Todos.find({ username: req.params.uname }, function (err, todos) {
    //   if (err) throw err;

    //   res.send(todos);
    Todos.find({ username: req.params.uname })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.get("/api/todo/:id", function (req, res) {
    Todos.findById({ _id: req.params.id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.post("/api/todo", function (req, res) {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      })
        .then((result) => {
          res.send("Success");
        })
        .catch((err) => {
          res.send(err);
        });
      //   Todos.findByIdAndUpdate(
      //     req.body.id,
      //     {
      //       todo: req.body.todo,
      //       isDone: req.body.isDone,
      //       hasAttachment: req.body.hasAttachment,
      //     },
      //     function (err, todo) {
      //       if (err) throw err;
      //       res.send("Success");
      //     }
      //   );
    } else {
      var newTodo = Todos({
        username: "test",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
      //   newTodo.save(function (err) {
      //     if (err) throw err;
      //     res.send("Success");
      //   });

      newTodo
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });

  app.delete("/api/todo", function (req, res) {
    // Todos.findByIdAndRemove(req.body.id, function (err) {
    //   if (err) throw err;
    //   res.send("Success");

    Todos.findByIdAndDelete(req.body.id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
