import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDataBase } from "../data/PostDataBase";

import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";


export const postRouter = Router();

const postController = new PostController(
  new PostBusiness(
    new PostDataBase(),
    new GenerateId(),
    new HashManager(),
    new Authenticator()
  )
)

postRouter.post("/createPost", postController.createPost)
// postRouter.get("/", postController.getPosts);
// postRouter.delete("/:id", postController.deletePost);
// postRouter.post("/like/:id", postController.addLike);
// postRouter.delete("/like/:id", postController.removeLike);
