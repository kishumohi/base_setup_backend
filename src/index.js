const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

console.log("Inside :: api routes");
app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, () => {
  console.log(`Sever running on PORT : ${ServerConfig.PORT}`);
});
