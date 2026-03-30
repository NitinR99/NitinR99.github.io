import Container from "@mui/material/Container";
import legalNotice from "md/root/legalNotice.md";
import ReactMarkdown from "react-markdown";

export default function LegalNotice() {
  return (
    <Container>
      <ReactMarkdown children={legalNotice} />
    </Container>
  );
}
