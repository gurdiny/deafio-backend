const express = require("express");
const PostUseCase = require("../usescases/post.usecase");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const posts = await PostUseCase.getAll();
    response.json({
      success: true,
      data: {
        posts,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      data: {
        error: error.message,
      },
    });
  }
});

router.post("/", auth, async (request, response) => {
  try {
    const postCreated = await PostUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        post: postCreated,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const post = await PostUseCase.getById(id);
    response.json({
      success: true,
      data: { post },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const postDelete = await PostUseCase.deleteById(id);
    response.json({
      success: true,
      data: { post: postDelete },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const postUpdated = await PostUseCase.updateById(id, request.body);
    response.json({
      success: true,
      data: { post: postUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
