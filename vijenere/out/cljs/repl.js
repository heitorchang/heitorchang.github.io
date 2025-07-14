// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7219){
var map__7220 = p__7219;
var map__7220__$1 = (((((!((map__7220 == null))))?(((((map__7220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7220):map__7220);
var m = map__7220__$1;
var n = cljs.core.get.call(null,map__7220__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7222_7254 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7223_7255 = null;
var count__7224_7256 = (0);
var i__7225_7257 = (0);
while(true){
if((i__7225_7257 < count__7224_7256)){
var f_7258 = cljs.core._nth.call(null,chunk__7223_7255,i__7225_7257);
cljs.core.println.call(null,"  ",f_7258);


var G__7259 = seq__7222_7254;
var G__7260 = chunk__7223_7255;
var G__7261 = count__7224_7256;
var G__7262 = (i__7225_7257 + (1));
seq__7222_7254 = G__7259;
chunk__7223_7255 = G__7260;
count__7224_7256 = G__7261;
i__7225_7257 = G__7262;
continue;
} else {
var temp__5753__auto___7263 = cljs.core.seq.call(null,seq__7222_7254);
if(temp__5753__auto___7263){
var seq__7222_7264__$1 = temp__5753__auto___7263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7222_7264__$1)){
var c__4556__auto___7265 = cljs.core.chunk_first.call(null,seq__7222_7264__$1);
var G__7266 = cljs.core.chunk_rest.call(null,seq__7222_7264__$1);
var G__7267 = c__4556__auto___7265;
var G__7268 = cljs.core.count.call(null,c__4556__auto___7265);
var G__7269 = (0);
seq__7222_7254 = G__7266;
chunk__7223_7255 = G__7267;
count__7224_7256 = G__7268;
i__7225_7257 = G__7269;
continue;
} else {
var f_7270 = cljs.core.first.call(null,seq__7222_7264__$1);
cljs.core.println.call(null,"  ",f_7270);


var G__7271 = cljs.core.next.call(null,seq__7222_7264__$1);
var G__7272 = null;
var G__7273 = (0);
var G__7274 = (0);
seq__7222_7254 = G__7271;
chunk__7223_7255 = G__7272;
count__7224_7256 = G__7273;
i__7225_7257 = G__7274;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7275 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7275);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7275)))?cljs.core.second.call(null,arglists_7275):arglists_7275));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7226_7276 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7227_7277 = null;
var count__7228_7278 = (0);
var i__7229_7279 = (0);
while(true){
if((i__7229_7279 < count__7228_7278)){
var vec__7240_7280 = cljs.core._nth.call(null,chunk__7227_7277,i__7229_7279);
var name_7281 = cljs.core.nth.call(null,vec__7240_7280,(0),null);
var map__7243_7282 = cljs.core.nth.call(null,vec__7240_7280,(1),null);
var map__7243_7283__$1 = (((((!((map__7243_7282 == null))))?(((((map__7243_7282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7243_7282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7243_7282):map__7243_7282);
var doc_7284 = cljs.core.get.call(null,map__7243_7283__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7285 = cljs.core.get.call(null,map__7243_7283__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7281);

cljs.core.println.call(null," ",arglists_7285);

if(cljs.core.truth_(doc_7284)){
cljs.core.println.call(null," ",doc_7284);
} else {
}


var G__7286 = seq__7226_7276;
var G__7287 = chunk__7227_7277;
var G__7288 = count__7228_7278;
var G__7289 = (i__7229_7279 + (1));
seq__7226_7276 = G__7286;
chunk__7227_7277 = G__7287;
count__7228_7278 = G__7288;
i__7229_7279 = G__7289;
continue;
} else {
var temp__5753__auto___7290 = cljs.core.seq.call(null,seq__7226_7276);
if(temp__5753__auto___7290){
var seq__7226_7291__$1 = temp__5753__auto___7290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7226_7291__$1)){
var c__4556__auto___7292 = cljs.core.chunk_first.call(null,seq__7226_7291__$1);
var G__7293 = cljs.core.chunk_rest.call(null,seq__7226_7291__$1);
var G__7294 = c__4556__auto___7292;
var G__7295 = cljs.core.count.call(null,c__4556__auto___7292);
var G__7296 = (0);
seq__7226_7276 = G__7293;
chunk__7227_7277 = G__7294;
count__7228_7278 = G__7295;
i__7229_7279 = G__7296;
continue;
} else {
var vec__7245_7297 = cljs.core.first.call(null,seq__7226_7291__$1);
var name_7298 = cljs.core.nth.call(null,vec__7245_7297,(0),null);
var map__7248_7299 = cljs.core.nth.call(null,vec__7245_7297,(1),null);
var map__7248_7300__$1 = (((((!((map__7248_7299 == null))))?(((((map__7248_7299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7248_7299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7248_7299):map__7248_7299);
var doc_7301 = cljs.core.get.call(null,map__7248_7300__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7302 = cljs.core.get.call(null,map__7248_7300__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7298);

cljs.core.println.call(null," ",arglists_7302);

if(cljs.core.truth_(doc_7301)){
cljs.core.println.call(null," ",doc_7301);
} else {
}


var G__7303 = cljs.core.next.call(null,seq__7226_7291__$1);
var G__7304 = null;
var G__7305 = (0);
var G__7306 = (0);
seq__7226_7276 = G__7303;
chunk__7227_7277 = G__7304;
count__7228_7278 = G__7305;
i__7229_7279 = G__7306;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__7250 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7251 = null;
var count__7252 = (0);
var i__7253 = (0);
while(true){
if((i__7253 < count__7252)){
var role = cljs.core._nth.call(null,chunk__7251,i__7253);
var temp__5753__auto___7307__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___7307__$1)){
var spec_7308 = temp__5753__auto___7307__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7308));
} else {
}


var G__7309 = seq__7250;
var G__7310 = chunk__7251;
var G__7311 = count__7252;
var G__7312 = (i__7253 + (1));
seq__7250 = G__7309;
chunk__7251 = G__7310;
count__7252 = G__7311;
i__7253 = G__7312;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__7250);
if(temp__5753__auto____$1){
var seq__7250__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7250__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7250__$1);
var G__7313 = cljs.core.chunk_rest.call(null,seq__7250__$1);
var G__7314 = c__4556__auto__;
var G__7315 = cljs.core.count.call(null,c__4556__auto__);
var G__7316 = (0);
seq__7250 = G__7313;
chunk__7251 = G__7314;
count__7252 = G__7315;
i__7253 = G__7316;
continue;
} else {
var role = cljs.core.first.call(null,seq__7250__$1);
var temp__5753__auto___7317__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___7317__$2)){
var spec_7318 = temp__5753__auto___7317__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7318));
} else {
}


var G__7319 = cljs.core.next.call(null,seq__7250__$1);
var G__7320 = null;
var G__7321 = (0);
var G__7322 = (0);
seq__7250 = G__7319;
chunk__7251 = G__7320;
count__7252 = G__7321;
i__7253 = G__7322;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__7323 = cljs.core.conj.call(null,via,t);
var G__7324 = cljs.core.ex_cause.call(null,t);
via = G__7323;
t = G__7324;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__7327 = datafied_throwable;
var map__7327__$1 = (((((!((map__7327 == null))))?(((((map__7327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7327):map__7327);
var via = cljs.core.get.call(null,map__7327__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__7327__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__7327__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__7328 = cljs.core.last.call(null,via);
var map__7328__$1 = (((((!((map__7328 == null))))?(((((map__7328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7328):map__7328);
var type = cljs.core.get.call(null,map__7328__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__7328__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__7328__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__7329 = data;
var map__7329__$1 = (((((!((map__7329 == null))))?(((((map__7329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7329):map__7329);
var problems = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__7330 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__7330__$1 = (((((!((map__7330 == null))))?(((((map__7330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7330):map__7330);
var top_data = map__7330__$1;
var source = cljs.core.get.call(null,map__7330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__7335 = phase;
var G__7335__$1 = (((G__7335 instanceof cljs.core.Keyword))?G__7335.fqn:null);
switch (G__7335__$1) {
case "read-source":
var map__7336 = data;
var map__7336__$1 = (((((!((map__7336 == null))))?(((((map__7336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7336):map__7336);
var line = cljs.core.get.call(null,map__7336__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7336__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__7338 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__7338__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7338,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7338);
var G__7338__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7338__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7338__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7338__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7338__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__7339 = top_data;
var G__7339__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7339,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7339);
var G__7339__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7339__$1);
var G__7339__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7339__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7339__$2);
var G__7339__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7339__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7339__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7339__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7339__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__7340 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7340,(0),null);
var method = cljs.core.nth.call(null,vec__7340,(1),null);
var file = cljs.core.nth.call(null,vec__7340,(2),null);
var line = cljs.core.nth.call(null,vec__7340,(3),null);
var G__7343 = top_data;
var G__7343__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__7343,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__7343);
var G__7343__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__7343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__7343__$1);
var G__7343__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__7343__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__7343__$2);
var G__7343__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7343__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7343__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7343__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7343__$4;
}

break;
case "execution":
var vec__7344 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7344,(0),null);
var method = cljs.core.nth.call(null,vec__7344,(1),null);
var file = cljs.core.nth.call(null,vec__7344,(2),null);
var line = cljs.core.nth.call(null,vec__7344,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__7326_SHARP_){
var or__4126__auto__ = (p1__7326_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__7326_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__7347 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7347__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7347,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7347);
var G__7347__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7347__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7347__$1);
var G__7347__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__7347__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7347__$2);
var G__7347__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7347__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7347__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7347__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7347__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7335__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7351){
var map__7352 = p__7351;
var map__7352__$1 = (((((!((map__7352 == null))))?(((((map__7352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7352):map__7352);
var triage_data = map__7352__$1;
var phase = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7352__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__7354 = phase;
var G__7354__$1 = (((G__7354 instanceof cljs.core.Keyword))?G__7354.fqn:null);
switch (G__7354__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7355_7364 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7356_7365 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7357_7366 = true;
var _STAR_print_fn_STAR__temp_val__7358_7367 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7357_7366);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7358_7367);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7349_SHARP_){
return cljs.core.dissoc.call(null,p1__7349_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7356_7365);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7355_7364);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7359_7368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7360_7369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7361_7370 = true;
var _STAR_print_fn_STAR__temp_val__7362_7371 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7361_7370);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7362_7371);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7350_SHARP_){
return cljs.core.dissoc.call(null,p1__7350_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7360_7369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7359_7368);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7354__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
