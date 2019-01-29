const express = require("express");
const app = express();
const Animal = require("./models/Animals");
const Food = require("./models/Foods");
const Furniture = require("./models/Furniture");
const Nature = require("./models/Nature");
const Technology = require("./models/Technology");
const Transport = require("./models/Transport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const async = require("async");
const ejs = require("ejs");
const fs = require("fs");
// mongoose.connect(
//   "mongodb://sanjai:sanjai@localhost/ThreeDmodels?authSource=admin",
//   { useNewUrlParser: true }
// );
mongoose.connect(
  "mongodb://model:Sanjai1@ds257314.mlab.com:57314/3dmodels",
  { useNewUrlParser: true }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  let Animals, Foods, Furnitures, Natures, Technologies, Transports;
  async.parallel(
    [
      cb => {
        Animal.find({}, (err, result) => {
          if (err) console.log(err.message);
          else {
            Animals = result;
            cb();
          }
        });
      },
      cb => {
        Food.find({}, (err, result) => {
          if (err) console.log(err.message);
          else {
            Foods = result;
            cb();
          }
        });
      },
      cb => {
        Furniture.find({}, (err, result) => {
          if (err) console.log(err.message);
          else {
            Furnitures = result;
            cb();
          }
        });
      },
      cb => {
        Nature.find({}, (err, result) => {
          if (err) console.log(err.message);
          else {
            Natures = result;
            cb();
          }
        });
      },
      cb => {
        Technology.find({}, (err, result) => {
          if (err) console.log(err.message);
          else {
            Technologies = result;
            cb();
          }
        });
      },
      cb => {
        Transport.find({}, (err, result) => {
          if (err) console.log(err.message);
          else {
            Transports = result;
            cb();
          }
        });
      }
    ],
    err => {
      if (err) console.log(err.message);
      else {
        // const categories = [
        //   Animals,
        //   Foods,
        //   Furnitures,
        //   Natures,
        //   Technologies,
        //   Transports
        // ];

        res.render("index", {
          Animals,
          Foods,
          Furnitures,
          Natures,
          Technologies,
          Transports
        });
      }
    }
  );
});
app.get("/furnitures", (req, res) => {
  Furniture.find({}, (err, results) => {
    if (err) {
      console.log(err.message);
      res.redirect("/");
    } else {
      // console.log(JSON.stringify(result));
      // console.log(result);
      const compile = ejs.compile(
        fs.readFileSync(__dirname + "/views/partials/models.ejs", "utf8")
      );
      const html = compile({ results });
      // console.log(html);
      res.send(html);
    }
  });
});
app.get("/natures", (req, res) => {
  Nature.find({}, (err, results) => {
    if (err) {
      console.log(err.message);
      res.redirect("/");
    } else {
      const compile = ejs.compile(
        fs.readFileSync(__dirname + "/views/partials/models.ejs", "utf8")
      );
      const html = compile({ results });
      res.send(html);
    }
  });
});
app.get("/technologies", (req, res) => {
  Technology.find({}, (err, results) => {
    if (err) {
      console.log(err.message);
      res.redirect("/");
    } else {
      const compile = ejs.compile(
        fs.readFileSync(__dirname + "/views/partials/models.ejs", "utf8")
      );
      const html = compile({ results });
      res.send(html);
    }
  });
});
app.get("/transports", (req, res) => {
  Transport.find({}, (err, results) => {
    if (err) {
      console.log(err.message);
      res.redirect("/");
    } else {
      const compile = ejs.compile(
        fs.readFileSync(__dirname + "/views/partials/models.ejs", "utf8")
      );
      const html = compile({ results });
      res.send(html);
    }
  });
});
//Individual Elements
app.get("/animal/:id", (req, res) => {
  // console.log("entered");
  Animal.findById(req.params.id, (err, result) => {
    if (err) return res.redirect("/");
    else res.render("models", { models: result });
  });
});
app.get("/food/:id", (req, res) => {
  Food.findById(req.params.id, (err, result) => {
    if (err) return res.redirect("/");
    else res.render("models", { models: result });
  });
});
app.get("/Furnitures/:id", (req, res) => {
  Furniture.findById(req.params.id, (err, result) => {
    if (err) return res.redirect("/");
    else res.render("models", { models: result });
  });
});
app.get("/Natures/:id", (req, res) => {
  Nature.findById(req.params.id, (err, result) => {
    if (err) return res.redirect("/");
    else res.render("models", { models: result });
  });
});
app.get("/Technologies/:id", (req, res) => {
  Technology.findById(req.params.id, (err, result) => {
    if (err) return res.redirect("/");
    else res.render("models", { models: result });
  });
});
app.get("/Transports/:id", (req, res) => {
  Transport.findById(req.params.id, (err, result) => {
    if (err) return res.redirect("/");
    else res.render("models", { models: result });
  });
});
const port = 3001;

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
