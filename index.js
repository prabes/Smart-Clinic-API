const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const router = require("./routes");


var corsOptions = {
  origin: ["http://localhost:3000","http://192.168.1.98:3000", "*"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.json({ message: 'I am alive and well! ' });
});

// connect DB
db.authenticate()
	.then((result) => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.log("Can't connect to DB::", err);
	});

// set port
const PORT = process.env.PORT || 8000;

//listen requests
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
