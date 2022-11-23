import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";

export default function Comments(props) {
  const { colorMode } = useColorMode();
  let { type, category, categoryId } = props;
  category = "Website giscus";
  categoryId = "DIC_kwDOIddfXs4CStsN";

  return (
    <Giscus
      id="comments"
      repo="cworld1/linux-learning"
      repoId="R_kgDOIddfXg"
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
    />
  );
}
