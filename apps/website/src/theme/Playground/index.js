/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { usePrismTheme } from '@docusaurus/theme-common'
import { Collapse } from 'tntd'
import useIsBrowser from '@docusaurus/core/lib/client/exports/useIsBrowser'
import styles from './styles.module.less'

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>
}

function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Result
        </Translate>
      </Header>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  )
}

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser()
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={isBrowser}
      className={styles.playgroundEditor}
    />
  )
}
function EditorWithHeader() {
  return (
    <>
      <Collapse>
        <Collapse.Panel
          className={clsx(styles.playgroundHeader)}
          header={
            <Translate
              id="theme.Playground.liveEditor"
              description="The live editor label of the live codeblocks"
            >
              Live Editor
            </Translate>
          }
          key="code"
        >
          <ThemedLiveEditor />
        </Collapse.Panel>
      </Collapse>
    </>
  )
}

export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: {
      themeConfig: {
        liveCodeBlock: { playgroundPosition },
      },
    },
  } = useDocusaurusContext()
  const prismTheme = usePrismTheme()

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, '')}
        noInline={true}
        transformCode={(code) => {
          let transformed = code
            .replace(/ReactDOM.render/, 'render')
            .replace(/(,.*mountNode,?)/, '')
            .replace(/(.*mountNode,?)/, '')

          if (transformed.includes('class ')) {
            try {
              transformed = Babel.transform(transformed, {
                plugins: [
                  'syntax-jsx',
                  [
                    'proposal-class-properties',
                    {
                      loose: true,
                    },
                  ],
                ],
              }).code
            } catch (e) {
              console.log(e)
            }
          }

          return transformed
        }}
        transpileOptions={{
          transforms: {
            classes: false,
            arrow: false,
            spreadRest: false,
          },
        }}
        theme={prismTheme}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader />
            <EditorWithHeader />
          </>
        ) : (
          <>
            <EditorWithHeader />
            <ResultWithHeader />
          </>
        )}
      </LiveProvider>
    </div>
  )
}
