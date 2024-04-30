goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13617){
var map__13618 = p__13617;
var map__13618__$1 = cljs.core.__destructure_map(map__13618);
var runtime = map__13618__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13855 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13855)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13623 = runtime;
var G__13624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13855);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13623,G__13624) : shadow.remote.runtime.shared.process.call(null, G__13623,G__13624));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13630,res){
var map__13633 = p__13630;
var map__13633__$1 = cljs.core.__destructure_map(map__13633);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13633__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13633__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13640 = res;
var G__13640__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13640,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13640);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13640__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13640__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13660 = arguments.length;
switch (G__13660) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13661,msg,handlers,timeout_after_ms){
var map__13662 = p__13661;
var map__13662__$1 = cljs.core.__destructure_map(map__13662);
var runtime = map__13662__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13662__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13867 = arguments.length;
var i__5727__auto___13868 = (0);
while(true){
if((i__5727__auto___13868 < len__5726__auto___13867)){
args__5732__auto__.push((arguments[i__5727__auto___13868]));

var G__13869 = (i__5727__auto___13868 + (1));
i__5727__auto___13868 = G__13869;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13675,ev,args){
var map__13676 = p__13675;
var map__13676__$1 = cljs.core.__destructure_map(map__13676);
var runtime = map__13676__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13681 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13684 = null;
var count__13685 = (0);
var i__13686 = (0);
while(true){
if((i__13686 < count__13685)){
var ext = chunk__13684.cljs$core$IIndexed$_nth$arity$2(null, i__13686);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13870 = seq__13681;
var G__13871 = chunk__13684;
var G__13872 = count__13685;
var G__13873 = (i__13686 + (1));
seq__13681 = G__13870;
chunk__13684 = G__13871;
count__13685 = G__13872;
i__13686 = G__13873;
continue;
} else {
var G__13874 = seq__13681;
var G__13875 = chunk__13684;
var G__13876 = count__13685;
var G__13877 = (i__13686 + (1));
seq__13681 = G__13874;
chunk__13684 = G__13875;
count__13685 = G__13876;
i__13686 = G__13877;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13681);
if(temp__5804__auto__){
var seq__13681__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13681__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13681__$1);
var G__13878 = cljs.core.chunk_rest(seq__13681__$1);
var G__13879 = c__5525__auto__;
var G__13880 = cljs.core.count(c__5525__auto__);
var G__13881 = (0);
seq__13681 = G__13878;
chunk__13684 = G__13879;
count__13685 = G__13880;
i__13686 = G__13881;
continue;
} else {
var ext = cljs.core.first(seq__13681__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13883 = cljs.core.next(seq__13681__$1);
var G__13884 = null;
var G__13885 = (0);
var G__13886 = (0);
seq__13681 = G__13883;
chunk__13684 = G__13884;
count__13685 = G__13885;
i__13686 = G__13886;
continue;
} else {
var G__13887 = cljs.core.next(seq__13681__$1);
var G__13888 = null;
var G__13889 = (0);
var G__13890 = (0);
seq__13681 = G__13887;
chunk__13684 = G__13888;
count__13685 = G__13889;
i__13686 = G__13890;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13667){
var G__13668 = cljs.core.first(seq13667);
var seq13667__$1 = cljs.core.next(seq13667);
var G__13669 = cljs.core.first(seq13667__$1);
var seq13667__$2 = cljs.core.next(seq13667__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13668,G__13669,seq13667__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13720,p__13721){
var map__13722 = p__13720;
var map__13722__$1 = cljs.core.__destructure_map(map__13722);
var runtime = map__13722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13723 = p__13721;
var map__13723__$1 = cljs.core.__destructure_map(map__13723);
var msg = map__13723__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13723__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13724 = cljs.core.deref(state_ref);
var map__13724__$1 = cljs.core.__destructure_map(map__13724);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13724__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13724__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13735,msg){
var map__13736 = p__13735;
var map__13736__$1 = cljs.core.__destructure_map(map__13736);
var runtime = map__13736__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13748,key,p__13749){
var map__13756 = p__13748;
var map__13756__$1 = cljs.core.__destructure_map(map__13756);
var state = map__13756__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13756__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13757 = p__13749;
var map__13757__$1 = cljs.core.__destructure_map(map__13757);
var spec = map__13757__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13763,key,spec){
var map__13770 = p__13763;
var map__13770__$1 = cljs.core.__destructure_map(map__13770);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13771_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13771_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13772_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13772_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13773_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13773_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13774_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13774_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13775_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13775_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13789,key){
var map__13790 = p__13789;
var map__13790__$1 = cljs.core.__destructure_map(map__13790);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13790__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13798,msg){
var map__13799 = p__13798;
var map__13799__$1 = cljs.core.__destructure_map(map__13799);
var runtime = map__13799__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13799__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13806,p__13807){
var map__13812 = p__13806;
var map__13812__$1 = cljs.core.__destructure_map(map__13812);
var runtime = map__13812__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13813 = p__13807;
var map__13813__$1 = cljs.core.__destructure_map(map__13813);
var msg = map__13813__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13820 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13822 = null;
var count__13823 = (0);
var i__13824 = (0);
while(true){
if((i__13824 < count__13823)){
var map__13837 = chunk__13822.cljs$core$IIndexed$_nth$arity$2(null, i__13824);
var map__13837__$1 = cljs.core.__destructure_map(map__13837);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13902 = seq__13820;
var G__13903 = chunk__13822;
var G__13904 = count__13823;
var G__13905 = (i__13824 + (1));
seq__13820 = G__13902;
chunk__13822 = G__13903;
count__13823 = G__13904;
i__13824 = G__13905;
continue;
} else {
var G__13906 = seq__13820;
var G__13907 = chunk__13822;
var G__13908 = count__13823;
var G__13909 = (i__13824 + (1));
seq__13820 = G__13906;
chunk__13822 = G__13907;
count__13823 = G__13908;
i__13824 = G__13909;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13820);
if(temp__5804__auto__){
var seq__13820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13820__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13820__$1);
var G__13911 = cljs.core.chunk_rest(seq__13820__$1);
var G__13912 = c__5525__auto__;
var G__13913 = cljs.core.count(c__5525__auto__);
var G__13914 = (0);
seq__13820 = G__13911;
chunk__13822 = G__13912;
count__13823 = G__13913;
i__13824 = G__13914;
continue;
} else {
var map__13838 = cljs.core.first(seq__13820__$1);
var map__13838__$1 = cljs.core.__destructure_map(map__13838);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13838__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13915 = cljs.core.next(seq__13820__$1);
var G__13916 = null;
var G__13917 = (0);
var G__13918 = (0);
seq__13820 = G__13915;
chunk__13822 = G__13916;
count__13823 = G__13917;
i__13824 = G__13918;
continue;
} else {
var G__13919 = cljs.core.next(seq__13820__$1);
var G__13920 = null;
var G__13921 = (0);
var G__13922 = (0);
seq__13820 = G__13919;
chunk__13822 = G__13920;
count__13823 = G__13921;
i__13824 = G__13922;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
