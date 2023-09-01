// - - - - | requires.
const path = require("path");
const indexRouter = require("./routers/index.router");
const menuRouter = require("./routers/menu.router");
const adminRouter = require("./routers/admin.router");

// - - - - - | express()
const express = require("express");
const app = express();
const serverPort = 5000;

// - - - - - | express server start
app.listen(serverPort, () => {
  console.log(`Express server running on port ${serverPort}`);
});

// - - - - - | middlewares (app.use)
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));

// - - - - - | template engines (app.set: ejs, carpeta views)

// - - - - - | route system
app.use("/", indexRouter);
app.use("/menu", menuRouter);
app.use("/admin", adminRouter);

// - - - - - | 404 error system if any
// Catch all method what will be executed if no route is found for any http method
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
});
