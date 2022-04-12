/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import * as Components from '@tnt-next/components'
import axios from 'axios'
import { DndProvider, DragSource, DropTarget } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Resizable } from 'react-resizable'
import immutabilityHelper from 'immutability-helper'
import moment from 'moment'
import { debounce } from 'lodash'
import jsonp from 'fetch-jsonp'
import InfiniteScroll from 'react-infinite-scroller'
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import VList from 'react-virtualized/dist/commonjs/List'
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader'
import { StickyContainer, Sticky } from 'react-sticky'
import { TweenOneGroup } from 'rc-tween-one'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
// import '@tnt-next/components/lib/index.less'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  axios,
  DndProvider,
  DropTarget,
  DragSource,
  HTML5Backend,
  immutabilityHelper,
  Resizable,
  moment,
  debounce,
  jsonp,
  InfiniteScroll,
  WindowScroller,
  AutoSizer,
  VList,
  InfiniteLoader,
  StickyContainer,
  Sticky,
  TweenOneGroup,
  enUS,
  zhCN,
  ...React,
  ...Components,
}

export default ReactLiveScope
