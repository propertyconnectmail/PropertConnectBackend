const file = require( "../services/client.service" );
const FileService = new file();

module.exports = { clientRegister , findClient , updateClient , deleteClient, findAllClients};

/**
 * @description Create a record with the provided body
 */
async function clientRegister ( req, res ) {
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
async function findClient ( req, res ) {
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
async function findAllClients ( req, res ) {
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
async function updateClient ( req, res ) {
    try {
      const result = await FileService.updateOne( req.body);
      return res.send( result );
    } catch ( err ) {
      console.log( err ); 
      res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
    }
  }


  
    /**
   * @description Delete specific user with the email provided by body
   */
  async function deleteClient ( req, res ) {
      try {
        const result = await FileService.deleteOne( req.body);
        return res.send( result );
      } catch ( err ) {
        console.log( err ); 
        res.status( 500 ).send( { Status: 500 , Success: false, Error : `${err.name} : ${err.message}`  } );
      }
    }