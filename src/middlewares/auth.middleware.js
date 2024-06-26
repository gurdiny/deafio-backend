const createError = require("http-errors");
const jwt = require("../lib/jwt");
const postUseCase = require("../usescases/post.usecase");

async function auth(request, response, next) {
  try {
    const token = request.headers.authorization;
    if (!token) {
      throw createError(401, "JWT is required");
    }

    const payload = jwt.verify(token);

    const user = await postUseCase.getById(payload.id);
    request.user = user;
    next();
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = auth;
