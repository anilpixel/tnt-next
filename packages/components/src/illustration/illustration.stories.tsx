import type { Meta, Story } from '@storybook/react'
import { Button } from '@tnt-next/components'
import * as illustrations from '@tnt-next/illustrations'
import type React from 'react'
import type { ComponentType } from 'react'
import styled from 'styled-components'

import { Illustration, IllustrationProps } from './illustration'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`

export default {
  component: Illustration,
  title: 'Illustration',
} as Meta

const Template: Story<
  IllustrationProps & {
    illustrations: Record<string, ComponentType>
  }
> = (args) => (
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
export const Primary = Template.bind({})
Primary.args = {
  illustrations,
}
