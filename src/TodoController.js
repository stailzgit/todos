import PostService from './mongo/PostService.js'
import Todo from './mongo/Todo.js'


class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
