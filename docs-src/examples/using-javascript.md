---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ Using JavaScript
tags: example
name: Using javascript
description: Using javascript to fill in data
---

In the most use-cases you want to fill in the data via JavaScipt (e.g. if it was fetched from some sort of backend-api before):

<release-notes-displayer id="rn"></release-notes-displayer>
<script>
  var rn = document.getElementById('rn');
  rn.data = JSON.parse(`[
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
    }]`);
</script>


<h3>HTML</h3>

```html
<release-notes-displayer id="rn" />
```

<h3>JS</h3>

```javascript
let rn = document.getElementById('rn');
rn.data = JSON.parse(`[
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
}]`);
```
