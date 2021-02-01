# react-crossfade-img

React component to crossfade images.

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
