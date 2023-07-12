import mongoose from "mongoose";

const usersCollection = "users";

const UsersSchema = new mongoose.Schema({

      first_name: {
            type: String,
            index: true
      },

      last_name: {
            type: String,
      },

      email: {
            type: String,
      },

      gender: {
            type: String,
      }

});

const UsersModel = mongoose.model(usersCollection, UsersSchema);

export default UsersModel;