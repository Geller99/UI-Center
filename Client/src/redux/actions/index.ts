import { ActionType } from "../action-types";

interface CreatePost {
  type: ActionType.CREATE_POST;
  payload?: object;
}

interface DeletePost {
  type: ActionType.DELETE_POST;
  payload?: object;
}

interface EditPost {
  type: ActionType.EDIT_POST;
  payload?: object;
}

interface PublishPost {
  type: ActionType.PUBLISH_POST;
  payload?: {};
}

interface ViewPost {
  type: ActionType.VIEW_POST;
  payload?: {};
}

export type Action = CreatePost | DeletePost | EditPost | PublishPost | ViewPost
