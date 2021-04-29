---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ Issue Links
tags: example
name: Issue links
description: Issue links
---

<release-notes-displayer issueBaseUrl="http://localhost/issue"
    data='[
    {
        "notes": [
            "[Changed] Something changed #444"
        ],
        "version": "1.0.1"
    },
    {
        "notes": [
            "[Added] Added something #1",
            "[Fixed] Fixed something #2",
            "[Improved] Improved something #FakeNumber #-3",
            "[Removed] Removed something #3"
        ],
        "version": "1.0.0"
    }]' />

<h3>HTML</h3>

```html
<release-notes-displayer issueBaseUrl="http://localhost/issue"
    data='[
    {
        "notes": [
            "[Changed] Something changed #444"
        ],
        "version": "1.0.1"
    },
    {
        "notes": [
            "[Added] Added something #1",
            "[Fixed] Fixed something #2",
            "[Improved] Improved something #FakeNumber",
            "[Removed] Removed something #3"
        ],
        "version": "1.0.0"
    }]' />
```
