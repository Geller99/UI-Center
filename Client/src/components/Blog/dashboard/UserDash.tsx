import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../../../redux";

// Minimal dashboard page to create new blog post -- routes to Article Input form
// User can also go directly to the feed page from this dashboard
// User can view number of posts created
// User can Edit old posts

const UserDash: React.FC = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: any) => state);
  const userPostList =
    reduxState.blogReducer &&
    reduxState.blogReducer.map((element: any) => {
      return (
        <div key={element.title}>
          {" "}
          {element.title}{" "}
          <button
            onClick={() =>
              dispatch(actionCreators.blogAction_DeletePost(element.id))
            }
          >
            {" "}
            delete{" "}
          </button>{" "}
          <Link to={`/EditArticle/${element.title}`}>
            <button>Edit</button>
          </Link>
        </div>
      );
    });

  return (
    <div className="Dashboard">
      <Link to="/NewArticle">
        <button>New Post</button>
      </Link>
      Hello
      <div>{userPostList}</div>
      <Link to="/BlogFeed">
        <button className="Dashboard--redirect_Feed">Go to feed</button>
      </Link>
    </div>
  );
};

export default UserDash;
