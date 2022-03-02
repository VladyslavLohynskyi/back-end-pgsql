const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, personId } = req.body;
    const newPost = await db.query(
      `INSERT INTO POST (TITLE,CONTENT,PERSON_ID) VALUES ($1,$2,$3) RETURNING *`,
      [title, content, personId]
    );
    res.json(newPost.rows[0]);
  }
  async getPostByPerson(req, res) {
    const id = req.query.id;
    const post = await db.query(`SELECT * FROM POST WHERE PERSON_ID = $1`, [
      id,
    ]);
    res.json(post.rows);
  }
}

module.exports = new PostController();
