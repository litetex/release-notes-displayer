---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ Complex
tags: example
name: Complex
description: Complex
prio: 9999
---

<release-notes-displayer id="rn" issueBaseUrl="http://localhost/issue"></release-notes-displayer>
<script>
  var rn = document.getElementById('rn');
  rn.data = JSON.parse(`[
    {
        "name": "New world",
        "notes": [
            "[Changed] Breaking changes"
        ],
        "version": "2.0.0"
    },
    {
        "notes": [
            "[Changed] Something changed #3"
        ],
        "pub_date": "2000-10-24",
        "version": "1.0.1"
    },
    {
        "name": "Initial release",
        "notes": [
            "[Added] Added something #1",
            "[Fixed] Fixed something #2",
            "[Improved] Improved something",
            "[Removed] Removed something",
            "Oh no somebody forgot the type"
        ],
        "pub_date": "2000-10-20",
        "version": "1.0.0"
    }]`);
</script>


<h3>HTML</h3>

```html
<release-notes-displayer id="rn" issueBaseUrl="http://localhost/issue" />
```

<h3>JS</h3>

```javascript
let rn = document.getElementById('rn');
rn.data = JSON.parse(`[
{
    "name": "New world",
    "notes": [
        "[Changed] Breaking changes"
    ],
    "version": "2.0.0"
},
{
    "notes": [
        "[Changed] Something changed #3"
    ],
    "pub_date": "2000-10-24",
    "version": "1.0.1"
},
{
    "name": "Initial release",
    "notes": [
        "[Added] Added something #1",
        "[Fixed] Fixed something #2",
        "[Improved] Improved something",
        "[Removed] Removed something",
        "Oh no somebody forgot the type"
    ],
    "pub_date": "2000-10-20",
    "version": "1.0.0"
}]`);
```
