(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[10],{302:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function i(e,t){return a(e)||u(e,t)||c(e,t)||l()}function a(e){if(Array.isArray(e))return e}function u(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}function c(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function m(){}m.resetWarningCache=d;var y=function(){function e(e,t,n,r,o,i){if(i!==f){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:m,resetWarningCache:d};return n.PropTypes=n,n},v=p((function(e){e.exports=y()})),h=function(e){return null!==e&&"object"===n(e)},b=function(e){return h(e)&&"function"===typeof e.then},g=function(e){return h(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},E="[object Object]",w=function e(t,n){if(!h(t)||!h(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===E;if(o!==(Object.prototype.toString.call(n)===E))return!1;if(!o&&!r)return!1;var i=Object.keys(t),a=Object.keys(n);if(i.length!==a.length)return!1;for(var u={},c=0;c<i.length;c+=1)u[i[c]]=!0;for(var s=0;s<a.length;s+=1)u[a[s]]=!0;var l=Object.keys(u);if(l.length!==i.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},S=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},j="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",O=function(e){if(null===e||g(e))return e;throw new Error(j)},P=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(O)};var t=O(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},C=t.createContext(null);C.displayName="ElementsContext";var k=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},x=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useRef(!1),u=t.useRef(!0),c=t.useMemo((function(){return P(n)}),[n]),s=i(t.useState((function(){return{stripe:null,elements:null}})),2),l=s[0],p=s[1],f=S(n),d=S(r);return null!==f&&(f!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),w(r,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),a.current||("sync"===c.tag&&(a.current=!0,p({stripe:c.stripe,elements:c.stripe.elements(r)})),"async"===c.tag&&(a.current=!0,c.stripePromise.then((function(e){e&&u.current&&p({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){u.current=!1}}),[]),t.useEffect((function(){var e=l.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.4.1"}),e.registerAppInfo({name:"react-stripe-js",version:"1.4.1",url:"https://stripe.com/docs/stripe-js/react"}))}),[l.stripe]),t.createElement(C.Provider,{value:l},o)};x.propTypes={stripe:v.any,options:v.object};var R=function(e){var n=t.useContext(C);return k(n,e)},A=function(){return R("calls useElements()").elements},T=function(){return R("calls useStripe()").stripe},_=function(e){return(0,e.children)(R("mounts <ElementsConsumer>"))};_.propTypes={children:v.func.isRequired};var B=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},I=function(e){return h(e)?(e.paymentRequest,o(e,["paymentRequest"])):{}},N=function(){},L=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},q=function(e,n){var r="".concat(L(e),"Element"),o=n?function(e){R("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,i=n.className,a=n.options,u=void 0===a?{}:a,c=n.onBlur,s=void 0===c?N:c,l=n.onFocus,p=void 0===l?N:l,f=n.onReady,d=void 0===f?N:f,m=n.onChange,y=void 0===m?N:m,v=n.onEscape,h=void 0===v?N:v,b=n.onClick,g=void 0===b?N:b,E=R("mounts <".concat(r,">")).elements,S=t.useRef(null),j=t.useRef(null),O=B(d),P=B(s),C=B(p),k=B(g),x=B(y),A=B(h);t.useLayoutEffect((function(){if(null==S.current&&E&&null!=j.current){var t=E.create(e,u);S.current=t,t.mount(j.current),t.on("ready",(function(){return O(t)})),t.on("change",x),t.on("blur",P),t.on("focus",C),t.on("escape",A),t.on("click",k)}}));var T=t.useRef(u);return t.useEffect((function(){T.current&&T.current.paymentRequest!==u.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=I(u);0===Object.keys(e).length||w(e,I(T.current))||S.current&&(S.current.update(e),T.current=u)}),[u]),t.useLayoutEffect((function(){return function(){S.current&&S.current.destroy()}}),[]),t.createElement("div",{id:o,className:i,ref:j})};return o.propTypes={id:v.string,className:v.string,onChange:v.func,onBlur:v.func,onFocus:v.func,onReady:v.func,onClick:v.func,options:v.object},o.displayName=r,o.__elementType=e,o},W="undefined"===typeof window,F=q("auBankAccount",W),M=q("card",W),U=q("cardNumber",W),D=q("cardExpiry",W),Y=q("cardCvc",W),$=q("fpxBank",W),H=q("iban",W),J=q("idealBank",W),z=q("p24Bank",W),V=q("epsBank",W),G=q("payment",W),K=q("paymentRequestButton",W),Q=q("afterpayClearpayMessage",W);e.AfterpayClearpayMessageElement=Q,e.AuBankAccountElement=F,e.CardCvcElement=Y,e.CardElement=M,e.CardExpiryElement=D,e.CardNumberElement=U,e.Elements=x,e.ElementsConsumer=_,e.EpsBankElement=V,e.FpxBankElement=$,e.IbanElement=H,e.IdealBankElement=J,e.P24BankElement=z,e.PaymentElement=G,e.PaymentRequestButtonElement=K,e.useElements=A,e.useStripe=T,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0))},409:function(e,t,n){"use strict";var r=n(1),o=n(5),i=n(0),a=(n(10),n(134)),u=n(706),c=n(42),s=n(196),l=i.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,p=e.component,f=void 0===p?"div":p,d=e.disablePointerEvents,m=void 0!==d&&d,y=e.disableTypography,v=void 0!==y&&y,h=e.position,b=e.variant,g=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),E=Object(s.b)()||{},w=b;return b&&E.variant,E&&!w&&(w=E.variant),i.createElement(s.a.Provider,{value:null},i.createElement(f,Object(r.a)({className:Object(a.a)(c.root,l,m&&c.disablePointerEvents,E.hiddenLabel&&c.hiddenLabel,"filled"===w&&c.filled,{start:c.positionStart,end:c.positionEnd}[h],"dense"===E.margin&&c.marginDense),ref:t},g),"string"!==typeof n||v?n:i.createElement(u.a,{color:"textSecondary"},n)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(l)},665:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)}))}}n.d(t,"a",(function(){return o}))},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,u=function(e){return null!==a?a:a=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var a=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();a&&e?console.warn(i):a||(a=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n}(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(u){return void n(u)}else t(null)}))},c=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.15.0",startTime:t})}(r,n),r},s=Promise.resolve().then((function(){return u(null)})),l=!1;s.catch((function(e){l||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l=!0;var r=Date.now();return s.then((function(e){return c(e,t,r)}))}}}]);
//# sourceMappingURL=10.0af71cdb.chunk.js.map