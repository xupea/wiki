import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '断',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        断绝不良的习惯、关系、情感等，改变自己的生活方式和思维方式，使自己能够更好地成长和进步。
      </>
    ),
  },
  {
    title: '舍',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        放下自己执念的东西，不过分在意过去的不愉快或得失，减轻自己的负担，保持心态平静，关注当下的生活和事情。
      </>
    ),
  },
  {
    title: '离',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        远离不良的人和事，脱离不好的环境，保持自己的独立和自主，使自己能够更好地发展和成长。同时，也可以通过离开某个环境或社交圈来获得新的机会和更广阔的人脉。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
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
