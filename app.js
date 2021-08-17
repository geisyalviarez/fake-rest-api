var express = require("express");
var app = express();
const PORT = process.env.PORT || 5001;

app.post("/authenticate", (req, res) => {
  res.status(201).json({
    accesssToken: "xxxyyyzzz",
    user: {
      userId: "1234",
      userName: "Mariana Contreras",
      userRol: "student",
    },
  });
});

app.get("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  res.status(200).json({
    studentId: studentId,
    studentName: "Mariana Contreras",
    email: "gaaa@gmail.com",
    phone: "4141234545",
    enrollments: [
      {
        fileNumber: null,
        registryNumber: 87654321,
        career: "Contaduria Pública",
        year: 1,
        condition: "Nuevo ingreso",
        amountPay: 10,
        payments: [
          {
            currency: "bolívares",
            method: "transferencia",
            reference: "44444444",
            date: 10 / 07 / 2021,
            amount: 3,
          },
          {
            currency: "dolares",
            method: "cash",
            reference: "123",
            date: 10 / 07 / 2021,
            amount: 7,
          },
        ],
        course: [
          { description: "math ", professor: "pedro" },
          { description: "computation ", professor: "manuel" },
        ],
      },
    ],
  });
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
