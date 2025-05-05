const MongooseService = require( './MongooseService' ); // Data Access Layer
const FileModel = require( "../models/Client" ); // Database Model
const { registerClientValidation } = require("../validation/client.validation");
const aws = require('../middlewares/awsMiddleware');  
const fs = require('fs');
const bcrypt = require('bcryptjs');


class FileService {
  /**
   * @description Create an instance of PostService
   */
  constructor() {
    // Create instance of Data Access layer using our desired model
    this.MongooseServiceInstance = new MongooseService(FileModel.Client);
  }


  /**
   * @description Attempt to create a post with the provided object
   * @param body {object} Object containing all required fields to
   * create post
   * @returns {Object}
   */
  async create(body) {
    try {
      //Validating with joi schema by calling validateRegistration function at the end of the page
      if (body != null) {
        let { error } = await registerClientValidation(body);
        if (error) return { Status: "400", Error: error.details[0].message, Type: "Joi" }
        
      }

      //Check if email already exists
      let emailExist = await this.findEmailExist(body.email);
      if (emailExist) return { Status: "400", Email: emailExist.email, Error: "Email Already Exists!" }

      //Hashing the Password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt)
      body.password = hashedPassword;

      //Creating the User
      let result = await this.MongooseServiceInstance.create(body)
      if(result.email === body.email){
        return { message : "success" }
      }

      return result;
    }
    catch (err) {
      console.log(err)
      return { Status: 500, Error: `${err.name} : ${err.message} `, Location: "./Src/Services/customer.service.js - create(body)" };
    }
  }


   /**
     * @description Attempt to find a post with the provided email
     * @returns {Object}]
     */
     async findOne( body ) {
      try {
        let result = await this.MongooseServiceInstance.findOne({ email: body.email })
        if(result.length != null || result.length != 0){
          return result;
        }
        return result
      } 
      catch ( err ) {
          console.log( err)
          return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - findOne(body)"};
      }
    }


     /**
   * @description Attempt to find a post with the provided email
   * @returns {Object}]
   */
   async find(  ) {
    try {
      let result = await this.MongooseServiceInstance.find()
      if(result.length != null || result.length != 0){
        return result;
      }
      return result
    } 
    catch ( err ) {
        console.log( err)
        return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - findOne(body)"};
    }
  }
  
  
  
      /**
     * @description Attempt to update a post with the provided object
     */
      async updateOne( body ) {
          try {    
              //Validating with joi schema
              if(body != null){
                  let { error } = await registerClientValidation(body);
                  if (error) return {Status: "400" , Error: error.details[0].message, Type: "Joi" }
              }
  
  
             //Updating document and returning result
              let result = await this.MongooseServiceInstance.updateOne({ email: body.email }, body);
              if(result.modifiedCount === 1){
                return { message : "success" }
              }
              return result;
          } 
          catch ( err ) {
              console.log( err)
              return { Status: 500, Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - updateOne(body)" };
          }
      }



    /**
     * @description Attempt to delete a post with the provided object
     */
    async deleteOne( body ) {
      try {
        console.log(body)
              
          try{
            if(body.url != 'https://example.com/images/client.jpg'){
              await aws.deletefile(body.url);
            }
          }catch(err){
              console.error(`Upload failed for ${fileName}:`, err);
          }

        let result = await this.MongooseServiceInstance.deleteOne({ email: body.email });
        if(result.deletedCount === 1){
          return { message : "success" }
        }
        return result;
      } 
      catch ( err ) {
        console.log( err)
        return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Service/employee.service.js - deleteOne(body)"};
      }
    }
  
  
  
    /**
   * @description Attempt to find if provided email exists in database
   */
    async findEmailExist( email ) {
        try {
            return await this.MongooseServiceInstance.findOne({email : email});
        } 
        catch ( err ) {
            console.log( err)
            return { Status: 500 , Error : `${err.name} : ${err.message} `, Location: "./Src/Services/employee.service.js - findEmailExist(email)"};
        }
    }

}

module.exports = FileService;