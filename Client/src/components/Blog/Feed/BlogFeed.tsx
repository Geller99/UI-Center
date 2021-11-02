import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NewTab } from "../article/molecules/ArticleTab";
import styled from "styled-components";
import LoadingDots from "../../LoadingDots/LoadingDots";


const Feed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  background-color: white;
  color: black;
`;


const BlogFeed: React.FC = () => {
  const reduxState = useSelector((state: any) => state);

  const renderPosts =
    reduxState.blogReducer &&
    reduxState.blogReducer.map((element: any) => {
      return (
        <NewTab
          key={element.title}
          title={element.title}
          meta={element.meta}
          lead={element.lead}
          element={element}
        />
      );
    });

  useEffect(() => {
    console.log(reduxState.blogReducer);
  }, [reduxState]);

  return (
    <Feed className="BlogFeed">
      <h1>Hello, this is your feed!</h1>

      {reduxState.blogReducer.length > 0 ? renderPosts : <LoadingDots/> }
      
    </Feed>
  );
};

export default BlogFeed;
