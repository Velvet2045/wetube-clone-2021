import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev");

const handleHome = (req, res, next) => {
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
