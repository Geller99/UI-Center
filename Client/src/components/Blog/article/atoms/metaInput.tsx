import { ArticleProps } from "../NewArticle";
import { ArticleInput } from "./titleInput";

export const MetaInput = ({ meta, setMeta }: ArticleProps) => {
  return (
    <ArticleInput
      type="text"
      value={meta}
      onChange={(event: any) => {
        setMeta(event.target.value);
      }}
      // onSelect={() => setShowModal(true)}
    />
  );
};
