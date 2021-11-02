import React from "react";
import { Switch, Route } from "react-router-dom";
import NewArticle from "../Blog/article/NewArticle";
import ArticleRender from "../Blog/article/ArticleRender";
import UserDash from "../Blog/dashboard/UserDash";
import BlogFeed from "../Blog/Feed/BlogFeed";
import Login from "../UserAuth/LoginPage/molecules/Login";
import Signup from "../UserAuth/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import EditArticle from "../Blog/article/EditArticle";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        {" "}
        <UserDash />{" "}
      </Route>
      <Route path="/NewArticle">
        <NewArticle />
      </Route>
      <Route path="/BlogFeed" component={BlogFeed} />
      {/* <PrivateRoute path='/UserDash' component={UserDash}/> */}
      <Route path="/ArticleRender/:title" component={ArticleRender} />
      <Route path="/Signup" component={Signup} />
      <Route path="/EditArticle/:title" component={EditArticle} />
    </Switch>
  );
};

export default Router;
