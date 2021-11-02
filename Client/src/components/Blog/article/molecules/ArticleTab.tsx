import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import ArticleRender, { ArticleProps } from "../ArticleRender";

const ArticleTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  width: 30%;
  border: 1px solid black;
`;

export const NewTab = ({ title, meta, lead, element}: ArticleProps) => {
  
  return (
    <ArticleTab>
      <h1> {title} </h1>
      <Link to={`/ArticleRender/${element.title}`}><button> Read More... </button></Link>
    </ArticleTab>
  );
};
