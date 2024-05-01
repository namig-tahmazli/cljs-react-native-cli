goog.provide('flex.align_self');
flex.align_self.align_self = (function flex$align_self$align_self(){
var with_let16176 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16176","with-let16176",1986150843));
var temp__5808__auto___16185 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16185 == null)){
} else {
var c__15612__auto___16195 = temp__5808__auto___16185;
if((with_let16176.generation === c__15612__auto___16195.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16176.generation = c__15612__auto___16195.ratomGeneration);
}

var init16177 = (with_let16176.length === (0));
var subs = ((((init16177) || (cljs.core.not(with_let16176.hasOwnProperty((0))))))?(with_let16176[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-align-self","db/get-align-self",997180771)], null))):(with_let16176[(0)]));
var res16178 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("alignSelf"),utilities.header_menu(cljs.core.deref(subs),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stretch","flex-start","flex-end","center","baseline"], null),(function (p1__16155_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-align-self","db/set-align-self",-1081251660),p1__16155_SHARP_], null));
})),(function (){var selected_option = cljs.core.deref(subs);
return utilities.container.cljs$core$IFn$_invoke$arity$1(utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1((function (color){
var style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),selected_option,new cljs.core.Keyword(null,"width","width",-384071477),"auto"], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"powderblue","powderblue",65928114),color)){
return style;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})));
})()], null);
return res16178;
});

//# sourceMappingURL=flex.align_self.js.map
