import { getUserList, userInsert, userUpdate, userDelete } from '../controllers/controllers';

const express = require('express');
const routes = express.Router()


routes.get("/listar", getUserList)

routes.post("/inserir", userInsert)

routes.put("/modificar", userUpdate)

routes.delete("/deletar", userDelete)