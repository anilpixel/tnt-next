import type { Meta, Story } from '@tntd/storybook-react-storykit'
import React, { ComponentType } from 'react'
import styled from 'styled-components'

import { Button } from '../'
import * as illustrations from '../svg-components'
import { Illustration } from './illustration'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`

export default {
  component: Illustration,
  title: 'Illustration',
} as Meta

const Primary: Story<{
  illustrations: Record<string, ComponentType>
}> = (args) => (
  <Container>
    {Object.entries(args.illustrations).map(([, IllustrationComponent]) => (
      <Illustration
        illustration={<IllustrationComponent />}
        description="说明文字"
        caption="标题"
      >
        <Button type="primary">确认</Button>
      </Illustration>
    ))}
  </Container>
)

Primary.args = {
  illustrations,
}
