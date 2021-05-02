---
layout: example.11ty.cjs
title: <release-notes-displayer> ⌲ Examples ⌲ Issue Links
tags: example
name: Issue links
description: Issue links
---

To link issues to an issuetracker (e.g. Jira or GitHub) you have 2 options:

## Using ``issueBaseUrl`` (simple)
See also → [API-Ref](../../api#Attributes-issueBaseUrl)

<release-notes-displayer 
    issueBaseUrl="http://localhost/issue"
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
<release-notes-displayer 
    issueBaseUrl="http://localhost/issue"
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

## Using ``issueLinkGenerator`` (more complex - more options)
See also → [API-Ref](../../api#Attributes-issueLinkGenerator)

<release-notes-displayer 
    id='rn'
    data='[
    {
        "notes": [
            "[Changed] Something changed I-99999999"
        ],
        "version": "1.0.1"
    },
    {
        "notes": [
            "[Added] Added something I-1",
            "[Fixed] Fixed something I-2",
            "[Improved] Improved something I-FakeNumber I--abc",
            "[Removed] Removed something I-3"
        ],
        "version": "1.0.0"
    }]' />
<script>
// Find links in the format I-{number}
document.getElementById('rn').issueMatching = /(I\-\d+)/i;

// Build custom link
document.getElementById('rn').issueLinkGenerator = (issueKey) => {
    var normalizedIssueKey = issueKey.substring(2);
    // If the issueNumber is greater than 1 Mio then skip
    if(normalizedIssueKey > 1_000_000) {
        return null;
    }

    return "http://localhost/i/" + normalizedIssueKey + "/overview?theme=dark";
};
</script>

<h3>HTML</h3>

```html
<release-notes-displayer 
    id='rn'
    data='[
    {
        "notes": [
            "[Changed] Something changed #99999999"
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
```

<h3>JavaScript</h3>

```javascript
// Find links in the format I-{number}
document.getElementById('rn').issueMatching = /(I\-\d+)/i;

// Build custom link
document.getElementById('rn').issueLinkGenerator = (issueKey) => {
    var normalizedIssueKey = issueKey.substring(2);
    // If the issueNumber is greater than 1 Mio then skip
    if(normalizedIssueKey > 1_000_000) {
        return null;
    }

    return "http://localhost/i/" + normalizedIssueKey + "/overview?theme=dark";
};
```