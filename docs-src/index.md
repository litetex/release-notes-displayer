---
layout: page.11ty.cjs
title: <release-notes-displayer> ⌲ Home
---

<header class="index-header">
  <h1>&lt;release-notes-displayer></h1>
  <h2>A webcomponent to display release-notes</h2>
</header>

<style>
release-notes-displayer {
    --release-notes-font-size-primary: 18px;
}
</style>
<release-notes-displayer 
    data='[
    {
        "name": "A cool update",
        "notes": [
            "[Improved] 🚀 Display release-notes easily",
            "[Improved] Customizable component",
            "[Improved] Written in Typescript",
            "[Improved] Configuration can be done with json",
            "[Added] Check out the examples, api and more"
        ],
        "version": "2.0.0"
    },
    {
        "notes": [
            "[Added] A cool new feature",
            "[Improved] 🧹 Housekeeping",
            "[Improved] 📖 Added more docs",
            "[Update] 📦 Updated Dependency XY",
            "the world",
            "[Removed] Deprecated stuff"
        ],
        "version": "1.0.1"
    },
    {
        "name": "The first release",
        "pub_date": "2020-01-01",
        "version": "1.0.0"
    }]' />
