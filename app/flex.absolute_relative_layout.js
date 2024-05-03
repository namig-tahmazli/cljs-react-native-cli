goog.provide('flex.absolute_relative_layout');
flex.absolute_relative_layout.absolute_relative = (function flex$absolute_relative_layout$absolute_relative(){
var with_let18978 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18978","with-let18978",1392903979));
var temp__5808__auto___18982 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18982 == null)){
} else {
var c__15598__auto___18983 = temp__5808__auto___18982;
if((with_let18978.generation === c__15598__auto___18983.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18978.generation = c__15598__auto___18983.ratomGeneration);
}

var init18979 = (with_let18978.length === (0));
var subs = ((((init18979) || (cljs.core.not(with_let18978.hasOwnProperty((0))))))?(with_let18978[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-position","db/get-position",-1531211759)], null))):(with_let18978[(0)]));
var res18980 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("position"),utilities.header_menu(cljs.core.deref(subs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["relative","absolute"], null),(function (p1__18977_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-position","db/set-position",869530023),p1__18977_SHARP_], null));
})),(function (){var selected_option = cljs.core.deref(subs);
return utilities.container.cljs$core$IFn$_invoke$arity$1(utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1((function (color){
var G__18981 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),selected_option], null);
var G__18981__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"powderblue","powderblue",65928114)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18981,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(25),new cljs.core.Keyword(null,"left","left",-399115937),(25)], null)):G__18981);
var G__18981__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18981__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(50),new cljs.core.Keyword(null,"left","left",-399115937),(50)], null)):G__18981__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"steelblue","steelblue",1620562381))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18981__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(75),new cljs.core.Keyword(null,"left","left",-399115937),(75)], null));
} else {
return G__18981__$2;
}
})));
})()], null);
return res18980;
});

//# sourceMappingURL=flex.absolute_relative_layout.js.map
