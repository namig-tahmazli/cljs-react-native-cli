goog.provide('db');
if((typeof db !== 'undefined') && (typeof db.app_db !== 'undefined')){
} else {
db.app_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"box-2","box-2",459532388),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"box-3","box-3",-1266575153),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"box-1","box-1",183783958),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"dimen","dimen",-234621985)],[new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"auto",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0)], null),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"auto",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0)], null),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(0),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"auto",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0)], null),new cljs.core.Keyword(null,"strech","strech",-1983642095),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)])], null);
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","init-db","db/init-db",1595178336),(function (_,___$1){
return db.app_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","increment","db/increment",-1558833922),(function (db__$1,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","save-nav-state","db/save-nav-state",1053039732),(function (db__$1,p__16184){
var vec__16190 = p__16184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"nav-state","nav-state",-979706076),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","select-flex-direction","db/select-flex-direction",-913284542),(function (db__$1,p__16196){
var vec__16200 = p__16196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16200,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16200,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),direction);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-justify-content","db/set-justify-content",-529752963),(function (db__$1,p__16205){
var vec__16206 = p__16205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787)], null),style);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-align-items","db/set-align-items",-1912546663),(function (db__$1,p__16211){
var vec__16212 = p__16211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16212,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16212,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-align-self","db/set-align-self",-1081251660),(function (db__$1,p__16215){
var vec__16216 = p__16215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16216,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16216,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-self","align-self",1475936794)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-align-content","db/set-align-content",2065842523),(function (db__$1,p__16219){
var vec__16220 = p__16219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-content","align-content",-990200349)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-wrap","db/set-flex-wrap",437359300),(function (db__$1,p__16223){
var vec__16224 = p__16223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-basis","db/set-flex-basis",1033219829),(function (db__$1,p__16227){
var vec__16228 = p__16227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-shrink","db/set-flex-shrink",711137812),(function (db__$1,p__16231){
var vec__16233 = p__16231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16233,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16233,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16233,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-grow","db/set-flex-grow",1479504207),(function (db__$1,p__16237){
var vec__16238 = p__16237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-gap","db/set-gap",-1961743512),(function (db__$1,p__16241){
var vec__16242 = p__16241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16242,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),key], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-dimen","db/set-dimen",737700539),(function (db__$1,p__16245){
var vec__16246 = p__16245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16246,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16246,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16246,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"dimen","dimen",-234621985),key], null),value);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-nav-state","db/get-nav-state",208692855),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.Keyword(null,"nav-state","nav-state",-979706076));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-count","db/get-count",1779260633),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.Keyword(null,"count","count",2139924085));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","selected-flex-direction","db/selected-flex-direction",2024670411),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"direction","direction",-633359395)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-justify-content","db/get-justify-content",591268727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-align-items","db/get-align-items",-2041975611),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-align-self","db/get-align-self",997180771),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-self","align-self",1475936794)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-align-content","db/get-align-content",843499765),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-content","align-content",-990200349)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-wrap","db/get-flex-wrap",336589413),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-basis","db/get-flex-basis",1891736690),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__16251){
var vec__16252 = p__16251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16252,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16252,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-grow","db/get-flex-grow",-1111689906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__16255){
var vec__16256 = p__16255;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-shrink","db/get-flex-shrink",1066718606),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__16259){
var vec__16260 = p__16259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16260,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16260,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-gap","db/get-gap",-327941447),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__16263){
var vec__16264 = p__16263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),key], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-dimen","db/get-dimen",-58260006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__16267){
var vec__16268 = p__16267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16268,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16268,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"dimen","dimen",-234621985),key], null));
})], 0));

//# sourceMappingURL=db.js.map
