// const User = require('../../models/userModel');

// class EditarUsuariosController {
//   async handle(httpRequest) {
//     try {
//       const user = await User.findByPk(httpRequest.params.id);
//       if (user) {
//         await user.update(httpRequest.body);
//         return {
//           statusCode: 200,
//           body: user,
//         };
//       } else {
//         return {
//           statusCode: 404,
//           body: 'User not found',
//         };
//       }
//     } catch (error) {
//       return {
//         statusCode: 400,
//         body: { error: error.message },
//       };
//     }
//   }
// }

// module.exports = EditarUsuariosController;
