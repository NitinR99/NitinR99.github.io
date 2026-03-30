import Container from "@mui/material/Container";
import dataProtection from "md/root/dataProtection.md";
import ReactMarkdown from "react-markdown";

export default function DataProtection() {
  return (
    <Container>
      <ReactMarkdown children={dataProtection} />
    </Container>
  );
}
