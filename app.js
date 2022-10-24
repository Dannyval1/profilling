import express from "express";

const app = express();
app.use(express.json());

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static("./public"));

app.get("/", (req, res) => {
  //res.status(200).json(products);
  res.sendFile("index.html", { root: __dirname });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});
