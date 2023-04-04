/*! For license information please see index.[contentHash].js.LICENSE.txt */
(()=>{var e={812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(81),i=n.n(r),s=n(645),o=n.n(s),a=n(667),u=n.n(a),l=new URL(n(903),n.b),c=o()(i()),f=u()(l);c.push([e.id,"@font-face {\n  font-family: Montserrat;\n  src: url("+f+");\n}\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  /* line-height: 1.5; */\n  font-family: Montserrat;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.steps-tracker-svg {\n  width: 40vh;\n}\n\n.svg-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10vh;\n}",""]);const h=c},771:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),s=n(645),o=n.n(s)()(i());o.push([e.id,"/*\n ID SELECTORS\n*/\n#myForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 10vh;\n}\n\n#save_files {\n  width: 10vh;\n  height: 4vh;\n  color: white;\n  font-size: 30px;\n  background-color: #0078CC;\n  border: #0078CC;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n}\n\n/*\n CLASS SELECTORS\n*/\n.file-inputs {\n  display: flex;\n  justify-content: space-around;\n}\n\n.file-input {\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin: 20px;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 5px;\n\n  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),\n    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);\n}\n\n.logo {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 2vh;\n  margin-bottom: 5vh;\n}\n\n.svg-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 20vh;\n}\n\n.tracker-svg {\n  display: flex;\n  width: 50%;\n}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(o[u]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},460:function(e,t){var n,r;n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=t.IS_PAPA_WORKER||!1,i={},s=0,o={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1;if(w(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!w(r.transform)&&r.transform,r.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var n,r,a=(n=t.URL||t.webkitURL||null,r=e.toString(),o.BLOB_URL||(o.BLOB_URL=n.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=g,u.id=s++,i[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var d=null;return o.NODE_STREAM_INPUT,"string"==typeof n?(n=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(n),d=r.download?new l(r):new f(r)):!0===n.readable&&w(n.read)&&w(n.on)?d=new h(r):(t.File&&n instanceof File||n instanceof Object)&&(d=new c(r)),d.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",s="\r\n",a='"',u=a+a,l=!1,c=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(f=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var h=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return d(null,e,l);if("object"==typeof e[0])return d(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),d(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function d(e,t,n){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=s)}for(var c=0;c<t.length;c++){var f=a?e.length:t[c].length,h=!1,d=a?0===Object.keys(t[c]).length:0===t[c].length;if(n&&!a&&(h="greedy"===n?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===n&&a){for(var p=[],g=0;g<f;g++){var v=u?e[g]:g;p.push(t[c][v])}h=""===p.join("").trim()}if(!h){for(var y=0;y<f;y++){0<y&&!d&&(o+=i);var _=a&&u?e[y]:y;o+=m(t[c][_],y)}c<t.length-1&&(!n||0<f&&!d)&&(o+=s)}}return o}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;f&&"string"==typeof e&&f.test(e)&&(e="'"+e,r=!0);var s=e.toString().replace(h,u);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(s,o.BAD_DELIMITERS)||-1<s.indexOf(i)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?a+s+a:s}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!n&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=m,o.ParserHandle=d,o.NetworkStreamer=l,o.FileStreamer=c,o.StringStreamer=f,o.ReadableStreamStreamer=h,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var n=e.config||{},r=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this;function i(){if(0!==r.length){var t,n,i,u=r[0];if(w(e.before)){var l=e.before(u.file,u.inputElem);if("object"==typeof l){if("abort"===l.action)return"AbortError",t=u.file,n=u.inputElem,i=l.reason,void(w(e.error)&&e.error({name:"AbortError"},t,n,i));if("skip"===l.action)return void s();"object"==typeof l.config&&(u.instanceConfig=a.extend(u.instanceConfig,l.config))}else if("skip"===l)return void s()}var c=u.instanceConfig.complete;u.instanceConfig.complete=function(e){w(c)&&c(e,u.file,u.inputElem),s()},o.parse(u.file,u.instanceConfig)}else w(e.complete)&&e.complete()}function s(){r.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new d(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:a,workerId:o.WORKER_ID,finished:l});else if(w(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!l||!w(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e;this._sendError(new Error(n))}}function c(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize;return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function d(e){var t,n,r,i=Math.pow(2,53),s=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,c=0,f=0,h=!1,d=!1,g=[],v={data:[],errors:[],meta:{}};if(w(e.step)){var y=e.step;e.step=function(t){if(v=t,k())S();else{if(S(),0===v.data.length)return;c+=t.data.length,e.preview&&c>e.preview?n.abort():(v.data=v.data[0],y(v,l))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function S(){return v&&r&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(v.data=v.data.filter((function(e){return!b(e)}))),k()&&function(){if(v)if(Array.isArray(v.data[0])){for(var t=0;k()&&t<v.data.length;t++)v.data[t].forEach(n);v.data.splice(0,1)}else v.data.forEach(n);function n(t,n){w(e.transformHeader)&&(t=e.transformHeader(t,n)),g.push(t)}}(),function(){if(!v||!e.header&&!e.dynamicTyping&&!e.transform)return v;function t(t,n){var r,i=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,o=t[r];e.header&&(s=r>=g.length?"__parsed_extra":g[r]),e.transform&&(o=e.transform(o,s)),o=x(s,o),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(o)):i[s]=o}return e.header&&(r>g.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+r,f+n):r<g.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+r,f+n)),i}var n=1;return!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(t),n=v.data.length):v.data=t(v.data,0),e.header&&v.meta&&(v.meta.fields=g),f+=n,v}()}function k(){return e.header&&0===g.length}function x(t,n){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(a.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var r}function E(e,t,n,r){var i={type:e,code:t,message:n};void 0!==r&&(i.row=r),v.errors.push(i)}this.parse=function(i,s,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var n=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<r[0].length;if(1===r.length||s)return"\n";for(var o=0,a=0;a<r.length;a++)"\n"===r[a][0]&&o++;return o>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter);else{var l=function(t,n,r,i,s){var a,u,l,c;s=s||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var f=0;f<s.length;f++){var h=s[f],d=0,p=0,g=0;l=void 0;for(var v=new m({comments:i,delimiter:h,newline:n,preview:10}).parse(t),y=0;y<v.data.length;y++)if(r&&b(v.data[y]))g++;else{var _=v.data[y].length;p+=_,void 0!==l?0<_&&(d+=Math.abs(_-l),l=_):l=_}0<v.data.length&&(p/=v.data.length-g),(void 0===u||d<=u)&&(void 0===c||c<p)&&1.99<p&&(u=d,a=h,c=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=o.DefaultDelimiter),v.meta.delimiter=e.delimiter}var c=_(e);return e.preview&&e.header&&c.preview++,t=i,n=new m(c),v=n.parse(t,s,a),S(),h?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,n.abort(),t=w(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){l.streamer._halted?(h=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,n.abort(),v.meta.aborted=!0,w(e.complete)&&e.complete(v),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,s=e.step,a=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof n||-1<o.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,f=!1;this.parse=function(o,h,d){if("string"!=typeof o)throw new Error("Input must be a string");var m=o.length,g=n.length,v=r.length,y=i.length,_=w(s),b=[],S=[],k=[],x=c=0;if(!o)return K();if(e.header&&!h){var E=o.split(r)[0].split(n),C=[],R={},O=!1;for(var I in E){var T=E[I];w(e.transformHeader)&&(T=e.transformHeader(T,I));var A=T,M=R[T]||0;for(0<M&&(O=!0,A=T+"_"+M),R[T]=M+1;C.includes(A);)A=A+"_"+M;C.push(A)}if(O){var D=o.split(r);D[0]=C.join(n),o=D.join(r)}}if(u||!1!==u&&-1===o.indexOf(t)){for(var j=o.split(r),L=0;L<j.length;L++){if(k=j[L],c+=k.length,L!==j.length-1)c+=r.length;else if(d)return K();if(!i||k.substring(0,y)!==i){if(_){if(b=[],B(k.split(n)),W(),f)return K()}else B(k.split(n));if(a&&a<=L)return b=b.slice(0,a),K(!0)}}return K()}for(var N=o.indexOf(n,c),F=o.indexOf(r,c),P=new RegExp(p(l)+p(t),"g"),z=o.indexOf(t,c);;)if(o[c]!==t)if(i&&0===k.length&&o.substring(c,c+y)===i){if(-1===F)return K();c=F+v,F=o.indexOf(r,c),N=o.indexOf(n,c)}else if(-1!==N&&(N<F||-1===F))k.push(o.substring(c,N)),c=N+g,N=o.indexOf(n,c);else{if(-1===F)break;if(k.push(o.substring(c,F)),H(F+v),_&&(W(),f))return K();if(a&&b.length>=a)return K(!0)}else for(z=c,c++;;){if(-1===(z=o.indexOf(t,z+1)))return d||S.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),Q();if(z===m-1)return Q(o.substring(c,z).replace(P,t));if(t!==l||o[z+1]!==l){if(t===l||0===z||o[z-1]!==l){-1!==N&&N<z+1&&(N=o.indexOf(n,z+1)),-1!==F&&F<z+1&&(F=o.indexOf(r,z+1));var U=J(-1===F?N:Math.min(N,F));if(o.substr(z+1+U,g)===n){k.push(o.substring(c,z).replace(P,t)),o[c=z+1+U+g]!==t&&(z=o.indexOf(t,c)),N=o.indexOf(n,c),F=o.indexOf(r,c);break}var q=J(F);if(o.substring(z+1+q,z+1+q+v)===r){if(k.push(o.substring(c,z).replace(P,t)),H(z+1+q+v),N=o.indexOf(n,c),z=o.indexOf(t,c),_&&(W(),f))return K();if(a&&b.length>=a)return K(!0);break}S.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),z++}}else z++}return Q();function B(e){b.push(e),x=c}function J(e){var t=0;if(-1!==e){var n=o.substring(z+1,e);n&&""===n.trim()&&(t=n.length)}return t}function Q(e){return d||(void 0===e&&(e=o.substring(c)),k.push(e),c=m,B(k),_&&W()),K()}function H(e){c=e,B(k),k=[],F=o.indexOf(r,c)}function K(e){return{data:b,errors:S,meta:{delimiter:n,linebreak:r,aborted:f,truncated:!!e,cursor:x+(h||0)}}}function W(){s(K()),b=[],S=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(w(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!r);o++);delete t.results}else w(n.userChunk)&&(n.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=i[e];w(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function y(){throw new Error("Not implemented.")}function _(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=_(e[n]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data;if(void 0===o.WORKER_ID&&n&&(o.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(n.input,n.config),finished:!0});else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=o.parse(n.input,n.config);r&&t.postMessage({workerId:o.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(f.prototype=Object.create(f.prototype)).constructor=f,(h.prototype=Object.create(u.prototype)).constructor=h,o},void 0===(r=n.apply(t,[]))||(e.exports=r)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],a=0;a<e.length;a++){var u=e[a],l=r.base?u[0]+r.base:u[0],c=s[l]||0,f="".concat(l," ").concat(c);s[l]=c+1;var h=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)t[h].references++,t[h].updater(d);else{var p=i(d,r);r.byIndex=a,t.splice(a,0,{identifier:f,updater:p,references:1})}o.push(f)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=n(s[o]);t[a].references--}for(var u=r(e,i),l=0;l<s.length;l++){var c=n(s[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=u}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},903:(e,t,n)=>{"use strict";e.exports=n.p+"ceb11275ab638627a643.ttf"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),i=n.n(r),s=n(569),o=n.n(s),a=n(565),u=n.n(a),l=n(216),c=n.n(l),f=n(589),h=n.n(f),d=n(812),p={};p.styleTagTransform=h(),p.setAttributes=u(),p.insert=o().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=c(),t()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals;var m=n(771),g={};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(i)?i:String(i)),r)}var i}g.styleTagTransform=h(),g.setAttributes=u(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dbName=t,this.initializeDatabase()}var t,n;return t=e,n=[{key:"getAll",value:function(){return JSON.parse(localStorage.getItem(this.dbName))}},{key:"initializeDatabase",value:function(){localStorage.getItem(this.dbName)||localStorage.setItem(this.dbName,JSON.stringify([]))}},{key:"insertMany",value:function(e,t){var n=this;e.forEach((function(e){n.insert(e,t)}))}},{key:"insert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem(this.dbName));if(t){var r={};r.id=crypto.randomUUID(),r[t]=e,n.push(r)}else n.push(e);localStorage.setItem(this.dbName,JSON.stringify(n))}},{key:"find",value:function(e){return JSON.parse(localStorage.getItem(this.dbName)).filter((function(t){for(var n in e)if(t[n]!==e[n])return!1;return!0}))}},{key:"findOne",value:function(e){return JSON.parse(localStorage.getItem(this.dbName)).filter((function(t){for(var n in e)if(t[n]!==e[n])return!1;return!0}))[0]}},{key:"update",value:function(e,t){var n=JSON.parse(localStorage.getItem(this.dbName));n.data.forEach((function(n){var r=!0;for(var i in e)if(n[i]!==e[i]){r=!1;break}if(r)for(var s in t)n[s]=t[s]})),localStorage.setItem(this.dbName,JSON.stringify(n))}},{key:"remove",value:function(e){var t=JSON.parse(localStorage.getItem(this.dbName));t.data=t.data.filter((function(t){for(var n in e)if(t[n]!==e[n])return!0;return!1})),localStorage.setItem(this.dbName,JSON.stringify(t))}},{key:"clear",value:function(){localStorage.setItem(this.dbName,"[]")}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function S(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}var E=S((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));k(E,"Mentees","Mentees"),k(E,"Mentee_Survey","MenteeSurvey"),k(E,"Mentee_Selected_Questions","MenteeSelectedQuestions"),k(E,"Mentors","Mentors"),k(E,"Mentor_Survey","MentorSurvey"),k(E,"Mentor_Selected_Questions","MentorSelectedQuestions"),k(E,"Question_Pairs","QuestionPairs");var C=n(460),R=document.getElementById("myForm"),O=document.getElementById("menteeFile"),I=document.getElementById("mentorFile");function T(e,t,n){var r=[];(0,C.parse)(e,{complete:function(e){var i=e.data[0];t.insertMany(i,"question");for(var s=0;s<i.length;s++){for(var o={responses:[]},a=0;a<i.length;a++){var u=t.find({question:i[a]});o.responses.push({question:u[0].id,answer:e.data[s][a]})}r[s-1]=o}n.insertMany(r,"data")}})}R.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear();var t=new _(E.Mentee_Survey),n=new _(E.Mentees),r=new _(E.Mentor_Survey),i=new _(E.Mentors);localStorage.setItem("UserProfilesCreated",JSON.stringify(!1)),T(O.files[0],t,n),T(I.files[0],r,i),window.location.href="./question-selection.html"}))})()})();