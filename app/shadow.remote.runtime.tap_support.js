goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__15956,p__15958){
var map__15959 = p__15956;
var map__15959__$1 = cljs.core.__destructure_map(map__15959);
var svc = map__15959__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__15960 = p__15958;
var map__15960__$1 = cljs.core.__destructure_map(map__15960);
var msg = map__15960__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15960__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15960__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15960__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15960__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__15992,p__15993){
var map__15994 = p__15992;
var map__15994__$1 = cljs.core.__destructure_map(map__15994);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15994__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__15995 = p__15993;
var map__15995__$1 = cljs.core.__destructure_map(map__15995);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15995__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__15998,p__15999){
var map__16000 = p__15998;
var map__16000__$1 = cljs.core.__destructure_map(map__16000);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16000__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16000__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__16001 = p__15999;
var map__16001__$1 = cljs.core.__destructure_map(map__16001);
var msg = map__16001__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16001__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__16007,tid){
var map__16008 = p__16007;
var map__16008__$1 = cljs.core.__destructure_map(map__16008);
var svc = map__16008__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16008__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__16017 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__16018 = null;
var count__16019 = (0);
var i__16020 = (0);
while(true){
if((i__16020 < count__16019)){
var vec__16034 = chunk__16018.cljs$core$IIndexed$_nth$arity$2(null, i__16020);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__16051 = seq__16017;
var G__16052 = chunk__16018;
var G__16053 = count__16019;
var G__16054 = (i__16020 + (1));
seq__16017 = G__16051;
chunk__16018 = G__16052;
count__16019 = G__16053;
i__16020 = G__16054;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16017);
if(temp__5804__auto__){
var seq__16017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16017__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16017__$1);
var G__16056 = cljs.core.chunk_rest(seq__16017__$1);
var G__16057 = c__5525__auto__;
var G__16058 = cljs.core.count(c__5525__auto__);
var G__16059 = (0);
seq__16017 = G__16056;
chunk__16018 = G__16057;
count__16019 = G__16058;
i__16020 = G__16059;
continue;
} else {
var vec__16037 = cljs.core.first(seq__16017__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16037,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16037,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__16060 = cljs.core.next(seq__16017__$1);
var G__16061 = null;
var G__16062 = (0);
var G__16063 = (0);
seq__16017 = G__16060;
chunk__16018 = G__16061;
count__16019 = G__16062;
i__16020 = G__16063;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__16011_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__16011_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__16012_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__16012_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__16013_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__16013_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__16014_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__16014_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__16040){
var map__16041 = p__16040;
var map__16041__$1 = cljs.core.__destructure_map(map__16041);
var svc = map__16041__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16041__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16041__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
