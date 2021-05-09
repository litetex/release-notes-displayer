/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${s}`);class r{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],a=document.createTreeWalker(e.content,133,null,!1);let h=0,d=-1,u=0;const{strings:p,values:{length:f}}=t;for(;u<f;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=c.exec(e)[2],s=i.toLowerCase()+"$lit$",r=t.getAttribute(s);t.removeAttribute(s);const o=r.split(n);this.parts.push({type:"attribute",index:d,name:i,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(n),a=r.length-1;for(let e=0;e<a;e++){let s,n=r[e];if(""===n)s=l();else{const t=c.exec(n);null!==t&&o(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++d})}""===r[a]?(i.insertBefore(l(),t),s.push(t)):t.data=r[a],u+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&d!==h||(d++,e.insertBefore(l(),t)),h=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(s.push(t),d--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},a=t=>-1!==t.index,l=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let r=u(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=u(s,r),o=s[r]}c.forEach((t=>t.parentNode.removeChild(t)))}const d=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(a(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,f=t=>"function"==typeof t&&p.has(t),g={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,l=0,c=n.nextNode();for(;o<s.length;)if(r=s[o],a(r)){for(;l<r.index;)l++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.t.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${i} `;class b{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=c.exec(t);e+=null===a?t+(n?w:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(x(t)||!S(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class z{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.o(this.startNode=l()),t.o(this.endNode=l())}insertAfterPart(t){t.o(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.i);){const t=this.i;this.i=g,t(this)}const t=this.i;t!==g&&(x(t)?t!==this.value&&this.l(t):t instanceof b?this.h(t):t instanceof Node?this.u(t):S(t)?this.p(t):t===v?(this.value=v,this.clear()):this.l(t))}o(t){this.endNode.parentNode.insertBefore(t,this.endNode)}u(t){this.value!==t&&(this.clear(),this.o(t),this.value=t)}l(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.u(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const i=new m(e,t.processor,this.options),s=i._clone();i.update(t.values),this.u(s),this.value=i}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new z(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ${constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=g,t(this)}if(this.i===g)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=g}}class C extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends _{}let j=!1;(()=>{try{const t={get capture(){return j=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.g=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=g,t(this)}if(this.i===g)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.g,this.v),s&&(this.v=U(t),this.element.addEventListener(this.eventName,this.g,this.v)),this.value=t,this.i=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const U=t=>t&&(j?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function E(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new r(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const P=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new C(t,e.slice(1),i).parts}if("@"===n)return[new M(t,e.slice(1),s.eventContext)];if("?"===n)return[new $(t,e.slice(1),i)];return new k(t,e,i).parts}handleTextExpression(t){return new z(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const R=(t,...e)=>new b(t,e,"html",T)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,N=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const F=t=>e=>{const s=N(e.type,t);let n=P.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},P.set(s,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(i);if(o=n.keyString.get(a),void 0===o){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),o=new r(e,i),n.keyString.set(a,o)}return n.stringsArray.set(e.strings,o),o},V=["html","svg"],B=new Set,L=(t,e,i)=>{B.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{V.forEach((e=>{const i=P.get(N(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),h(t,i)}))}))})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=u(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=d(e),i.parentNode.insertBefore(e,i));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=u(n,o);return}o=u(n,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:D};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=D){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||q,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||q.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=H){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):W(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Y={};class Z extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new X(String(e),Q)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Y}}Z.finalized=!0,Z.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=O.has(i),o=I&&11===i.nodeType&&!!i.host,a=o&&!B.has(n),l=a?document.createDocumentFragment():i;if(((t,i,s)=>{let n=O.get(i);void 0===n&&(e(i,i.firstChild),O.set(i,n=new z(Object.assign({templateFactory:E},s))),n.appendInto(i)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:F(n)},s)),a){const t=O.get(l);O.delete(l);const s=t.value instanceof m?t.value.template:void 0;L(n,l,s),e(i,i.firstChild),i.appendChild(l),O.set(i,t)}!r&&o&&window.ShadyCSS.styleElement(i.host)},Z.shadowRootOptions={mode:"open"};var tt=function(t,e,i,s){for(var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let et=class extends Z{constructor(){super(...arguments),this.disableShadowDOM=!1,this.showNoDataSetAnimation=!0,this.data=[],this.changeTypeBadgeNameFunc=t=>t,this.dateFormatter=t=>t.toLocaleDateString(),this.issueMatching=/(#\d+)/i,this.issueBaseUrl="",this.issueLinkGenerator=void 0}render(){return R`
      <div class="release-notes-container d-flex">
        <div class="release-notes-container-inner">
          ${this.doRenderContent()}
        </div>
      </div>
    `}createRenderRoot(){return this.disableShadowDOM?this:super.createRenderRoot()}doRenderContent(){return this.data&&0!=this.data.length||!this.showNoDataSetAnimation?R`${this.data.map((t=>R`${this.getSection(t)}`))}`:R`
          <div class="loading-indicator">
            <div></div>
            <div></div>
            <div></div>
          </div>
        `}getSection(t){var e;return R` <section class="release-note position-relative">
      <header class="timeline-decorator d-flex">
        <span class="release-version-badge border-box">${t.version}</span>
        <div class="release-title">${this.getReleaseHeaderName(t)}</div>
      </header>
      <ul class="change-log">
        ${null===(e=t.notes)||void 0===e?void 0:e.map((t=>R`${this.getReleaseNoteElement(t)}`))}
      </ul>
    </section>`}getReleaseHeaderName(t){var e="";return null!=t.pub_date&&t.pub_date&&(e+=this.dateFormatter(new Date(t.pub_date))),null!=t.name&&t.name&&(null!=t.pub_date&&(e+=" - "),e+=t.name),e}getReleaseNoteElement(t){if(!t)return R``;var e="",i="";if(-1!=t.indexOf("[")&&-1!=t.indexOf("]"))try{i=t.substring(t.indexOf("[")+1,t.indexOf("]")),e=t.substring(t.indexOf("]")+1)}catch(t){console.warn("Unable to parse",t)}e||(e=t),i||(i="Changed");var s=[e=e.trim()],n=!1;return(this.issueBaseUrl||this.issueLinkGenerator)&&this.issueMatching&&(n=!0,s=e.split(this.issueMatching)),R`
      <li class="change-log-list-entry d-flex">
        <div
          class="change-badge ${i?"change-badge-"+i.trim().toLocaleLowerCase():""} border-box"
        >
          ${this.changeTypeBadgeNameFunc(i)}
        </div>
        <div class="change-text">
          ${s.map((t=>{if(n){var e=t.match(this.issueMatching);if(e){var i=this.issueLinkGenerator?this.issueLinkGenerator(e[1]):new URL(e[1],this.issueBaseUrl).href;if(i)return R`<a class="change-text-link" href="${i}"
                    >${t}</a
                  >`}}return t}))}
        </div>
      </li>
    `}getDefaultIssueMatchingRegex(){return/(#\d+)/i}};var it;et.styles=((t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);return new X(i,Q)})`
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
  `,tt([G({type:Boolean})],et.prototype,"disableShadowDOM",void 0),tt([G({type:Boolean})],et.prototype,"showNoDataSetAnimation",void 0),tt([G({type:Array})],et.prototype,"data",void 0),tt([G()],et.prototype,"changeTypeBadgeNameFunc",void 0),tt([G()],et.prototype,"dateFormatter",void 0),tt([G({type:RegExp,converter:t=>{if(t)return new RegExp(t)}})],et.prototype,"issueMatching",void 0),tt([G({type:String})],et.prototype,"issueBaseUrl",void 0),tt([G()],et.prototype,"issueLinkGenerator",void 0),et=tt([(it="release-notes-displayer",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(it,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(it,t))],et);export{et as ReleaseNotesDisplayer};
