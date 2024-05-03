goog.provide('db');
if((typeof db !== 'undefined') && (typeof db.app_db !== 'undefined')){
} else {
db.app_db = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"box-2","box-2",459532388),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"box-3","box-3",-1266575153),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"box-1","box-1",183783958),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"dimen","dimen",-234621985)],[new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"auto",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0)], null),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"auto",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0)], null),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(0),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"auto",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0)], null),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"strech","strech",-1983642095),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)])], null);
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","init-db","db/init-db",1595178336),(function (_,___$1){
return db.app_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","increment","db/increment",-1558833922),(function (db__$1,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","save-nav-state","db/save-nav-state",1053039732),(function (db__$1,p__18891){
var vec__18892 = p__18891;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18892,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18892,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"nav-state","nav-state",-979706076),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","select-flex-direction","db/select-flex-direction",-913284542),(function (db__$1,p__18895){
var vec__18896 = p__18895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18896,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18896,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),direction);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-justify-content","db/set-justify-content",-529752963),(function (db__$1,p__18899){
var vec__18900 = p__18899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18900,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18900,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787)], null),style);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-align-items","db/set-align-items",-1912546663),(function (db__$1,p__18903){
var vec__18904 = p__18903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18904,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18904,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-align-self","db/set-align-self",-1081251660),(function (db__$1,p__18907){
var vec__18908 = p__18907;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-self","align-self",1475936794)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-align-content","db/set-align-content",2065842523),(function (db__$1,p__18911){
var vec__18912 = p__18911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-content","align-content",-990200349)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-wrap","db/set-flex-wrap",437359300),(function (db__$1,p__18915){
var vec__18916 = p__18915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707)], null),option);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-basis","db/set-flex-basis",1033219829),(function (db__$1,p__18919){
var vec__18920 = p__18919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18920,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18920,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18920,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-shrink","db/set-flex-shrink",711137812),(function (db__$1,p__18923){
var vec__18924 = p__18923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-flex-grow","db/set-flex-grow",1479504207),(function (db__$1,p__18927){
var vec__18928 = p__18927;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-gap","db/set-gap",-1961743512),(function (db__$1,p__18931){
var vec__18932 = p__18931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),key], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-dimen","db/set-dimen",737700539),(function (db__$1,p__18935){
var vec__18936 = p__18935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18936,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18936,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18936,(2),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"dimen","dimen",-234621985),key], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set-position","db/set-position",869530023),(function (db__$1,p__18939){
var vec__18940 = p__18939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18940,(1),null);
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"position","position",-2011731912)], null),pos);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-basis","db/get-flex-basis",1891736690),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__18943){
var vec__18944 = p__18943;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18944,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18944,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-grow","db/get-flex-grow",-1111689906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__18947){
var vec__18948 = p__18947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-flex-shrink","db/get-flex-shrink",1066718606),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__18951){
var vec__18952 = p__18951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18952,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18952,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),key,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-gap","db/get-gap",-327941447),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__18955){
var vec__18956 = p__18955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18956,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18956,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),key], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-dimen","db/get-dimen",-58260006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__18959){
var vec__18960 = p__18959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18960,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18960,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"dimen","dimen",-234621985),key], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get-position","db/get-position",-1531211759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
})], 0));

//# sourceMappingURL=db.js.map
