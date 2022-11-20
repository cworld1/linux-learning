import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "单纯只是想要记录",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        “好记性不如烂笔头”，记不住，就用用手记下来以后慢慢翻看，这是我做笔记的初衷。
        不过现在分享出来，又何尝不是一种物尽其用呢？
      </>
    ),
  },
  {
    title: "一起学习进步",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        因为真的不是一个人在努力；是一群人一起学习，一起进步。
        每个参与建设或查阅网站的人，都在认真学习 Linux。
      </>
    ),
  },
  {
    title: "动手或许真的很重要",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        “只有真正走过，才知道这条路有多艰辛。”万事开头难，请从一段实机操作开始！
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
