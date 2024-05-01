goog.provide('flex.flex_wrap');
flex.flex_wrap.flex_wrap = (function flex$flex_wrap$flex_wrap(){
var with_let16156 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16156","with-let16156",782933149));
var temp__5808__auto___16186 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16186 == null)){
} else {
var c__15612__auto___16188 = temp__5808__auto___16186;
if((with_let16156.generation === c__15612__auto___16188.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16156.generation = c__15612__auto___16188.ratomGeneration);
}

var init16157 = (with_let16156.length === (0));
var subs = ((((init16157) || (cljs.core.not(with_let16156.hasOwnProperty((0))))))?(with_let16156[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-flex-wrap","db/get-flex-wrap",336589413)], null))):(with_let16156[(0)]));
var res16158 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("flexWrap"),utilities.header_menu(cljs.core.deref(subs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wrap","nowrap"], null),(function (p1__16154_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-flex-wrap","db/set-flex-wrap",437359300),p1__16154_SHARP_], null));
})),utilities.container.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),cljs.core.deref(subs),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$2((function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(80)], null);
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839)], null)))], null);
return res16158;
});

//# sourceMappingURL=flex.flex_wrap.js.map
