!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Prometheus={})}(this,(function(e){"use strict";var t=function(e,t){return function(){for(var r=new Array(arguments.length),o=0;o<r.length;o++)r[o]=arguments[o];return e.apply(t,r)}},r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function n(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function a(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function i(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var c={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!n(e)&&null!==e.constructor&&!n(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:a,isUndefined:n,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:i,isStream:function(e){return s(e)&&i(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,n){a(t[n])&&a(r)?t[n]=e(t[n],r):a(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)u(arguments[n],r);return t},extend:function(e,r,o){return u(r,(function(r,n){e[n]=o&&"function"==typeof r?t(r,o):r})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function f(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var l=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(c.isURLSearchParams(t))o=t.toString();else{var n=[];c.forEach(t,(function(e,t){null!=e&&(c.isArray(e)?t+="[]":e=[e],c.forEach(e,(function(e){c.isDate(e)?e=e.toISOString():c.isObject(e)&&(e=JSON.stringify(e)),n.push(f(t)+"="+f(e))})))})),o=n.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e};function p(){this.handlers=[]}p.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},p.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},p.prototype.forEach=function(e){c.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var h=p,d=function(e,t,r){return c.forEach(r,(function(r){e=r(e,t)})),e},m=function(e){return!(!e||!e.__CANCEL__)},y=function(e,t){c.forEach(e,(function(r,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[o])}))},g=function(e,t,r,o,n){return function(e,t,r,o,n){return e.config=t,r&&(e.code=r),e.request=o,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,o,n)},w=c.isStandardBrowserEnv()?{write:function(e,t,r,o,n,s){var a=[];a.push(e+"="+encodeURIComponent(t)),c.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),c.isString(o)&&a.push("path="+o),c.isString(n)&&a.push("domain="+n),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},v=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],b=c.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var o=e;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=c.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},E=function(e){return new Promise((function(t,r){var o=e.data,n=e.headers;c.isFormData(o)&&delete n["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";n.Authorization="Basic "+btoa(a+":"+i)}var u,f,p=(u=e.baseURL,f=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(f)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,f):f);if(s.open(e.method.toUpperCase(),l(p,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var o,n,a,i,u,f="getAllResponseHeaders"in s?(o=s.getAllResponseHeaders(),u={},o?(c.forEach(o.split("\n"),(function(e){if(i=e.indexOf(":"),n=c.trim(e.substr(0,i)).toLowerCase(),a=c.trim(e.substr(i+1)),n){if(u[n]&&v.indexOf(n)>=0)return;u[n]="set-cookie"===n?(u[n]?u[n]:[]).concat([a]):u[n]?u[n]+", "+a:a}})),u):u):null,l={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:f,config:e,request:s};!function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(g("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,l),s=null}},s.onabort=function(){s&&(r(g("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(g("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(g(t,e,"ECONNABORTED",s)),s=null},c.isStandardBrowserEnv()){var h=(e.withCredentials||b(p))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;h&&(n[e.xsrfHeaderName]=h)}if("setRequestHeader"in s&&c.forEach(n,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete n[t]:s.setRequestHeader(t,e)})),c.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),o||(o=null),s.send(o)}))},T={"Content-Type":"application/x-www-form-urlencoded"};function S(e,t){!c.isUndefined(e)&&c.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var x,O={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(x=E),x),transformRequest:[function(e,t){return y(t,"Accept"),y(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(S(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)?(S(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};O.headers={common:{Accept:"application/json, text/plain, */*"}},c.forEach(["delete","get","head"],(function(e){O.headers[e]={}})),c.forEach(["post","put","patch"],(function(e){O.headers[e]=c.merge(T)}));var N=O;function j(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var R=function(e){return j(e),e.headers=e.headers||{},e.data=d(e.data,e.headers,e.transformRequest),e.headers=c.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),c.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||N.adapter)(e).then((function(t){return j(e),t.data=d(t.data,t.headers,e.transformResponse),t}),(function(t){return m(t)||(j(e),t&&t.response&&(t.response.data=d(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},C=function(e,t){t=t||{};var r={},o=["url","method","data"],n=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return c.isPlainObject(e)&&c.isPlainObject(t)?c.merge(e,t):c.isPlainObject(t)?c.merge({},t):c.isArray(t)?t.slice():t}function u(o){c.isUndefined(t[o])?c.isUndefined(e[o])||(r[o]=i(void 0,e[o])):r[o]=i(e[o],t[o])}c.forEach(o,(function(e){c.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),c.forEach(n,u),c.forEach(s,(function(o){c.isUndefined(t[o])?c.isUndefined(e[o])||(r[o]=i(void 0,e[o])):r[o]=i(void 0,t[o])})),c.forEach(a,(function(o){o in t?r[o]=i(e[o],t[o]):o in e&&(r[o]=i(void 0,e[o]))}));var f=o.concat(n).concat(s).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return c.forEach(l,u),r};function U(e){this.defaults=e,this.interceptors={request:new h,response:new h}}U.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=C(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[R,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},U.prototype.getUri=function(e){return e=C(this.defaults,e),l(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},c.forEach(["delete","get","head","options"],(function(e){U.prototype[e]=function(t,r){return this.request(C(r||{},{method:e,url:t,data:(r||{}).data}))}})),c.forEach(["post","put","patch"],(function(e){U.prototype[e]=function(t,r,o){return this.request(C(o||{},{method:e,url:t,data:r}))}}));var q=U;function A(e){this.message=e}A.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},A.prototype.__CANCEL__=!0;var P=A;function D(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new P(e),t(r.reason))}))}D.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},D.source=function(){var e;return{token:new D((function(t){e=t})),cancel:e}};var L=D;function G(e){var r=new q(e),o=t(q.prototype.request,r);return c.extend(o,q.prototype,r),c.extend(o,r),o}var B=G(N);B.Axios=q,B.create=function(e){return G(C(B.defaults,e))},B.Cancel=P,B.CancelToken=L,B.isCancel=m,B.all=function(e){return Promise.all(e)},B.spread=function(e){return function(t){return e.apply(null,t)}},B.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var k=B,J=B;k.default=J;var _,$=k;!function(e){e.MATRIX="matrix",e.VECTOR="vector",e.SCALAR="scalar",e.STRING="string"}(_||(_={}));class F{constructor(e,t){if(e&&"string"!=typeof e)throw new Error("Wrong name format. Expected string.");if(t&&"object"!=typeof t)throw new Error("Wrong labels format. Expected object.");this.name=e,this.labels=t}static fromJSON(e){const t=e.__name__,r=Object.assign({},e);return delete r.__name__,new F(t,r)}toString(){return(this.name?this.name:"")+"{"+Object.keys(this.labels).map((e=>e+'="'+this.labels[e]+'"')).join(", ")+"}"}}class H{constructor(e,t){if("object"!=typeof e||"Date"!=e.constructor.name)throw new Error("Wrong time format. Expected Date.");if("number"!=typeof t)throw new Error("Wrong value format. Expected float.");this.time=e,this.value=t}static fromJSON(e){const t=new Date(1e3*e[0]),r=parseFloat(e[1]);return new H(t,r)}toString(){return this.time+": "+this.value}}class I{constructor(e,t){this.metric=e,this.values=t}static fromJSON(e){const t=e.metric?F.fromJSON(e.metric):null,r=e.values.map(H.fromJSON);return new I(t,r)}}class M{constructor(e,t){this.metric=e,this.value=t}static fromJSON(e){const t=e.metric?F.fromJSON(e.metric):null,r=H.fromJSON(e.value);return new M(t,r)}}class z{constructor(e,t){this.resultType=e,this.result=t}static fromJSON(e){const t=e.resultType;let r=null;switch(t){case _.MATRIX:r=e.result.map(I.fromJSON);break;case _.VECTOR:r=e.result.map(M.fromJSON);break;case _.SCALAR:case _.STRING:r=e.result;break;default:throw new Error(`Unexpected resultType: ${t}`)}return new z(t,r)}}class V{constructor(e,t,r,o,n,s,a,i){if(e&&"object"!=typeof e)throw new Error(`Unexpected format for discoveredLabels. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for labels. Got ${typeof t} instead of object`);if(r&&"string"!=typeof r)throw new Error(`Unexpected format for scrapePool. Got ${typeof r} instead of string`);if(o&&"string"!=typeof o)throw new Error(`Unexpected format for scrapeUrl. Got ${typeof o} instead of string`);if(n&&"string"!=typeof n)throw new Error(`Unexpected format for lastError. Got ${typeof n} instead of string`);if(s&&("object"!=typeof s||"Date"!=s.constructor.name))throw new Error(`Unexpected format for lastScrape. Got ${typeof s} instead of object`);if(a&&"number"!=typeof a)throw new Error(`Unexpected format for lastScrapeDuration. Got ${typeof a} instead of number`);if(i&&"string"!=typeof i)throw new Error(`Unexpected format for health. Got ${typeof i} instead of string`);this.discoveredLabels=e,this.labels=t,this.scrapePool=r,this.scrapeUrl=o,this.lastError=n,this.lastScrape=s,this.lastScrapeDuration=a,this.health=i}static fromJSON(e){return new V(e.discoveredLabels,e.labels,e.scrapePool,e.scrapeUrl,e.lastError,e.lastScrape?new Date(e.lastScrape):null,e.lastScrapeDuration?parseFloat(e.lastScrapeDuration):null,e.health)}}class X{constructor(e,t,r,o,n){if(e&&("object"!=typeof e||"Date"!=e.constructor.name))throw new Error(`Unexpected format for activeAt. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for annotations. Got ${typeof t} instead of object`);if(r&&"object"!=typeof r)throw new Error(`Unexpected format for labels. Got ${typeof r} instead of object`);if(n&&"number"!=typeof n)throw new Error(`Unexpected format for value. Got ${typeof n} instead of number`);this.activeAt=e,this.annotations=t,this.labels=r,this.state=o,this.value=n}static fromJSON(e){return new X(e.activeAt?new Date(e.activeAt):null,e.annotations,e.labels,_[e.state],e.value?parseFloat(e.value):null)}}class W{constructor(e,t,r,o,n,s,a,i){this.alerts=e,this.annotations=t,this.duration=r,this.health=o,this.labels=n,this.name=s,this.query=a,this.type=i}static fromJSON(e){return new W(e.alerts?e.alerts.map(X.fromJSON):[],e.annotations,e.duration,e.health,e.labels,e.name,e.query,e.type)}}class K{constructor(e,t,r,o){this.rules=e,this.file=t,this.interval=r,this.name=o}static fromJSON(e){return new K(e.rules?e.rules.map(W.fromJSON):[],e.file,e.interval,e.name)}}class Q{constructor(){this.baseURL="/api/v1/",this.headers={},this.auth=null,this.proxy=null,this.withCredentials=!1,this.timeout=1e4,this.warningHook=null}}e.PrometheusConnectionOptions=Q,e.PrometheusDriver=class{constructor(e){if(!(e=e||new Q).endpoint)throw"Endpoint is required";e.endpoint=e.endpoint.replace(/\/$/,""),e.baseURL=e.baseURL||"/api/v1/",e.withCredentials=e.withCredentials||!1,e.timeout=e.timeout||1e4,this.options=e}request(e,t,r,o){var n,s,a,i,u,c;return $.request({baseURL:this.options.endpoint+this.options.baseURL,url:t,method:e,params:r,data:o,headers:this.options.headers,auth:(null===(n=this.options.auth)||void 0===n?void 0:n.username)&&(null===(s=this.options.auth)||void 0===s?void 0:s.password)?{username:this.options.auth.username,password:this.options.auth.password}:null,proxy:(null===(a=this.options.proxy)||void 0===a?void 0:a.host)&&(null===(i=this.options.proxy)||void 0===i?void 0:i.port)?{host:null===(u=this.options.proxy)||void 0===u?void 0:u.host,port:null===(c=this.options.proxy)||void 0===c?void 0:c.port}:null,withCredentials:this.options.withCredentials,timeout:this.options.timeout}).then((e=>this.handleResponse(e))).catch((e=>this.handleResponse(e)))}handleResponse(e){const t=e.isAxiosError||!1;if(t&&(e=e.response),!e)throw{status:"error",errorType:"unexpected_error",error:"unexpected http error"};this.options.warningHook&&e.warnings&&e.warnings.length>0&&this.options.warningHook(e.warnings);const r=e.data;if(!r||null==r.status)throw{status:"error",errorType:"client_error",error:"unexpected client error"};if(t)throw e;return r.data}formatTimeToPrometheus(e,t){var r;if(e||(e=t),"number"==typeof e)return e/1e3;if("object"==typeof e&&"Date"==(null===(r=null==e?void 0:e.constructor)||void 0===r?void 0:r.name))return e.getTime()/1e3;throw new Error("Wrong time format. Expected number or Date.")}instantQuery(e,t){const r={query:e,time:this.formatTimeToPrometheus(t,new Date)};return this.request("GET","query",r).then((e=>z.fromJSON(e)))}rangeQuery(e,t,r,o){const n={query:e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r),step:o};return this.request("GET","query_range",n).then((e=>z.fromJSON(e)))}series(e,t,r){const o={"match[]":e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("GET","series",o).then((e=>e.map(F.fromJSON)))}labelNames(){return this.request("GET","labels")}labelValues(e){return this.request("GET",`label/${e}/values`)}targets(e){const t={query:e||"any"};return this.request("GET","targets",t).then((e=>({activeTargets:e.activeTargets?e.activeTargets.map(V.fromJSON):[],droppedTargets:e.droppedTargets?e.droppedTargets.map(V.fromJSON):[]})))}targetsMetadata(e,t,r){const o={match_target:e,metric:t,limit:r};return this.request("GET","targets/metadata",o)}metadata(e,t){const r={metric:e,limit:t};return this.request("GET","metadata",r)}rules(){return this.request("GET","rules").then((e=>(e.groups?e.groups:[]).map(K.fromJSON)))}alerts(){return this.request("GET","alerts").then((e=>(e.alerts?e.alerts:[]).map(X.fromJSON)))}alertmanagers(){return this.request("GET","alertmanagers")}status(){return this.request("GET","status/config")}statusFlags(){return this.request("GET","status/flags")}statusRuntimeInfo(){return this.request("GET","status/runtimeinfo")}statusBuildinfo(){return this.request("GET","status/buildinfo")}statusTSDB(){return this.request("GET","status/tsdb")}adminSnapshot(e){const t={skip_head:e};return this.request("POST","admin/tsdb/snapshot",t)}adminDeleteSeries(e,t,r){const o={"match[]":e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("POST","admin/tsdb/delete_series",o)}adminCleanTombstones(){return this.request("POST","admin/tsdb/clean_tombstones")}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=prometheus-query.umd.js.map
