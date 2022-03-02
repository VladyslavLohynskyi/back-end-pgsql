const db = require("../db");

class PersonController {
  async createPerson(req, res) {
    const { name, surname } = req.body;
    const newPerson = await db.query(
      `INSERT INTO PERSON (NAME,SURNAME) VALUES ($1,$2) RETURNING *`,
      [name, surname]
    );
    res.json(newPerson.rows[0]);
  }
  async getPeople(req, res) {
    const users = await db.query(`SELECT * FROM PERSON`);
    res.json(users.rows);
  }
  async getPerson(req, res) {
    const { id } = req.params;
    const user = await db.query(`SELECT * FROM PERSON WHERE ID = $1`, [id]);
    res.json(user.rows[0]);
  }
  async updatePerson(req, res) {
    const { id, name, surname } = req.body;
    const user = await db.query(
      `UPDATE PERSON SET NAME=$1,SURNAME=$2 WHERE ID = $3 RETURNING * `,
      [name, surname, id]
    );
    res.json(user.rows[0]);
  }
  async deletePerson(req, res) {
    const { id } = req.params;
    const user = await db.query(`DELETE  FROM PERSON WHERE ID = $1`, [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new PersonController();
