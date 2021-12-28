---
tags:
  - Components
type: Data Display
title: Carousel
------

A carousel component. Scales with its container.

## When To Use

*   When there is a group of content on the same level.
*   When there is insufficient content space, it can be used to save space in the form of a revolving door.
*   Commonly used for a group of pictures/cards.

## 示例

### Basic

Basic usage.

```jsx live
function onChange(a, b, c) {
  console.log(a, b, c);
}

ReactDOM.render(
  <Carousel afterChange={onChange}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  mountNode,
);```

### Position

There are 4 position options available.

```jsx live
class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'top',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={this.handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="top">Top</Radio.Button>
          <Radio.Button value="bottom">Bottom</Radio.Button>
          <Radio.Button value="left">Left</Radio.Button>
          <Radio.Button value="right">Right</Radio.Button>
        </Radio.Group>
        <Carousel dotPosition={dotPosition}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<PositionCarouselDemo />, mountNode);
```

### Scroll automatically

Timing of scrolling to the next card/picture.

```jsx live
ReactDOM.render(
  <Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  mountNode,
);
```

### Fade in

Slides use fade for transition.

```jsx live
ReactDOM.render(
  <Carousel effect="fade">
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  mountNode,
);
```

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| afterChange | Callback function called after the current index changes | function(current) | - |  |
| autoplay | Whether to scroll automatically | boolean | `false` |  |
| beforeChange | Callback function called before the current index changes | function(from, to) | - |  |
| dotPosition | The position of the dots, which can be one of `top` `bottom` `left` `right` | string | bottom | 3.17.0 |
| dots | Whether to show the dots at the bottom of the gallery | boolean | `true` |  |
| easing | Transition interpolation function name | string | `linear` |  |
| effect | Transition effect | `scrollx` | `fade` | `scrollx` |  |

## Methods

| Name | Description | Version |
| --- | --- | --- |
| goTo(slideNumber, dontAnimate) | Go to slide index, if dontAnimate=true, it happens without animation | 3.9.3 |
| next() | Change current slide to next slide |  |
| prev() | Change current slide to previous slide |  |

For more info on the parameters, refer to the <https://github.com/akiran/react-slick>
