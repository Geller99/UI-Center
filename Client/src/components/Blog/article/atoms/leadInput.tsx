import { ArticleProps } from "../NewArticle";
import { ArticleInput } from "./titleInput";
import styled from "styled-components";

const ContentInput = styled(ArticleInput)`
  
`

export const LeadInput = ({ lead, setLead }: ArticleProps) => {
  return (
    <ContentInput
      type="text"
      value={lead}
      onChange={(event: any) => {
        setLead(event.target.value);
      }}
    />
  );
};
