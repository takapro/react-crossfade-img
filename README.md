# react-crossfade-img

React component to crossfade images.  
Animation is triggered when an image is fully loaded and performed smoothly by CSS transitions.

[Example page](https://takapro.github.io/react-crossfade-img/)

## Install

Install with npm:

```console
npm install react-crossfade-img
```

Install with yarn:

```console
yarn add react-crossfade-img
```

## Usage

```jsx
import CrossfadeImg from 'react-crossfade-img';

function App() {
  return (
    <CrossfadeImg
      src={imageUrl}    // Image URL
      width='640px'     // CSS width property
      height='480px'    // CSS height property
      objectFit='fill'  // CSS object-fit property (optional, defaults to 'fill')
      duration='1s'     // CSS transition-duration property (optional, defaults to '1s')
    />
  );
}
```

## How it works

CrossfadeImg consists of a `span` and up to three `img` elements overlapping at the same size and position.
It transitions between virtually three states: stable, loading and animating.

### Stable

In the stable state, CrossfadeImg has two `img` elements.
Invisible `<img key={0}>` element has the previous image, and visible `<img key={1}>` element has the current image.

```jsx
<span>
  <img key={0} src={image url #0} style={{ opacity: 0 }} />
  <img key={1} src={image url #1} style={{ opacity: 1 }} />
</span>
```

### Loading

When a new image url is specified to CrossfadeImg, invisible `<img key={2}>` element is added to load the image.

```jsx
<span>
  <img key={0} src={image url #0} style={{ opacity: 0 }} />
  <img key={1} src={image url #1} style={{ opacity: 1 }} />
  <img key={2} src={image url #2} style={{ opacity: 0 }}, onLoad={...} />
</span>
```

### Animating

When the new image is loaded, internal states of CrossfadeImg change. As a result, `<img key={0}>` is removed,
and opecity of `<img key={1}>` and `<img key={2}>` transition from 1 to 0 and 0 to 1, respectively.

```jsx
<span>
  <img key={1} src={image url #1} style={{ opacity: 0, transition: 'opacity 1s' }} />
  <img key={2} src={image url #2} style={{ opacity: 1, transition: 'opacity 1s' }} />
</span>
```

When the animation finishes, it returns to the stable state. Transition styles remain, but have no effect.
