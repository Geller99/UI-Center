import { ActionType } from "../action-types/index";

export type Element = {
  title: string;
  meta: string;
  lead: string;
  id: number;
};

let nextPostId:number = 0;

export const blogAction_CreatePost = (post: Element) => {

  return {
      type: ActionType.CREATE_POST,
      payload: {
        title: post.title,
        meta: post.meta,
        lead: post.lead,
        id: nextPostId++,
      }
    }
};

export const blogAction_DeletePost = (post: Element) => {
  
  return {
    type: ActionType.DELETE_POST,
    id: post
  }
};

export const blogAction_EditPost = (post: Element) => {
  
  return {
    type: ActionType.EDIT_POST,
    payload: post,
  }
}


