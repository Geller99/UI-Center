import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../redux";
import HoverEditor from "../../HoverEditor/HoverEditor";
import { TitleInput } from "./atoms/titleInput";
import { MetaInput } from "./atoms/metaInput";
import { LeadInput } from "./atoms/leadInput";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export interface ArticleProps {
  title?: string;
  setTitle?: any;
  meta?: string;
  setMeta?: any;
  lead?: string;
  setLead?: any;
}

const NewArticle: React.FC = () => {
  const mainRef: any = useRef();
  const [title, setTitle] = useState<string>("");
  const [meta, setMeta] = useState<string>("");
  const [lead, setLead] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const closeModal = (e: any) => {
    if (mainRef.current === e.target) {
      setShowModal(false);
    }
  };

  const routeHistory = useHistory();
  return (
    <Form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
      className="ArticleInput"
      ref={mainRef}
      onClick={closeModal}
    >
      {showModal && <HoverEditor />}
      <TitleInput title={title} setTitle={setTitle} />
      <MetaInput meta={meta} setMeta={setMeta} />
      <LeadInput lead={lead} setLead={setLead} />

      <button
        type="submit"
        onClick={() =>
          dispatch(
            actionCreators.blogAction_CreatePost({
              title: title,
              meta: meta,
              lead: lead,
              id: 0,
            }),
          )
        }
      >
        Publish!
      </button>

      <button onClick={() => routeHistory.push("/BlogFeed")}>View Feed!</button>
    </Form>
  );
};

export default NewArticle;
