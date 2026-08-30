const express = require("express");
const app = express();

const PORT = 8090;

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    age: 25,
    city: "Delhi",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    age: 28,
    city: "Mumbai",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    age: 30,
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha.singh@example.com",
    age: 24,
    city: "Pune",
  },
  {
    id: 5,
    name: "Rohit Gupta",
    email: "rohit.gupta@example.com",
    age: 27,
    city: "Gurgaon",
  },
  {
    id: 6,
    name: "Anjali Mehta",
    email: "anjali.mehta@example.com",
    age: 26,
    city: "Jaipur",
  },
  {
    id: 7,
    name: "Vikas Yadav",
    email: "vikas.yadav@example.com",
    age: 32,
    city: "Noida",
  },
  {
    id: 8,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    age: 29,
    city: "Ahmedabad",
  },
  {
    id: 9,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    age: 31,
    city: "Chandigarh",
  },
  {
    id: 10,
    name: "Pooja Rani",
    email: "pooja.rani@example.com",
    age: 23,
    city: "Hyderabad",
  },
];

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/studentdata", (req, res) => {
  res.json(student);
});

app.get("/studentdata/:id", (req, res) => {
  const id = req.params.id;
  const student = students.find((student) => student.id === Number(id));
  if (!student) {
    res.status(404).json({ success: false, message: "Student not found" });
  }
  res.json({ success: true, student });
});

app.listen(PORT, () => {
  console.log("jjsiadi");
});
