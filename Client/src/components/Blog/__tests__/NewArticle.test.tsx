import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NewArticle from "../article/NewArticle";
import { store } from "./../../../redux/store";

const WrappedProvider = () => {
  return (
    <Provider store={store}>
      <NewArticle />
    </Provider>
  );
};

describe("NewArticle Component", () => {
  
  it("Should check for Title Input component", () => {
    render(<WrappedProvider />);
    const TitleInput = screen.getAllByLabelText("Title Input");
    expect(TitleInput).toBeInTheDocument();
  });

  

});
