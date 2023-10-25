/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:d}=Object,p=globalThis,g=p.trustedTypes,u=g?g.emptyScript:"",v=p.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>!n(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??m)(s?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,v?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,S=w.trustedTypes,$=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,A="?"+z,E=`<${A}>`,C=document,_=()=>C.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,O=/>/g,N=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),F=new WeakMap,W=C.createTreeWalker(C,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=j;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===j?"!--"===l[1]?n=T:void 0!==l[1]?n=O:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=r??j,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?N:'"'===l[3]?I:P):n===I||n===P?n=N:n===T||n===O?n=j:(n=N,r=void 0);const d=n===N&&t[e+1].startsWith("/>")?" ":"";o+=n===j?i+E:h>=0?(s.push(a),i.slice(0,h)+k+i.slice(h)+z+d):i+z+(-2===h?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=Z(t,e);if(this.el=q.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=h[o++],i=s.getAttribute(t).split(z),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?Y:"@"===n[1]?tt:Q}),s.removeAttribute(t)}else t.startsWith(z)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(z),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],_()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],_())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(z,t+1));)a.push({type:7,index:r}),t+=z.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===L)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new V(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new et(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=W.nextNode(),o++)}return W.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new K(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new q(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new V(this.k(_()),this.k(_()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=G(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=G(this,s[i+n],e,n),a===L&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===H?t=H:t!==H&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class Y extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class tt extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??H)===L)return;const i=this._$AH,s=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==H&&(i===H||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const it=w.litHtmlPolyfillSupport;it?.(q,V),(w.litHtmlVersions??=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class st extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new V(e.insertBefore(_(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}st._$litElement$=!0,st.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:st});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:st}),(globalThis.litElementVersions??=[]).push("4.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},nt=(t=ot,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>"object"==typeof i?nt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var lt=function(t,e,i,s){for(var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let ht=class extends st{constructor(){super(...arguments),this.disableShadowDOM=!1,this.showNoDataSetAnimation=!0,this.data=[],this.changeTypeBadgeNameFunc=t=>t,this.dateFormatter=t=>t.toLocaleDateString(),this.issueMatching=/(#\d+)/i,this.issueBaseUrl="",this.issueLinkGenerator=void 0}render(){return D`
      <div class="release-notes-container d-flex">
        <div class="release-notes-container-inner">
          ${this.doRenderContent()}
        </div>
      </div>
    `}createRenderRoot(){return this.disableShadowDOM?this:super.createRenderRoot()}doRenderContent(){return this.data&&0!=this.data.length||!this.showNoDataSetAnimation?D`${this.data.map((t=>D`${this.getSection(t)}`))}`:D`
          <div class="loading-indicator">
            <div></div>
            <div></div>
            <div></div>
          </div>
        `}getSection(t){var e;return D` <section class="release-note position-relative">
      <header class="timeline-decorator d-flex">
        <span class="release-version-badge border-box">${t.version}</span>
        <div class="release-title">${this.getReleaseHeaderName(t)}</div>
      </header>
      <ul class="change-log">
        ${null===(e=t.notes)||void 0===e?void 0:e.map((t=>D`${this.getReleaseNoteElement(t)}`))}
      </ul>
    </section>`}getReleaseHeaderName(t){let e="";return null!=t.pub_date&&t.pub_date&&(e+=this.dateFormatter(new Date(t.pub_date))),null!=t.name&&t.name&&(null!=t.pub_date&&(e+=" - "),e+=t.name),e}getReleaseNoteElement(t){if(!t)return D``;let e="",i="";if(-1!=t.indexOf("[")&&-1!=t.indexOf("]"))try{i=t.substring(t.indexOf("[")+1,t.indexOf("]")),e=t.substring(t.indexOf("]")+1)}catch(t){console.warn("Unable to parse",t)}e||(e=t),e=e.trim(),i||(i="Changed");let s=[e],r=!1;return(this.issueBaseUrl||this.issueLinkGenerator)&&this.issueMatching&&(r=!0,s=e.split(this.issueMatching)),D`
      <li class="change-log-list-entry d-flex">
        <div
          class="change-badge ${i?"change-badge-"+i.trim().toLocaleLowerCase():""} border-box"
        >
          ${this.changeTypeBadgeNameFunc(i)}
        </div>
        <div class="change-text">
          ${s.map((t=>{if(r){const e=t.match(this.issueMatching);if(e){const i=this.issueLinkGenerator?this.issueLinkGenerator(e[1]):new URL(e[1],this.issueBaseUrl).href;if(i)return D`<a class="change-text-link" href="${i}"
                    >${t}</a
                  >`}}return t}))}
        </div>
      </li>
    `}getDefaultIssueMatchingRegex(){return/(#\d+)/i}};ht.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)})`
    .release-notes-container {
      --background-color-primary: var(
        --release-notes-background-color-primary,
        #24292e
      );
      --color-primary: var(--release-notes-color-primary, 255, 255, 255);

      --text-color-primary: var(
        --release-notes-text-color-primary,
        rgba(var(--color-primary), 0.75)
      );
      --font-size-primary: var(--release-notes-font-size-primary, 14px);
      --font-family-primary: var(
        --release-notes-font-family-primary,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Helvetica,
        'Apple Color Emoji',
        Arial,
        sans-serif,
        'Segoe UI Emoji',
        'Segoe UI Symbol'
      );

      --justify-content-primary: var(
        --release-notes-justify-conent-primary,
        center
      );

      --badge-text-color-primary: var(
        --release-notes-badge-text-color-primary,
        rgba(255, 255, 255, 0.75)
      );

      --version-badge-font-size: var(
        --release-notes-version-badge-font-size,
        calc(var(--font-size-primary) * 0.95)
      );
      --version-badge-background-color: var(
        --release-notes-version-badge-background-color,
        #6f42c1
      );
      --version-badge-width: var(--release-notes-version-badge-width, 65px);

      --header-title-font-size: var(
        --release-notes-header-title-font-size,
        calc(var(--font-size-primary) * 1.5)
      );

      --timeline-width: var(--release-notes-timeline-width, 3px);
      --timeline-color-primary: var(
        --release-notes-timeline-color-primary,
        rgba(var(--color-primary), 0.1)
      );
      --timeline-color-fade-out: var(
        --release-notes-timeline-color-fade-out,
        rgba(var(--color-primary), 0)
      );

      --release-note-padding-y: var(
        --release-notes-release-note-padding-y,
        20px
      );
      --release-note-padding-x: var(
        --release-notes-release-note-padding-x,
        16px
      );

      --change-badge-font-size: var(
        --release-notes-change-badge-font-size,
        calc(var(--font-size-primary) * 0.7)
      );
      --change-text-font-size: var(
        --release-notes-change-text-font-size,
        var(--font-size-primary)
      );
      --change-text-link-color: var(
        --release-notes-change-text-link-color,
        #9f7be1
      );

      color: var(--text-color-primary);
      background-color: var(--background-color-primary);

      font-size: var(--font-size-primary);
      font-family: var(--font-family-primary);

      justify-content: var(--justify-content-primary);
    }

    .loading-indicator {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      background-color: var(--background-color-primary);
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
      50%,
      100% {
        top: 24px;
        height: 32px;
      }
    }

    .position-relative {
      position: relative;
    }

    .d-flex {
      display: flex;
    }

    .release-note:first-of-type .timeline-decorator::before {
      background-image: linear-gradient(
        to bottom,
        var(--timeline-color-fade-out),
        var(--timeline-color-primary) var(--release-note-padding-y)
      );
    }

    .release-note:last-of-type .timeline-decorator::before {
      background-image: linear-gradient(
        to bottom,
        var(--timeline-color-primary) calc(100% - var(--release-note-padding-y)),
        var(--timeline-color-fade-out)
      );
    }

    .timeline-decorator::before {
      content: '';
      width: var(--timeline-width);
      position: absolute;

      background-image: linear-gradient(
        to bottom,
        var(--timeline-color-primary),
        var(--timeline-color-primary)
      );
      top: 0;
      bottom: 0;
      left: calc(
        var(--version-badge-width) / 2 + var(--release-note-padding-x)
      );
    }

    .release-note {
      display: block;

      color: var(--badge-text-color-primary);

      padding-top: var(--release-note-padding-y);
      padding-bottom: var(--release-note-padding-y);
      padding-left: var(--release-note-padding-x);
      padding-right: var(--release-note-padding-x);
    }

    .list-style-none {
      list-style: none;
    }

    .border-box {
      box-sizing: border-box;
    }

    .release-version-badge {
      color: var(--badge-text-color-primary);

      min-width: var(--version-badge-width);
      text-align: center;
      background-color: var(--version-badge-background-color);
      align-self: flex-start;

      z-index: 1;

      font-weight: 600;
      font-size: var(--version-badge-font-size);
      border-radius: 3px;

      padding: 4px;
      margin-right: 8px;
    }

    .release-title {
      color: var(--text-color-primary);
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;

      font-weight: 300;
      font-size: var(--header-title-font-size);
    }

    .change-log {
      list-style: none;
      line-height: 1.5;
      margin-left: calc(
        var(--version-badge-width) + var(--release-note-padding-x)
      );
      padding-left: 0px;
    }

    .change-log-list-entry {
      align-items: flex-start;
    }

    .change-badge {
      color: var(--badge-text-color-primary);
      background-color: #0366d6;
      min-width: calc(var(--font-size-primary) * 4.5 + 5px);
      font-size: var(--change-badge-font-size);
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
      background-color: #d73a49;
    }

    .change-text {
      color: var(--text-color-primary);
      font-size: var(--change-text-font-size);

      overflow-wrap: anywhere;
    }

    a.change-text-link {
      text-decoration: none;
      color: var(--change-text-link-color);
    }

    a.change-text-link:hover {
      text-decoration: underline;
      color: var(--change-text-link-color);
    }
  `,lt([at({type:Boolean})],ht.prototype,"disableShadowDOM",void 0),lt([at({type:Boolean})],ht.prototype,"showNoDataSetAnimation",void 0),lt([at({type:Array})],ht.prototype,"data",void 0),lt([at()],ht.prototype,"changeTypeBadgeNameFunc",void 0),lt([at()],ht.prototype,"dateFormatter",void 0),lt([at({type:RegExp,converter:t=>{if(t)return new RegExp(t)}})],ht.prototype,"issueMatching",void 0),lt([at({type:String})],ht.prototype,"issueBaseUrl",void 0),lt([at()],ht.prototype,"issueLinkGenerator",void 0),ht=lt([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("release-notes-displayer")],ht);export{ht as ReleaseNotesDisplayer};
