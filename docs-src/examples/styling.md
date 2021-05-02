---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ Basic Styling
tags: example
name: Basic Styling
description: Basic Styling
prio: 2000
---


Styling can be done with [custom css properties/variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

For all available options take a look at the [API](../../api#Properties-styles).

For extreme cases (not recommended) it's also possible to [disable the ShadowDOM](../../api#Attributes-disableShadowDOM), so all elements can be accessed directly.

<style>
    release-notes-displayer{
        --release-notes-background-color-primary: #fff;
        --release-notes-color-primary: 0,0,0;
    }
</style>
<release-notes-displayer 
    data='[
    {
        "notes": [
            "[Changed] Something changed"
        ],
        "version": "1.0.1"
    },
    {
        "notes": [
            "[Added] Added something",
            "[Fixed] Fixed something",
            "[Improved] Improved something",
            "[Removed] Removed something"
        ],
        "version": "1.0.0"
    }]' />

<h3>CSS</h3>

```css
/* Applying light mode */
release-notes-displayer{
    --release-notes-background-color-primary: #fff;
    --release-notes-color-primary: 0,0,0;
}
```

<h3>HTML</h3>

```html
<release-notes-displayer 
    data='[
    {
        "notes": [
            "[Changed] Something changed"
        ],
        "version": "1.0.1"
    },
    {
        "notes": [
            "[Added] Added something",
            "[Fixed] Fixed something",
            "[Improved] Improved something",
            "[Removed] Removed something"
        ],
        "version": "1.0.0"
    }]' />
```
