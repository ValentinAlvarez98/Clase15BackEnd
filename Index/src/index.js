import UsersModel from "./models/users.model.js";
import mongoose from "mongoose";

const environment = async () => {

      mongoose.set('strictQuery', false);

      await mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority')

      console.log("Conectado a la base de datos");

      let result = await UsersModel.find().explain("executionStats");

      let result1 = await UsersModel.find({
            first_name: "Celina"
      }).explain("executionStats");

      console.log(result1);

};

environment();