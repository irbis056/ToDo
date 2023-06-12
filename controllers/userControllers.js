const fs = require('fs');
const jwt = require('jsonwebtoken');

// const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/userData.json`));

// exports.loginUser = (req, res) => {
//   const { name, password } = req.body;
//   const user = users.find(
//     (user) => user.name === name && user.password === password
//   );
//   if (user) {
//     const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

//     res.status(201).json({
//       status: 'success',
//       message: 'Welcome!',
//       token: token,
//     });
//   } else {
//     res.status(403).json({
//       status: 'error',
//       message: 'Wrong username or password!',
//     });
//   }
// };
