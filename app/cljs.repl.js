goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15180){
var map__15184 = p__15180;
var map__15184__$1 = cljs.core.__destructure_map(map__15184);
var m = map__15184__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15187_15443 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15188_15444 = null;
var count__15189_15445 = (0);
var i__15190_15446 = (0);
while(true){
if((i__15190_15446 < count__15189_15445)){
var f_15447 = chunk__15188_15444.cljs$core$IIndexed$_nth$arity$2(null, i__15190_15446);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15447], 0));


var G__15448 = seq__15187_15443;
var G__15449 = chunk__15188_15444;
var G__15450 = count__15189_15445;
var G__15451 = (i__15190_15446 + (1));
seq__15187_15443 = G__15448;
chunk__15188_15444 = G__15449;
count__15189_15445 = G__15450;
i__15190_15446 = G__15451;
continue;
} else {
var temp__5804__auto___15452 = cljs.core.seq(seq__15187_15443);
if(temp__5804__auto___15452){
var seq__15187_15453__$1 = temp__5804__auto___15452;
if(cljs.core.chunked_seq_QMARK_(seq__15187_15453__$1)){
var c__5525__auto___15454 = cljs.core.chunk_first(seq__15187_15453__$1);
var G__15455 = cljs.core.chunk_rest(seq__15187_15453__$1);
var G__15456 = c__5525__auto___15454;
var G__15457 = cljs.core.count(c__5525__auto___15454);
var G__15458 = (0);
seq__15187_15443 = G__15455;
chunk__15188_15444 = G__15456;
count__15189_15445 = G__15457;
i__15190_15446 = G__15458;
continue;
} else {
var f_15459 = cljs.core.first(seq__15187_15453__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15459], 0));


var G__15460 = cljs.core.next(seq__15187_15453__$1);
var G__15461 = null;
var G__15462 = (0);
var G__15463 = (0);
seq__15187_15443 = G__15460;
chunk__15188_15444 = G__15461;
count__15189_15445 = G__15462;
i__15190_15446 = G__15463;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15464 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_15464], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_15464)))?cljs.core.second(arglists_15464):arglists_15464)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15195_15477 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15196_15478 = null;
var count__15197_15479 = (0);
var i__15198_15480 = (0);
while(true){
if((i__15198_15480 < count__15197_15479)){
var vec__15210_15481 = chunk__15196_15478.cljs$core$IIndexed$_nth$arity$2(null, i__15198_15480);
var name_15482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210_15481,(0),null);
var map__15213_15483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210_15481,(1),null);
var map__15213_15484__$1 = cljs.core.__destructure_map(map__15213_15483);
var doc_15485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15213_15484__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15213_15484__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15482], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15486], 0));

if(cljs.core.truth_(doc_15485)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15485], 0));
} else {
}


var G__15488 = seq__15195_15477;
var G__15489 = chunk__15196_15478;
var G__15490 = count__15197_15479;
var G__15491 = (i__15198_15480 + (1));
seq__15195_15477 = G__15488;
chunk__15196_15478 = G__15489;
count__15197_15479 = G__15490;
i__15198_15480 = G__15491;
continue;
} else {
var temp__5804__auto___15492 = cljs.core.seq(seq__15195_15477);
if(temp__5804__auto___15492){
var seq__15195_15493__$1 = temp__5804__auto___15492;
if(cljs.core.chunked_seq_QMARK_(seq__15195_15493__$1)){
var c__5525__auto___15494 = cljs.core.chunk_first(seq__15195_15493__$1);
var G__15495 = cljs.core.chunk_rest(seq__15195_15493__$1);
var G__15496 = c__5525__auto___15494;
var G__15497 = cljs.core.count(c__5525__auto___15494);
var G__15498 = (0);
seq__15195_15477 = G__15495;
chunk__15196_15478 = G__15496;
count__15197_15479 = G__15497;
i__15198_15480 = G__15498;
continue;
} else {
var vec__15224_15499 = cljs.core.first(seq__15195_15493__$1);
var name_15500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224_15499,(0),null);
var map__15227_15501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224_15499,(1),null);
var map__15227_15502__$1 = cljs.core.__destructure_map(map__15227_15501);
var doc_15503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227_15502__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227_15502__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15500], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15504], 0));

if(cljs.core.truth_(doc_15503)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15503], 0));
} else {
}


var G__15505 = cljs.core.next(seq__15195_15493__$1);
var G__15506 = null;
var G__15507 = (0);
var G__15508 = (0);
seq__15195_15477 = G__15505;
chunk__15196_15478 = G__15506;
count__15197_15479 = G__15507;
i__15198_15480 = G__15508;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15229 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15230 = null;
var count__15231 = (0);
var i__15232 = (0);
while(true){
if((i__15232 < count__15231)){
var role = chunk__15230.cljs$core$IIndexed$_nth$arity$2(null, i__15232);
var temp__5804__auto___15509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___15509__$1)){
var spec_15510 = temp__5804__auto___15509__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15510)], 0));
} else {
}


