const database = require("../config/db");

const db = database.connection;

const register = async (req, res) => {
 // code to register a user
    const { name, email, password } = req.body;
    db.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, password],
        (err, results) => {
        if (err) {
            console.log(err);
        }
        db.end();
        res.status(201).send("User registered successfully");
        }
    );
};
const getAllUsers = async (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log(err);
    }
    db.end();
    res.status(200).send(results);
  });
};

const login = async (req, res) => {
    // code to handle user login
    const { email, password } = req.body;
    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, results) => {
            if (err) {
                console.log(err);
            }
            if (results.length === 0) {
                res.status(401).send("Invalid email or password");
            } else {
                res.status(200).send("Login successful");
            }
        }
    );
};

module.exports = {  register, getAllUsers };
