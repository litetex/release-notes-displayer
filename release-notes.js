var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let ReleaseNotes = class ReleaseNotes extends LitElement {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    render() {
        if (!this.data || this.data.length == 0)
            return html `
        <div class="release-notes-container">
          <div class="loading-indicator">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      `;
        return html `
      <div class="release-notes-container">
        ${this.data.map(release => html `${this.getSection(release)}`)}
      </div>
    `;
    }
    getSection(release) {
        return html `
      <section class="release-note position-relative center-container">
        <header class="timeline-decorator d-flex flex-items-center">
          <span class="release-version border-box">${release.version}</span>
          <div class="release-title">${this.getReleaseHeaderName(release)}</div>
        </header>
        <!-- bUild list-->
        <ul class="change-log">
          ${release.notes.map(note => html `${this.getReleaseNoteElement(note)}`)}
        </ul>
      </section>`;
    }
    getReleaseHeaderName(release) {
        var result = '';
        if (release.pub_date != null)
            result += new Date(release.pub_date).toLocaleString();
        if (release.name != null) {
            if (release.pub_date != null)
                result += ' ';
            result += release.name;
        }
        return result;
    }
    getReleaseNoteElement(note) {
        if (!note)
            return html ``;
        var changeText = '';
        var badgeText = '';
        if (note.indexOf('[') != -1 && note.indexOf(']') != -1) {
            try {
                badgeText = note.substring(note.indexOf('[') + 1, note.indexOf(']'));
                changeText = note.substring(note.indexOf(']') + 1);
            }
            catch (e) {
                console.warn('Unable to parse', e);
            }
        }
        if (!changeText)
            changeText = note;
        if (!badgeText)
            badgeText = "Changed";
        return html `
      <li class="change-log-list-entry d-flex">
        <div class="change-badge ${badgeText ? ("change-badge-" + badgeText.trim().toLocaleLowerCase()) : ""} border-box">
          ${badgeText}
        </div>
        <div class="change-text">
          ${changeText}
        </div>
      </li>
    `;
    }
};
ReleaseNotes.styles = css `
    .release-notes-container {
        --primary-badge-color: rgba(255,255,255,0.75);
        --version-badge-size: 65px;
        --background-color-primary: #24292e; 
        --text-color-primary: rgba(255,255,255,0.75);

        background-color: var(--background-color-primary);
    }
    
    .loading-indicator {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .loading-indicator div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      background: var(--text-color-primary);
      animation: loading-indicator 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .loading-indicator div:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    .loading-indicator div:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    .loading-indicator div:nth-child(3) {
      left: 56px;
      animation-delay: 0;
    }
    @keyframes loading-indicator {
      0% {
        top: 8px;
        height: 64px;
      }
      50%, 100% {
        top: 24px;
        height: 32px;
      }
    }

    .center-container {
      margin-left: auto;
      margin-right: auto;
    }

    .position-relative {
      position: relative;
    }

    .d-flex {
      display: flex;
    }

    .flex-items-center {
      align-items: center;
    }

    .timeline-decorator::before {
      content: "";
      width: 3px;
      position: absolute;

      background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1));
      top: 0;
      bottom: 0;
      left: calc(var(--version-badge-size) / 2);
    }

    .release-note {
      display: block;

      color: var(--primary-badge-color);
    }

    .list-style-none {
      list-style: none;
    }

    .border-box {
      box-sizing: border-box;
    }

    .release-version {
      color: var(--primary-badge-color);

      width: var(--version-badge-size);
      text-align: center;
      background-color: #6f42c1;

      z-index: 1;

      font-weight: 600;
      display: inline-block;
      border-radius: 3px;

      padding: 4px;
      margin-right: 8px;
    }

    .release-title {
      color: var(--text-color-primary);
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: top;

      font-weight: 300;
      font-size: 20px;
    }

    .change-log {
      list-style: none;
      line-height: 1.5;
      margin-left: 74px;
    }

    .change-log-list-entry {
      align-items: flex-start;
    }

    .change-badge {
      color: var(--primary-badge-color);
      background-color: #0366d6;
      display: inline;
      flex: 0 0 var(--version-badge-size);
      font-size: 10px;
      font-weight: 600;
      border-radius: 3px;
      margin-right: 8px;
      padding: 2px 5px;
      text-transform: uppercase;
      text-align: center;
    }

    .change-badge-added,
    .change-badge-new {
      background-color: #28a745;
    }

    .change-badge-improved,
    .change-badge-fixed {
      background-color: #0366d6;
    }

    .change-badge-removed {
      background-color: #d73a49
    }

    .change-text {
      color: var(--text-color-primary);
    }
  `;
__decorate([
    property({ type: Array })
], ReleaseNotes.prototype, "data", void 0);
ReleaseNotes = __decorate([
    customElement('release-notes')
], ReleaseNotes);
export { ReleaseNotes };
class ReleaseData {
    constructor() {
        this.notes = [];
        this.version = '';
    }
}
//# sourceMappingURL=release-notes.js.map