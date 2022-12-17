/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const a=window,l=a.trustedTypes,h=l?l.emptyScript:"",d=a.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:v};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=u){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:c).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:p}),(null!==(n=a.reactiveElementVersions)&&void 0!==n?n:a.reactiveElementVersions=[]).push("1.5.0");const f=window,y=f.trustedTypes,m=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,x="?"+b,w=`<${x}>`,k=document,$=(t="")=>k.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,E=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,j=/"/g,R=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),T=new WeakMap,I=k.createTreeWalker(k,129,null,!1),B=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=A;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===A?"!--"===l[1]?n=C:void 0!==l[1]?n=E:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=_):void 0!==l[3]&&(n=_):n===_?">"===l[0]?(n=null!=r?r:A,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?_:'"'===l[3]?j:U):n===j||n===U?n=_:n===C||n===E?n=A:(n=_,r=void 0);const c=n===_&&t[e+1].startsWith("/>")?" ":"";o+=n===A?i+w:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+b+c):i+b+(-2===h?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,s]};class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,h]=B(t,e);if(this.el=D.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?W:"@"===e[1]?Z:F})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),I.nextNode(),a.push({type:2,index:++r});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)a.push({type:7,index:r}),t+=b.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var r,o,n,a;if(e===O)return e;let l=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Co)&&void 0!==n?n:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,s)),e}class P{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);I.currentNode=r;let o=I.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new H(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new q(o,this,t)),this.u.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=I.nextNode(),n++)}return r}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),S(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==O&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new P(r,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new D(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new H(this.O($()),this.O($()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=L(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=L(this,s[i+n],e,n),a===O&&(a=this._$AH[n]),o||(o=!S(a)||a!==this._$AH[n]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const K=y?y.emptyScript:"";class W extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Z extends F{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:N)===O)return;const s=this._$AH,r=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const G=f.litHtmlPolyfillSupport;null==G||G(D,H),(null!==(g=f.litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push("2.5.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,Q;class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new H(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return O}}X.finalized=!0,X._$litElement$=!0,null===(V=globalThis.litElementHydrateSupport)||void 0===V||V.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var it;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements;var st=function(t,e,i,s){for(var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let rt=class extends X{constructor(){super(...arguments),this.disableShadowDOM=!1,this.showNoDataSetAnimation=!0,this.data=[],this.changeTypeBadgeNameFunc=t=>t,this.dateFormatter=t=>t.toLocaleDateString(),this.issueMatching=/(#\d+)/i,this.issueBaseUrl="",this.issueLinkGenerator=void 0}render(){return M`
      <div class="release-notes-container d-flex">
        <div class="release-notes-container-inner">
          ${this.doRenderContent()}
        </div>
      </div>
    `}createRenderRoot(){return this.disableShadowDOM?this:super.createRenderRoot()}doRenderContent(){return this.data&&0!=this.data.length||!this.showNoDataSetAnimation?M`${this.data.map((t=>M`${this.getSection(t)}`))}`:M`
          <div class="loading-indicator">
            <div></div>
            <div></div>
            <div></div>
          </div>
        `}getSection(t){var e;return M` <section class="release-note position-relative">
      <header class="timeline-decorator d-flex">
        <span class="release-version-badge border-box">${t.version}</span>
        <div class="release-title">${this.getReleaseHeaderName(t)}</div>
      </header>
      <ul class="change-log">
        ${null===(e=t.notes)||void 0===e?void 0:e.map((t=>M`${this.getReleaseNoteElement(t)}`))}
      </ul>
    </section>`}getReleaseHeaderName(t){let e="";return null!=t.pub_date&&t.pub_date&&(e+=this.dateFormatter(new Date(t.pub_date))),null!=t.name&&t.name&&(null!=t.pub_date&&(e+=" - "),e+=t.name),e}getReleaseNoteElement(t){if(!t)return M``;let e="",i="";if(-1!=t.indexOf("[")&&-1!=t.indexOf("]"))try{i=t.substring(t.indexOf("[")+1,t.indexOf("]")),e=t.substring(t.indexOf("]")+1)}catch(t){console.warn("Unable to parse",t)}e||(e=t),e=e.trim(),i||(i="Changed");let s=[e],r=!1;return(this.issueBaseUrl||this.issueLinkGenerator)&&this.issueMatching&&(r=!0,s=e.split(this.issueMatching)),M`
      <li class="change-log-list-entry d-flex">
        <div
          class="change-badge ${i?"change-badge-"+i.trim().toLocaleLowerCase():""} border-box"
        >
          ${this.changeTypeBadgeNameFunc(i)}
        </div>
        <div class="change-text">
          ${s.map((t=>{if(r){const e=t.match(this.issueMatching);if(e){const i=this.issueLinkGenerator?this.issueLinkGenerator(e[1]):new URL(e[1],this.issueBaseUrl).href;if(i)return M`<a class="change-text-link" href="${i}"
                    >${t}</a
                  >`}}return t}))}
        </div>
      </li>
    `}getDefaultIssueMatchingRegex(){return/(#\d+)/i}};rt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)})`
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
  `,st([et({type:Boolean})],rt.prototype,"disableShadowDOM",void 0),st([et({type:Boolean})],rt.prototype,"showNoDataSetAnimation",void 0),st([et({type:Array})],rt.prototype,"data",void 0),st([et()],rt.prototype,"changeTypeBadgeNameFunc",void 0),st([et()],rt.prototype,"dateFormatter",void 0),st([et({type:RegExp,converter:t=>{if(t)return new RegExp(t)}})],rt.prototype,"issueMatching",void 0),st([et({type:String})],rt.prototype,"issueBaseUrl",void 0),st([et()],rt.prototype,"issueLinkGenerator",void 0),rt=st([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("release-notes-displayer")],rt);export{rt as ReleaseNotesDisplayer};
