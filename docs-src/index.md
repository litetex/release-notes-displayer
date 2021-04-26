---
layout: page.11ty.cjs
title: <release-notes-displayer> ⌲ Home
---

# &lt;release-notes-displayer>

`<release-notes-displayer>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## TITLE1

<section class="index">
  <div class="code">

```html
<release-notes-displayer id="rn1" />
<script>
  let rn1 = document.getElementById('rn1');
  rn1.data = JSON.parse(`[
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
```

  </div>
  <div class="demo">

<release-notes-displayer id="rn1" />
<script>
  let rn1 = document.getElementById('rn1');
  rn1.data = JSON.parse(`[
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

  </div>
</section>

## TITLE2

<section class="index">
  <div class="demo">

<release-notes-displayer id="rn2" issueBaseUrl="http://localhost/issue" />
<script>
  let rn2 = document.getElementById('rn2');
  rn2.data = JSON.parse(`[
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

  </div>
  <div class="code">

```html
<release-notes-displayer id="rn2" issueBaseUrl="http://localhost/issue" />
<script>
  let rn2 = document.getElementById('rn2');
  rn2.data = JSON.parse(`[
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
```

  </div>
</section>