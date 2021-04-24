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
        if (!this.data)
            return html `
        <div class="loading-indicator">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <slot></slot>
      `;
        return html `
      ${this.data.map((release) => html `${this.getSection(release)}`)}
      <slot></slot>
    `;
    }
    getSection(release) {
        return html `
      <section class="release-note position-relative center-container">
        <header class="timeline-decorator d-flex flex-items-center">
          <span class="release-version">${release.version}</span>
          <div class="release-title">${this.getReleaseHeaderName(release)}</div>
        </header>
        <!-- bUild list-->
        <ul class="list-style-none">
          <li></li>
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
};
ReleaseNotes.styles = css `
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
      background: #000;
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
      color: rgba(255,255,255,0.65);
      content: "";
      width: 3px;
      position: absolute;

      background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1));
      top: 0;
      bottom: 0;
      left: calc(65px / 2 + 16px);
      z-index: -1;
    }

    .release-note {
      display: block;
    }

    .list-style-none {
      list-style: none;
    }

    .release-version {
      color:rgba(255,255,255,0.65);

      width: 65px;
      text-align: center;
      background-color: #6f42c1;

      font-weight: 600;
      display: inline-block;
      border-radius: 3px;
      box-sizing: border-box;

      padding: 4px;
      margin-right: 8px;
    }

    .release-title {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: top;

      font-weight: 300;
      font-size: 20px;
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