---
layout: page.11ty.cjs
title: <release-notes-displayer> ⌲ Install
---

# Install

`<release-notes-displayer>` is [distributed on npm](https://www.npmjs.com/package/@litetex/release-notes-displayer), so you can install it locally or use it via npm CDNs like unpkg.com.

## Local Installation

```bash
npm i @litetex/release-notes-displayer
```

## CDN

npm CDNs like [unpkg.com](unpkg.com) can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specificers to full URLs.

### HTML
```html
<script type="module" src="https://unpkg.com/@litetex/release-notes-displayer?module"></script>
```

### JavaScript
```js
import {ReleaseNotesDisplayer} from 'https://unpkg.com/@litetex/release-notes-displayer?module';
```
