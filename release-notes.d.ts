import { LitElement, TemplateResult } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class ReleaseNotes extends LitElement {
    static styles: import("lit-element").CSSResult;
    data: Array<ReleaseData>;
    render(): TemplateResult;
    getSection(release: ReleaseData): TemplateResult;
    getReleaseHeaderName(release: ReleaseData): string;
}
declare class ReleaseData {
    name?: string;
    notes: Array<string>;
    pub_date?: string;
    version: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'release-notes': ReleaseNotes;
    }
}
export {};
//# sourceMappingURL=release-notes.d.ts.map