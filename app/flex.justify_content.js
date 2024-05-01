goog.provide('flex.justify_content');
flex.justify_content.justify_content = (function flex$justify_content$justify_content(){
var with_let16169 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16169","with-let16169",244805453));
var temp__5808__auto___16182 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16182 == null)){
} else {
var c__15612__auto___16183 = temp__5808__auto___16182;
if((with_let16169.generation === c__15612__auto___16183.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16169.generation = c__15612__auto___16183.ratomGeneration);
}

var init16170 = (with_let16169.length === (0));
var selected_option_sub = ((((init16170) || (cljs.core.not(with_let16169.hasOwnProperty((0))))))?(with_let16169[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-justify-content","db/get-justify-content",591268727)], null))):(with_let16169[(0)]));
var res16171 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("justifyContent"),utilities.header_menu(cljs.core.deref(selected_option_sub),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-start","flex-end","center","space-between","space-around","space-evenly"], null),(function (p1__16162_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-justify-content","db/set-justify-content",-529752963),p1__16162_SHARP_], null));
})),utilities.container.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),cljs.core.deref(selected_option_sub)], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$0())], null);
return res16171;
});

//# sourceMappingURL=flex.justify_content.js.map
