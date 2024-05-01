goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20018 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20019 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20019);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20116 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20116)){
var new_db_20117 = temp__5804__auto___20116;
var fexpr__20021_20118 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20021_20118.cljs$core$IFn$_invoke$arity$1 ? fexpr__20021_20118.cljs$core$IFn$_invoke$arity$1(new_db_20117) : fexpr__20021_20118.call(null, new_db_20117));
} else {
}

var seq__20023 = cljs.core.seq(effects_without_db);
var chunk__20024 = null;
var count__20025 = (0);
var i__20026 = (0);
while(true){
if((i__20026 < count__20025)){
var vec__20037 = chunk__20024.cljs$core$IIndexed$_nth$arity$2(null, i__20026);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20037,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20037,(1),null);
var temp__5802__auto___20119 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20119)){
var effect_fn_20120 = temp__5802__auto___20119;
(effect_fn_20120.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20120.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20120.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__20121 = seq__20023;
var G__20122 = chunk__20024;
var G__20123 = count__20025;
var G__20124 = (i__20026 + (1));
seq__20023 = G__20121;
chunk__20024 = G__20122;
count__20025 = G__20123;
i__20026 = G__20124;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20023);
if(temp__5804__auto__){
var seq__20023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20023__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20023__$1);
var G__20125 = cljs.core.chunk_rest(seq__20023__$1);
var G__20126 = c__5525__auto__;
var G__20127 = cljs.core.count(c__5525__auto__);
var G__20128 = (0);
seq__20023 = G__20125;
chunk__20024 = G__20126;
count__20025 = G__20127;
i__20026 = G__20128;
continue;
} else {
var vec__20042 = cljs.core.first(seq__20023__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042,(1),null);
var temp__5802__auto___20129 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20129)){
var effect_fn_20130 = temp__5802__auto___20129;
(effect_fn_20130.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20130.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20130.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__20131 = cljs.core.next(seq__20023__$1);
var G__20132 = null;
var G__20133 = (0);
var G__20134 = (0);
seq__20023 = G__20131;
chunk__20024 = G__20132;
count__20025 = G__20133;
i__20026 = G__20134;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19608__auto___20135 = re_frame.interop.now();
var duration__19609__auto___20136 = (end__19608__auto___20135 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19609__auto___20136,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19608__auto___20135);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20018);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20137 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20137)){
var new_db_20138 = temp__5804__auto___20137;
var fexpr__20047_20139 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20047_20139.cljs$core$IFn$_invoke$arity$1 ? fexpr__20047_20139.cljs$core$IFn$_invoke$arity$1(new_db_20138) : fexpr__20047_20139.call(null, new_db_20138));
} else {
}

