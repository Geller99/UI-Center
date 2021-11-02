import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditArticle = () => {
  const { title }: any = useParams();
  const reduxState = useSelector((state: any) => state);

  const updateHandler = () => {
    
  }
  
  const displayEditableForm =
    reduxState.blogReducer &&
    reduxState.blogReducer
      .filter((post: any) => post.title === title)
      .map((element: any) => {
        return (
          <form onSubmit={(ev) => ev.preventDefault()}>
            <input defaultValue={element.title} />
            <input defaultValue={element.meta} />
            <input defaultValue={element.lead} />
            <button>Submit Changes</button>
          </form>
        );
      });
  return <div>{displayEditableForm}</div>;
};

export default EditArticle;
