(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bac3e32a"],{"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),s=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),f=Math.max,d=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=n.REPLACE_KEEPS_$0,I=x?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!x&&E||"string"===typeof n&&-1===n.indexOf(I)){var i=r(e,t,this,n);if(i.done)return i.value}var c=a(t),v=String(this),p="function"===typeof n;p||(n=String(n));var g=c.global;if(g){var R=c.unicode;c.lastIndex=0}var b=[];while(1){var S=u(c,v);if(null===S)break;if(b.push(S),!g)break;var w=String(S[0]);""===w&&(c.lastIndex=l(v,o(c.lastIndex),R))}for(var $="",m=0,C=0;C<b.length;C++){S=b[C];for(var y=String(S[0]),T=f(d(s(S.index),v.length),0),P=[],A=1;A<S.length;A++)P.push(h(S[A]));var U=S.groups;if(p){var N=[y].concat(P,T,v);void 0!==U&&N.push(U);var O=String(n.apply(void 0,N))}else O=_(y,v,T,P,U,n);T>=m&&($+=v.slice(m,T)+O,m=T+y.length)}return $+v.slice(m)}];function _(t,r,n,a,o,s){var c=n+t.length,l=a.length,u=g;return void 0!==o&&(o=i(o),u=p),e.call(s,u,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=v(u/10);return 0===f?e:f<=l?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}s=a[u-1]}return void 0===s?"":s}))}}))},5780:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"windows-10"},[r("div",{staticClass:"progress"},[t._m(0),r("div",{staticClass:"progress-text"},[r("span",[t._v(t._s(t.nowWorking))]),r("span",[t._v(t._s(t.progressInfo))]),r("span",[t._v(t._s(t.doNotTurnOff))])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"progress-indicator"},[r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"})])}],i=(r("ac1f"),r("5319"),r("3276")),o={name:"windows-10",data:function(){return{timer:this.$store.state.timer||i["a"].timer,locale:this.$store.state.locale||i["a"].locale,locales:r("d7a3"),progress:0,progressInterval:void 0}},computed:{nowWorking:function(){return this.locales[this.locale].nowWorking},doNotTurnOff:function(){return this.locales[this.locale].doNotTurnOff},progressInfo:function(){var t=this.locales[this.locale].progressInfo;return t.replace(/{progress}/g,this.progress)}},mounted:function(){var t=this,e=60*this.timer*1e3,r=500,n=0;this.progressInterval=setInterval((function(){n>e&&(t.progress=100,clearInterval(t.progressInterval)),t.progress=Math.floor(n/e*100),n+=500}),r)}},s=o,c=(r("f70d"),r("2877")),l=Object(c["a"])(s,n,a,!1,null,"152c3be5",null);e["default"]=l.exports},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=c||u||l;f&&(s=function(t){var e,r,a,s,f=this,d=l&&f.sticky,v=n.call(f),p=f.source,g=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),r=new RegExp("^(?:"+p+")",v)),u&&(r=new RegExp("^"+p+"$(?!\\s)",v)),c&&(e=f.lastIndex),a=i.call(d?r:f,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:c&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=s},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d1e2:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),s=r("9112"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var p=i(t),g=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=g&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!g||!h||"replace"===t&&(!l||!u||d)||"split"===t&&!v){var x=/./[p],E=r(p,""[t],(function(t,e,r,n,a){return e.exec===o?g&&!a?{done:!0,value:x.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),I=E[0],_=E[1];n(String.prototype,t,I),n(RegExp.prototype,p,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}f&&s(RegExp.prototype[p],"sham",!0)}},f70d:function(t,e,r){"use strict";var n=r("d1e2"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-bac3e32a-legacy.26e4eceb.js.map