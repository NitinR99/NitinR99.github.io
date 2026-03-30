import legalNotice from "md/root/legalNotice.md";
import ReactMarkdown from "react-markdown";

export default function LegalNotice() {
  return <ReactMarkdown children={legalNotice} />;
}
