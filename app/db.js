goog.provide('db');
if((typeof db !== 'undefined') && (typeof db.app_db !== 'undefined')){
} else {
db.app_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","init","db/init",-1875485912),(function (_,___$1){
return db.app_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","increment","db/increment",-1558833922),(function (db__$1,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-count","db/get-count",1779260633),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.Keyword(null,"count","count",2139924085));
})], 0));

//# sourceMappingURL=db.js.map
