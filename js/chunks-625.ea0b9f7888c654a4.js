"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{16848:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(85893),i=n(31996),l=n(25675),r=n.n(l);function u(e){e.website;var t,n,l=e.block;return(0,o.jsx)("section",{style:{backgroundColor:null===l||void 0===l?void 0:l.background},className:"flex-shrink-0",children:(0,o.jsx)("div",{className:(0,i.AK)((null===l||void 0===l?void 0:l.fullWidth)?"w-full":"container py-12 lg:py-14 xl:py-20","mx-auto"),children:(0,o.jsx)("div",{className:(0,i.AK)(!(null===l||void 0===l?void 0:l.fullWidth)&&"max-h-250 mx-auto","flex justify-center items-center"),children:(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.url)&&(0,o.jsx)("div",{className:(0,i.AK)("relative overflow-hidden w-full",(null===l||void 0===l?void 0:l.fullWidth)?"w-full h-60 md:h-80 lg:h-120 xl:h-150":(n=null===l||void 0===l?void 0:l.aspectRatio,"1:1"===n?"aspect-w-1 aspect-h-1":"2:3"===n?"aspect-w-2 aspect-h-3":"3:2"===n?"aspect-w-3 aspect-h-2":"aspect-w-16 aspect-h-9"),!(null===l||void 0===l?void 0:l.fullWidth)&&function(e){return"small"===e?"rounded-sm":"medium"===e?"rounded-md":"large"===e?"rounded-lg":""}(null===l||void 0===l?void 0:l.cornerRadius)),children:(0,o.jsx)(r(),{src:null===l||void 0===l?void 0:l.media.url,alt:null===l||void 0===l?void 0:l.media.author,layout:"fill",objectFit:(null===l||void 0===l?void 0:l.imageFit)||"cover",objectPosition:"".concat((null===l||void 0===l?void 0:l.imagePositionX)||"center"," ").concat((null===l||void 0===l?void 0:l.imagePositionY)||"center"),className:(0,i.AK)("w-full h-full")})})})})})}},57190:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(39274).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,d=e.disabled||!r,c=o(i.useState(!1),2),s=c[0],f=c[1],v=o(i.useState(null),2),m=v[0],p=v[1];i.useEffect((function(){if(r){if(d||s)return;if(m&&m.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=u.get(o)))return t;var i=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:l,elements:i},a.push(n),u.set(n,t),t}(n),i=o.id,l=o.observer,r=o.elements;return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),u.delete(i);var t=a.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&a.splice(t,1)}}}(m,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(o)}}}),[m,d,n,t,s]);var h=i.useCallback((function(){f(!1)}),[]);return[p,s,h]};var i=n(67294),l=n(9311),r="function"===typeof IntersectionObserver,u=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);