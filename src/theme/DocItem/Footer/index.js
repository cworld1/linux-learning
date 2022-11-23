import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import { useDoc } from "@docusaurus/theme-common/internal";
import Comments from "../../../components/Comments";

export default function FooterWrapper(props) {
  const { frontMatter } = useDoc();

  return (
    <>
      <Footer {...props} />
      {frontMatter?.ID && <Comments {...{ type: "docs" }} />}
    </>
  );
}
