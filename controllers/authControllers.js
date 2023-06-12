// exports.protected = (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }

//   if (!token) {
//     return next(
//       res.status(403).json({
//         status: "error",
//         message: "Wrong or expired token. Log in again.",
//       })
//     );
//   }
//   console.log(token);

//   next();
// };
