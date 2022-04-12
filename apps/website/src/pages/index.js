import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.css'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout>
      <header className={clsx('hero', styles.heroBanner)}>
        <img
          className={styles.heroBg}
          src={useBaseUrl('/img/background.svg')}
          alt="bg"
        />
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            <Translate id="tag-line">
              致力于提供简单、专业可靠的前端解决方案，让体验更美好
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/components-intro"
            >
              <Translate id="getting-started">开始使用</Translate>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  )
}