var G__15511 = seq__15229;
var G__15512 = chunk__15230;
var G__15513 = count__15231;
var G__15514 = (i__15232 + (1));
seq__15229 = G__15511;
chunk__15230 = G__15512;
count__15231 = G__15513;
i__15232 = G__15514;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__15229);
if(temp__5804__auto____$1){
var seq__15229__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15229__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15229__$1);
var G__15515 = cljs.core.chunk_rest(seq__15229__$1);
var G__15516 = c__5525__auto__;
var G__15517 = cljs.core.count(c__5525__auto__);
var G__15518 = (0);
seq__15229 = G__15515;
chunk__15230 = G__15516;
count__15231 = G__15517;
i__15232 = G__15518;
continue;
} else {
var role = cljs.core.first(seq__15229__$1);
var temp__5804__auto___15519__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___15519__$2)){
var spec_15520 = temp__5804__auto___15519__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15520)], 0));
} else {
}


var G__15521 = cljs.core.next(seq__15229__$1);
var G__15522 = null;
var G__15523 = (0);
var G__15524 = (0);
seq__15229 = G__15521;
chunk__15230 = G__15522;
count__15231 = G__15523;
i__15232 = G__15524;
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
return cljs.core.Throwable__GT_map(o);
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
var map__15303 = datafied_throwable;
var map__15303__$1 = cljs.core.__destructure_map(map__15303);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15303__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15304 = cljs.core.last(via);
var map__15304__$1 = cljs.core.__destructure_map(map__15304);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15305 = data;
var map__15305__$1 = cljs.core.__destructure_map(map__15305);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15305__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15305__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15305__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15306 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__15306__$1 = cljs.core.__destructure_map(map__15306);
var top_data = map__15306__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15314 = phase;
var G__15314__$1 = (((G__15314 instanceof cljs.core.Keyword))?G__15314.fqn:null);
switch (G__15314__$1) {
case "read-source":
var map__15326 = data;
var map__15326__$1 = cljs.core.__destructure_map(map__15326);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15326__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15326__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15330 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__15330__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15330,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15330);
var G__15330__$2 = (cljs.core.truth_((function (){var fexpr__15343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15343.cljs$core$IFn$_invoke$arity$1 ? fexpr__15343.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15343.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15330__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15330__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15330__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15344 = top_data;
var G__15344__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15344,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15344);
var G__15344__$2 = (cljs.core.truth_((function (){var fexpr__15349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15349.cljs$core$IFn$_invoke$arity$1 ? fexpr__15349.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15349.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15344__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15344__$1);
var G__15344__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15344__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15344__$2);
var G__15344__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15344__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15344__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15344__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15344__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15350 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350,(3),null);
var G__15354 = top_data;
var G__15354__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15354,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15354);
var G__15354__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15354__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15354__$1);
var G__15354__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15354__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15354__$2);
var G__15354__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15354__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15354__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15354__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15354__$4;
}

break;
case "execution":
var vec__15360 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15360,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15360,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15360,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15360,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15275_SHARP_){
var or__5002__auto__ = (p1__15275_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__15363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15363.cljs$core$IFn$_invoke$arity$1 ? fexpr__15363.cljs$core$IFn$_invoke$arity$1(p1__15275_SHARP_) : fexpr__15363.call(null, p1__15275_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__15364 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15364__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15364,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15364);
var G__15364__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15364__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15364__$1);
var G__15364__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15364__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15364__$2);
var G__15364__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15364__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15364__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15364__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15364__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15314__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15374){
var map__15375 = p__15374;
var map__15375__$1 = cljs.core.__destructure_map(map__15375);
var triage_data = map__15375__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15377 = phase;
var G__15377__$1 = (((G__15377 instanceof cljs.core.Keyword))?G__15377.fqn:null);
switch (G__15377__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__15378 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__15379 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15380 = loc;
var G__15381 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15386_15542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15387_15543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15388_15544 = true;
var _STAR_print_fn_STAR__temp_val__15389_15545 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15388_15544);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15389_15545);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15371_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15371_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15387_15543);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15386_15542);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15378,G__15379,G__15380,G__15381) : format.call(null, G__15378,G__15379,G__15380,G__15381));

break;
case "macroexpansion":
var G__15391 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__15392 = cause_type;
var G__15393 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15394 = loc;
var G__15395 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15391,G__15392,G__15393,G__15394,G__15395) : format.call(null, G__15391,G__15392,G__15393,G__15394,G__15395));

break;
case "compile-syntax-check":
var G__15400 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__15401 = cause_type;
var G__15402 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15403 = loc;
var G__15404 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15400,G__15401,G__15402,G__15403,G__15404) : format.call(null, G__15400,G__15401,G__15402,G__15403,G__15404));

break;
case "compilation":
var G__15405 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__15406 = cause_type;
var G__15407 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15408 = loc;
var G__15409 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15405,G__15406,G__15407,G__15408,G__15409) : format.call(null, G__15405,G__15406,G__15407,G__15408,G__15409));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__15410 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__15411 = symbol;
var G__15412 = loc;
var G__15413 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15418_15550 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15419_15551 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15420_15552 = true;
var _STAR_print_fn_STAR__temp_val__15421_15553 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15420_15552);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15421_15553);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15372_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15372_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15419_15551);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15418_15550);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15410,G__15411,G__15412,G__15413) : format.call(null, G__15410,G__15411,G__15412,G__15413));
} else {
var G__15426 = "Execution error%s at %s(%s).\n%s\n";
var G__15427 = cause_type;
var G__15428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15429 = loc;
var G__15430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15426,G__15427,G__15428,G__15429,G__15430) : format.call(null, G__15426,G__15427,G__15428,G__15429,G__15430));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15377__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