var seq__20048 = cljs.core.seq(effects_without_db);
var chunk__20049 = null;
var count__20050 = (0);
var i__20051 = (0);
while(true){
if((i__20051 < count__20050)){
var vec__20059 = chunk__20049.cljs$core$IIndexed$_nth$arity$2(null, i__20051);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20059,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20059,(1),null);
var temp__5802__auto___20140 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20140)){
var effect_fn_20141 = temp__5802__auto___20140;
(effect_fn_20141.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20141.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20141.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__20142 = seq__20048;
var G__20143 = chunk__20049;
var G__20144 = count__20050;
var G__20145 = (i__20051 + (1));
seq__20048 = G__20142;
chunk__20049 = G__20143;
count__20050 = G__20144;
i__20051 = G__20145;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20048);
if(temp__5804__auto__){
var seq__20048__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20048__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20048__$1);
var G__20147 = cljs.core.chunk_rest(seq__20048__$1);
var G__20148 = c__5525__auto__;
var G__20149 = cljs.core.count(c__5525__auto__);
var G__20150 = (0);
seq__20048 = G__20147;
chunk__20049 = G__20148;
count__20050 = G__20149;
i__20051 = G__20150;
continue;
} else {
var vec__20064 = cljs.core.first(seq__20048__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064,(1),null);
var temp__5802__auto___20152 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20152)){
var effect_fn_20153 = temp__5802__auto___20152;
(effect_fn_20153.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20153.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20153.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__20154 = cljs.core.next(seq__20048__$1);
var G__20155 = null;
var G__20156 = (0);
var G__20157 = (0);
seq__20048 = G__20154;
chunk__20049 = G__20155;
count__20050 = G__20156;
i__20051 = G__20157;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20068){
var map__20069 = p__20068;
var map__20069__$1 = cljs.core.__destructure_map(map__20069);
var effect = map__20069__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20069__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20069__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20078 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20079 = null;
var count__20080 = (0);
var i__20081 = (0);
while(true){
if((i__20081 < count__20080)){
var effect = chunk__20079.cljs$core$IIndexed$_nth$arity$2(null, i__20081);
re_frame.fx.dispatch_later(effect);


var G__20160 = seq__20078;
var G__20161 = chunk__20079;
var G__20162 = count__20080;
var G__20163 = (i__20081 + (1));
seq__20078 = G__20160;
chunk__20079 = G__20161;
count__20080 = G__20162;
i__20081 = G__20163;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20078);
if(temp__5804__auto__){
var seq__20078__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20078__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20078__$1);
var G__20164 = cljs.core.chunk_rest(seq__20078__$1);
var G__20165 = c__5525__auto__;
var G__20166 = cljs.core.count(c__5525__auto__);
var G__20167 = (0);
seq__20078 = G__20164;
chunk__20079 = G__20165;
count__20080 = G__20166;
i__20081 = G__20167;
continue;
} else {
var effect = cljs.core.first(seq__20078__$1);
re_frame.fx.dispatch_later(effect);


var G__20168 = cljs.core.next(seq__20078__$1);
var G__20169 = null;
var G__20170 = (0);
var G__20171 = (0);
seq__20078 = G__20168;
chunk__20079 = G__20169;
count__20080 = G__20170;
i__20081 = G__20171;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20090 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20091 = null;
var count__20092 = (0);
var i__20093 = (0);
while(true){
if((i__20093 < count__20092)){
var vec__20100 = chunk__20091.cljs$core$IIndexed$_nth$arity$2(null, i__20093);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20172 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20172)){
var effect_fn_20173 = temp__5802__auto___20172;
(effect_fn_20173.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20173.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20173.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20174 = seq__20090;
var G__20175 = chunk__20091;
var G__20176 = count__20092;
var G__20177 = (i__20093 + (1));
seq__20090 = G__20174;
chunk__20091 = G__20175;
count__20092 = G__20176;
i__20093 = G__20177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20090);
if(temp__5804__auto__){
var seq__20090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20090__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20090__$1);
var G__20178 = cljs.core.chunk_rest(seq__20090__$1);
var G__20179 = c__5525__auto__;
var G__20180 = cljs.core.count(c__5525__auto__);
var G__20181 = (0);
seq__20090 = G__20178;
chunk__20091 = G__20179;
count__20092 = G__20180;
i__20093 = G__20181;
continue;
} else {
var vec__20103 = cljs.core.first(seq__20090__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20103,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20183 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20183)){
var effect_fn_20184 = temp__5802__auto___20183;
(effect_fn_20184.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20184.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20184.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20186 = cljs.core.next(seq__20090__$1);
var G__20187 = null;
var G__20188 = (0);
var G__20189 = (0);
seq__20090 = G__20186;
chunk__20091 = G__20187;
count__20092 = G__20188;
i__20093 = G__20189;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20106 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20107 = null;
var count__20108 = (0);
var i__20109 = (0);
while(true){
if((i__20109 < count__20108)){
var event = chunk__20107.cljs$core$IIndexed$_nth$arity$2(null, i__20109);
re_frame.router.dispatch(event);


var G__20190 = seq__20106;
var G__20191 = chunk__20107;
var G__20192 = count__20108;
var G__20193 = (i__20109 + (1));
seq__20106 = G__20190;
chunk__20107 = G__20191;
count__20108 = G__20192;
i__20109 = G__20193;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20106);
if(temp__5804__auto__){
var seq__20106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20106__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20106__$1);
var G__20194 = cljs.core.chunk_rest(seq__20106__$1);
var G__20195 = c__5525__auto__;
var G__20196 = cljs.core.count(c__5525__auto__);
var G__20197 = (0);
seq__20106 = G__20194;
chunk__20107 = G__20195;
count__20108 = G__20196;
i__20109 = G__20197;
continue;
} else {
var event = cljs.core.first(seq__20106__$1);
re_frame.router.dispatch(event);


var G__20199 = cljs.core.next(seq__20106__$1);
var G__20200 = null;
var G__20201 = (0);
var G__20202 = (0);
seq__20106 = G__20199;
chunk__20107 = G__20200;
count__20108 = G__20201;
i__20109 = G__20202;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20110 = cljs.core.seq(value);
var chunk__20111 = null;
var count__20112 = (0);
var i__20113 = (0);
while(true){
if((i__20113 < count__20112)){
var event = chunk__20111.cljs$core$IIndexed$_nth$arity$2(null, i__20113);
clear_event(event);


var G__20204 = seq__20110;
var G__20205 = chunk__20111;
var G__20206 = count__20112;
var G__20207 = (i__20113 + (1));
seq__20110 = G__20204;
chunk__20111 = G__20205;
count__20112 = G__20206;
i__20113 = G__20207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20110);
if(temp__5804__auto__){
var seq__20110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20110__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20110__$1);
var G__20208 = cljs.core.chunk_rest(seq__20110__$1);
var G__20209 = c__5525__auto__;
var G__20210 = cljs.core.count(c__5525__auto__);
var G__20211 = (0);
seq__20110 = G__20208;
chunk__20111 = G__20209;
count__20112 = G__20210;
i__20113 = G__20211;
continue;
} else {
var event = cljs.core.first(seq__20110__$1);
clear_event(event);


var G__20212 = cljs.core.next(seq__20110__$1);
var G__20213 = null;
var G__20214 = (0);
var G__20215 = (0);
seq__20110 = G__20212;
chunk__20111 = G__20213;
count__20112 = G__20214;
i__20113 = G__20215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20114 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20115 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20115);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19608__auto___20218 = re_frame.interop.now();
var duration__19609__auto___20219 = (end__19608__auto___20218 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19609__auto___20219,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__19608__auto___20218);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20114);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
