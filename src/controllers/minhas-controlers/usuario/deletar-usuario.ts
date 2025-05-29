// const User = require('../../models/userModel');

// class DeletarUsuariosController {
//   async handle(httpRequest) {
//     try {
//       const user = await User.findByPk(httpRequest.params.id);
//       if (user) {
//         await user.destroy();
//         return {
//           statusCode: 200,
//           body: 'Usuario deletado',
//         };
//       } else {
//         return {
//           statusCode: 404,
//           body: 'User not found',
//         };
//       }
//     } catch (error) {
//       return {
//         statusCode: 500,
//         body: error.message,
//       };
//     }
//   }
// }

// module.exports = DeletarUsuariosController;
