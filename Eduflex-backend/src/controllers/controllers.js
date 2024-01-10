import { db } from "../data/database";

export const getUserList = (_, res) => {
    const consulta = "SELECT * FROM alunos"

    db.query(consulta, (erro, data) => {

        if (erro) {
            return res.json(erro)
        };

        return res.status(200).res.json(data);
    });
};

export const userInsert = () => {}

export const userUpdate = () => {}

export const userDelete = () => {}