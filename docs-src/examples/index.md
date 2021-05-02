---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
prio: 1
---

This is a basic example how to make the component work:

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

<br>

If no data is set to the component, it looks like this:

<release-notes-displayer></release-notes-displayer>

<h3>HTML</h3>

```html
<release-notes-displayer></release-notes-displayer>
```