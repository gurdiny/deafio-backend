const express = require("express");
const UserUseCase = require("../usescases/user.usecase");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const users = await UserUseCase.getAll();
    response.json({
      success: true,
      data: {
        users,
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

router.post("/", async (request, response) => {
  try {
    const userCreated = await UserUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        user: userCreated,
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
    const user = await UserUseCase.getById(id);
    response.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const userDelete = await UserUseCase.deleteById(id);

    response.json({
      success: true,
      data: { user: userDelete },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const userUpdated = await UserUseCase.updateById(id, request.body);
    response.json({
      success: true,
      data: { user: userUpdated },
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
