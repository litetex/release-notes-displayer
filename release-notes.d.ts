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
    dateFormatter: (date: Date) => string;
    issueBaseUrl: string;
    render(): TemplateResult;
    getSection(release: ReleaseData): TemplateResult;
    getReleaseHeaderName(release: ReleaseData): string;
    getReleaseNoteElement(note: string): TemplateResult;
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