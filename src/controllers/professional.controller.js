const file = require( "../services/professional.service" );
const FileService = new file();

module.exports = { createProfessional, findProfessional, updateProfessional , deleteProfessional, findAllProfessional };
// module.exports = { createEmployee , findEmployee , updateEmployee, updateEmployeePassword , deleteEmployee, updateEmployeePassword , updatePicture};

/**
 * @description Create a record with the provided body
 */
async function createProfessional ( req, res ) {
  try {
    const result = await FileService.create( req.body);
    return res.send( result );
  } catch ( err ) {
    console.log( err ); 
    res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
  }
}



/**
 * @description Get specific Professional with the email provided by body
 */
async function findProfessional ( req, res ) {
    try {
      const result = await FileService.findOne( req.body);
      return res.send( result );
    } catch ( err ) {
      console.log( err ); 
      res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
    }
  }


  /**
 * @description Get specific Professional with the email provided by body
 */
async function findAllProfessional ( req, res ) {
    try {
      const result = await FileService.find();
      return res.send( result );
    } catch ( err ) {
      console.log( err ); 
      res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
    }
  }


  /**
 * @description Update specific Professional with the email provided by body
 */
async function updateProfessional ( req, res ) {
    try {
      const result = await FileService.updateOne( req.body);
      return res.send( result );
    } catch ( err ) {
      console.log( err ); 
      res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
    }
  }


//     /**
//  * @description Update specific User with the email provided by body
//  * @param req {object} Express req object 
//  * @param res {object} Express res object
//  * @returns {object} success or failure object
//  */
// async function updatePicture ( req, res ) {
//   try {
//     const result = await FileService.updatePic( req.body);
//     return res.send( result );
//   } catch ( err ) {
//     console.log( err ); 
//     res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
//   }
// }



//     /**
//  * @description Update specific User password with the email provided by body
//  * @param req {object} Express req object 
//  * @param res {object} Express res object
//  * @returns {object} success or failure object
//  */
// async function updateEmployeePassword ( req, res ) {
//     try {
//       const result = await FileService.updatePassword( req.body);
//       return res.send( result );
//     } catch ( err ) {
//       console.log( err ); 
//       res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
//     }
//   }



  /**
 * @description Delete specific user with the email provided by body
 */
async function deleteProfessional ( req, res ) {
    try {
      const result = await FileService.deleteOne( req.body);
      return res.send( result );
    } catch ( err ) {
      console.log( err ); 
      res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
    }
  }