---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ I18N
tags: example
name: Internationalization
description: Internationalization
---

An example about internationalization (I18N):

<release-notes-displayer 
    id='rn' 
    issueBaseUrl="http://localhost/issue"
    data='[
    {
        "notes": [
            "[New] New something",
            "[Added] Added something",
            "[Fixed] Fixed something",
            "[Improved] Improved something",
            "[Removed] Removed something",
            "No changetype"
        ],
        "pub_date": "2000-01-01",
        "version": "1.0.0"
    }]' />
<script>
// You could also fetch that from a language specific endpoint/json-file, 
// e.g. http://locahost/i18n/changeType/de
var changeTypeI18N = {
    default: "Geändert",
    mappings: new Map([
        [ "new", "Neu" ],
        [ "added", "Neu"],
        [ "improved", "Verbessert"],
        [ "removed", "Entfernt"]
    ])
};
document.getElementById('rn').changeTypeBadgeNameFunc = (name) => {
    return changeTypeI18N.mappings.get(name?.toLowerCase()) ?? 
        changeTypeI18N.default;
};
document.getElementById('rn').dateFormatter = (date) => {
    return date.toString();
}
</script>

<h3>HTML</h3>

```html
<release-notes-displayer 
    id='rn' 
    issueBaseUrl="http://localhost/issue"
    data='[
    {
        "notes": [
            "[New] New something",
            "[Added] Added something",
            "[Fixed] Fixed something",
            "[Improved] Improved something",
            "[Removed] Removed something",
            "No changetype"
        ],
        "pub_date": "2000-01-01",
        "version": "1.0.0"
    }]' />
```

<h3>JS</h3>

```javascript
// You could also fetch that from a language specific endpoint/json-file, 
// e.g. http://locahost/i18n/changeType/de
var changeTypeI18N = {
    default: "Geändert",
    mappings: new Map([
        [ "new", "Neu" ],
        [ "added", "Neu"],
        [ "improved", "Verbessert"],
        [ "removed", "Entfernt"]
    ])
};
document.getElementById('rn').changeTypeBadgeNameFunc = (name) => {
    return changeTypeI18N.mappings.get(name?.toLowerCase()) ?? 
        changeTypeI18N.default;
};
document.getElementById('rn').dateFormatter = (date) => {
    return date.toString();
}
```