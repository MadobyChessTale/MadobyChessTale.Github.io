System.register([],(function(t){"use strict";return{execute:function(){var e,a={exports:{}};e=a,function(){function t(t,e){return function(t){if("string"!=typeof t||!t.match(/^data:image\/webp;base64,/i))throw new Error("Failed to decode WebP Base64 URL");return window.atob(t.substring("data:image/webp;base64,".length))}("string"==typeof t&&/^data:image\/webp/.test(t)?t:t.toDataURL("image/webp",e))}function a(t){let e=t.indexOf("VP8",12);if(-1===e)throw new Error("Bad image format, does this browser support WebP?");let a=!1;for(;e<t.length-8;){let r,n;switch(n=t.substring(e,e+4),e+=4,r=((i=t.substring(e,e+4)).charCodeAt(0)|i.charCodeAt(1)<<8|i.charCodeAt(2)<<16|i.charCodeAt(3)<<24)>>>0,e+=4,n){case"VP8 ":return{frame:t.substring(e,e+r),hasAlpha:a};case"ALPH":a=!0}e+=r,0!=(1&r)&&e++}var i;throw new Error("Failed to find VP8 keyframe in WebP image, is this image mistakenly encoded in the Lossless WebP format?")}function i(t){this.value=t}function r(t){this.value=t}function n(t,e,a){if(Array.isArray(a))for(let i=0;i<a.length;i++)n(t,e,a[i]);else if("string"==typeof a)t.writeString(a);else if(a instanceof Uint8Array)t.writeBytes(a);else{if(!a.id)throw new Error("Bad EBML datatype "+typeof a.data);if(a.offset=t.pos+e,t.writeUnsignedIntBE(a.id),Array.isArray(a.data)){let i,r,o;-1===a.size?t.writeByte(255):-2===a.size?(i=t.pos,t.writeBytes([15,255,255,255,255])):(i=t.pos,t.writeBytes([0,0,0,0])),r=t.pos,a.dataOffset=r+e,n(t,e,a.data),-1!==a.size&&-2!==a.size&&(o=t.pos,a.size=o-r,t.seek(i),t.writeEBMLVarIntWidth(a.size,4),t.seek(o))}else if("string"==typeof a.data)t.writeEBMLVarInt(a.data.length),a.dataOffset=t.pos+e,t.writeString(a.data);else if("number"==typeof a.data)a.size||(a.size=t.measureUnsignedInt(a.data)),t.writeEBMLVarInt(a.size),a.dataOffset=t.pos+e,t.writeUnsignedIntBE(a.data,a.size);else if(a.data instanceof r)t.writeEBMLVarInt(8),a.dataOffset=t.pos+e,t.writeDoubleBE(a.data.value);else if(a.data instanceof i)t.writeEBMLVarInt(4),a.dataOffset=t.pos+e,t.writeFloatBE(a.data.value);else{if(!(a.data instanceof Uint8Array))throw new Error("Bad EBML datatype "+typeof a.data);t.writeEBMLVarInt(a.data.byteLength),a.dataOffset=t.pos+e,t.writeBytes(a.data)}}}let o=function(e,i){return function(o){let s,f,d=!1,u=0,h=0,l=null,w=null,c=null,p=[],y=0,g=0,m={quality:.95,transparent:!1,alphaQuality:void 0,fileWriter:null,fd:null,frameDuration:null,frameRate:null},b={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},B={id:17545,data:new r(0)},E=[],A=new i(o.fileWriter||o.fd);function U(t){return t-s.dataOffset}function M(){f=function(){let t={id:21420,size:5,data:0},e={id:290298740,data:[]};for(let a in b){let i=b[a];i.positionEBML=Object.create(t),e.data.push({id:19899,data:[{id:21419,data:i.id},i.positionEBML]})}return e}();let t={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:"webm-writer-js"},{id:22337,data:"webm-writer-js"},B]},a=[{id:176,data:u},{id:186,data:h}];o.transparent&&a.push({id:21440,data:1});let i={id:374648427,data:[{id:174,data:[{id:215,data:1},{id:29637,data:1},{id:156,data:0},{id:2274716,data:"und"},{id:134,data:"V_VP8"},{id:2459272,data:"VP8"},{id:131,data:1},{id:224,data:a}]}]};s={id:408125543,size:-2,data:[f,t,i]};let r=new e(256);n(r,A.pos,[{id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:"webm"},{id:17031,data:2},{id:17029,data:2}]},s]),A.write(r.getAsDataArray()),b.SegmentInfo.positionEBML.data=U(t.offset),b.Tracks.positionEBML.data=U(i.offset),d=!0}function L(t){return t.alpha?function(t){let a,i,r=new e(4);if(!(t.trackNumber>0&&t.trackNumber<127))throw new Error("TrackNumber must be > 0 and < 127");return r.writeEBMLVarInt(t.trackNumber),r.writeU16BE(t.timecode),r.writeByte(0),a={id:161,data:[r.getAsDataArray(),t.frame]},i={id:30113,data:[{id:166,data:[{id:238,data:1},{id:165,data:t.alpha}]}]},{id:160,data:[a,i]}}(t):function(t){let a=new e(4);if(!(t.trackNumber>0&&t.trackNumber<127))throw new Error("TrackNumber must be > 0 and < 127");return a.writeEBMLVarInt(t.trackNumber),a.writeU16BE(t.timecode),a.writeByte(128),{id:163,data:[a.getAsDataArray(),t.frame]}}(t)}function k(){if(0===p.length)return;let t=0;for(let e=0;e<p.length;e++)t+=p[e].frame.length+(p[e].alpha?p[e].alpha.length:0);let a=new e(t+64*p.length),i=function(t){return{id:524531317,data:[{id:231,data:Math.round(t.timecode)}]}}({timecode:Math.round(y)});for(let e=0;e<p.length;e++)i.data.push(L(p[e]));var r,o,s;n(a,A.pos,i),A.write(a.getAsDataArray()),r=1,o=Math.round(y),s=i.offset,E.push({id:187,data:[{id:179,data:o},{id:183,data:[{id:247,data:r},{id:241,data:U(s)}]}]}),p=[],y+=g,g=0}this.addFrame=function(e,i,r){d||(u=e.width||0,h=e.height||0,M());let n,s=a(t(e,o.quality)),f=null;n=r||("number"==typeof i?i:o.frameDuration),o.transparent&&(i instanceof HTMLCanvasElement||"string"==typeof i?f=i:s.hasAlpha&&(f=function(t){null!==l&&l.width===t.width&&l.height===t.height||(l=document.createElement("canvas"),l.width=t.width,l.height=t.height,w=l.getContext("2d"),c=w.createImageData(l.width,l.height));let e=t.getContext("2d").getImageData(0,0,t.width,t.height).data,a=c.data,i=0,r=t.width*t.height*4;for(let n=3;n<r;n+=4){let t=e[n];a[i++]=t,a[i++]=t,a[i++]=t,a[i++]=255}return w.putImageData(c,0,0),l}(e))),function(t){t.trackNumber=1,t.timecode=Math.round(g),p.push(t),g+=t.duration,g>=5e3&&k()}({frame:s.frame,duration:n,alpha:f?a(t(f,o.alphaQuality)).frame:null})},this.complete=function(){return d||M(),k(),function(){let t={id:475249515,data:E},a=new e(16+32*E.length);n(a,A.pos,t),A.write(a.getAsDataArray()),b.Cues.positionEBML.data=U(t.offset)}(),function(){let t=new e(f.size),a=A.pos;n(t,f.dataOffset,f.data),A.seek(f.dataOffset),A.write(t.getAsDataArray()),A.seek(a)}(),function(){let t=new e(8),a=A.pos;t.writeDoubleBE(y),A.seek(B.dataOffset),A.write(t.getAsDataArray()),A.seek(a)}(),function(){let t=new e(10),a=A.pos;t.writeUnsignedIntBE(s.id),t.writeEBMLVarIntWidth(A.pos-s.dataOffset,5),A.seek(s.offset),A.write(t.getAsDataArray()),A.seek(a)}(),A.complete("video/webm")},this.getWrittenSize=function(){return A.length},o=function(t,e){let a={};return[t,e].forEach((function(t){for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])})),a}(m,o||{}),function(){if(!o.frameDuration){if(!o.frameRate)throw new Error("Missing required frameDuration or frameRate setting");o.frameDuration=1e3/o.frameRate}o.quality=Math.max(Math.min(o.quality,.99999),0),void 0===o.alphaQuality?o.alphaQuality=o.quality:o.alphaQuality=Math.max(Math.min(o.alphaQuality,.99999),0)}()}};e.exports=o}();var i={exports:{}};!function(t){!function(){let e=function(t){this.data=new Uint8Array(t),this.pos=0};e.prototype.seek=function(t){this.pos=t},e.prototype.writeBytes=function(t){for(let e=0;e<t.length;e++)this.data[this.pos++]=t[e]},e.prototype.writeByte=function(t){this.data[this.pos++]=t},e.prototype.writeU8=e.prototype.writeByte,e.prototype.writeU16BE=function(t){this.data[this.pos++]=t>>8,this.data[this.pos++]=t},e.prototype.writeDoubleBE=function(t){let e=new Uint8Array(new Float64Array([t]).buffer);for(let a=e.length-1;a>=0;a--)this.writeByte(e[a])},e.prototype.writeFloatBE=function(t){let e=new Uint8Array(new Float32Array([t]).buffer);for(let a=e.length-1;a>=0;a--)this.writeByte(e[a])},e.prototype.writeString=function(t){for(let e=0;e<t.length;e++)this.data[this.pos++]=t.charCodeAt(e)},e.prototype.writeEBMLVarIntWidth=function(t,e){switch(e){case 1:this.writeU8(128|t);break;case 2:this.writeU8(64|t>>8),this.writeU8(t);break;case 3:this.writeU8(32|t>>16),this.writeU8(t>>8),this.writeU8(t);break;case 4:this.writeU8(16|t>>24),this.writeU8(t>>16),this.writeU8(t>>8),this.writeU8(t);break;case 5:this.writeU8(8|t/4294967296&7),this.writeU8(t>>24),this.writeU8(t>>16),this.writeU8(t>>8),this.writeU8(t);break;default:throw new Error("Bad EBML VINT size "+e)}},e.prototype.measureEBMLVarInt=function(t){if(t<127)return 1;if(t<16383)return 2;if(t<2097151)return 3;if(t<268435455)return 4;if(t<34359738367)return 5;throw new Error("EBML VINT size not supported "+t)},e.prototype.writeEBMLVarInt=function(t){this.writeEBMLVarIntWidth(t,this.measureEBMLVarInt(t))},e.prototype.writeUnsignedIntBE=function(t,e){switch(void 0===e&&(e=this.measureUnsignedInt(t)),e){case 5:this.writeU8(Math.floor(t/4294967296));case 4:this.writeU8(t>>24);case 3:this.writeU8(t>>16);case 2:this.writeU8(t>>8);case 1:this.writeU8(t);break;default:throw new Error("Bad UINT size "+e)}},e.prototype.measureUnsignedInt=function(t){return t<256?1:t<65536?2:t<1<<24?3:t<4294967296?4:5},e.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw new Error("ArrayBufferDataStream's pos lies beyond end of buffer")},t.exports=e}()}(i);var r={exports:{}};!function(t){!function(){let e=function(t){return function(e){let a=[],i=Promise.resolve(),r=null,n=null;function o(t){return new Promise((function(e,a){let i=new FileReader;i.addEventListener("loadend",(function(){e(i.result)})),i.readAsArrayBuffer(t)}))}function s(t){return new Promise((function(e,a){t instanceof Uint8Array?e(t):t instanceof ArrayBuffer||ArrayBuffer.isView(t)?e(new Uint8Array(t)):t instanceof Blob?e(o(t).then((function(t){return new Uint8Array(t)}))):e(o(new Blob([t])).then((function(t){return new Uint8Array(t)})))}))}function f(t){let e=t.byteLength||t.length||t.size;if(!Number.isInteger(e))throw new Error("Failed to determine size of element");return e}e&&"FileWriter"===e.constructor.name?r=e:t&&e&&(n=e),this.pos=0,this.length=0,this.seek=function(t){if(t<0)throw new Error("Offset may not be negative");if(isNaN(t))throw new Error("Offset may not be NaN");if(t>this.length)throw new Error("Seeking beyond the end of file is not allowed");this.pos=t},this.write=function(e){let o={offset:this.pos,data:e,length:f(e)},d=o.offset>=this.length;this.pos+=o.length,this.length=Math.max(this.length,this.pos),i=i.then((function(){if(n)return new Promise((function(e,a){s(o.data).then((function(a){let i=0,r=Buffer.from(a.buffer),s=function(a,r,f){i+=r,i>=f.length?e():t.write(n,f,i,f.length-i,o.offset+i,s)};t.write(n,r,0,r.length,o.offset,s)}))}));if(r)return new Promise((function(t,e){r.onwriteend=t,r.seek(o.offset),r.write(new Blob([o.data]))}));if(!d)for(let t=0;t<a.length;t++){let e=a[t];if(!(o.offset+o.length<=e.offset||o.offset>=e.offset+e.length)){if(o.offset<e.offset||o.offset+o.length>e.offset+e.length)throw new Error("Overwrite crosses blob boundaries");return o.offset==e.offset&&o.length==e.length?void(e.data=o.data):s(e.data).then((function(t){return e.data=t,s(o.data)})).then((function(t){o.data=t,e.data.set(o.data,o.offset-e.offset)}))}}a.push(o)}))},this.complete=function(t){return i=n||r?i.then((function(){return null})):i.then((function(){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].data);return new Blob(e,{type:t})})),i}}};t.exports=e}()}(r);var n=a.exports(i.exports,r.exports(null));t("default",class{constructor(t=1e3){var e,a,i;i=void 0,(a="video")in(e=this)?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,this.frameTime=t,this.video=new n({quality:.8,fileWriter:null,fd:null,frameDuration:1e3,transparent:!1})}add(t,e){const a=t.canvas;this.video.addFrame(a,e*this.frameTime)}async render(){const t=await this.video.complete(),e=Date.now();return new File([t],`board_${e}.webm`,{type:"video/webm",lastModified:e})}})}}}));
