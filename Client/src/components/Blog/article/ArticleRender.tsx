import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export interface ArticleProps {
  title: string;
  meta: string;
  lead: string;
  element?: any;
}

const ArticleRender = (article: any) => {
  const { title }: any = useParams();
  const reduxState = useSelector((state: any) => state);

  return (
    <div className="ArticleRender">
      {reduxState.blogReducer &&
        reduxState.blogReducer
          .filter((post: any) => post.title === title)
          .map((element: any) => {
            return <div key={element.title}> {element.title} </div>;
          })}
    </div>
  );
};

export default ArticleRender;
