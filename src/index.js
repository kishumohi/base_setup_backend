const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const { where } = require("sequelize");

const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, async () => {
  console.log(`Sever running on PORT : ${ServerConfig.PORT}`);
  const { City, Airport } = require("./models");
  // const ahmedabad = await City.findByPk(2);
  // console.log(ahmedabad);

  // const sivajiAirport = await ahmedabad.createAirport({
  //   name: "Mumbai Airport",
  //   code: "MAR",
  // });

  // const airportsInSAR = await ahmedabad.getAirports();
  // console.log(airportsInSAR);

  // console.log(sivajiAirport);

  await City.destroy({
    where: {
      id: 1,
    },
  });
});
