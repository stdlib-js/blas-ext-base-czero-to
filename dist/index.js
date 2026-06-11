"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(h,s){
var T=require('@stdlib/strided-base-reinterpret-complex64/dist');function j(e,r,i,z){var u,a,t;if(e<=0)return r;for(u=T(r,0),a=z*2,i*=2,t=0;t<e;t++)u[a]=t,u[a+1]=0,a+=i;return r}s.exports=j
});var c=o(function(k,q){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=n();function l(e,r,i){return x(e,r,i,m(e,i))}q.exports=l
});var y=o(function(A,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=c(),_=n();R(f,"ndarray",_);p.exports=f
});var w=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=y(),v,d=E(w(__dirname,"./native.js"));O(d)?v=b:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
