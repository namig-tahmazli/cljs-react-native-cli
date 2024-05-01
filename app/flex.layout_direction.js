goog.provide('flex.layout_direction');
flex.layout_direction.layout_direction = (function flex$layout_direction$layout_direction(){
var with_let16163 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16163","with-let16163",-3948979));
var temp__5808__auto___16187 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16187 == null)){
} else {
var c__15612__auto___16189 = temp__5808__auto___16187;
if((with_let16163.generation === c__15612__auto___16189.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16163.generation = c__15612__auto___16189.ratomGeneration);
}

var init16164 = (with_let16163.length === (0));
var selected_option_sub = ((((init16164) || (cljs.core.not(with_let16163.hasOwnProperty((0))))))?(with_let16163[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","selected-flex-direction","db/selected-flex-direction",2024670411)], null))):(with_let16163[(0)]));
var res16165 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("layoutDirection"),utilities.header_menu(cljs.core.deref(selected_option_sub),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column","row","row-reverse","column-reverse"], null),(function (p1__16159_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","select-flex-direction","db/select-flex-direction",-913284542),p1__16159_SHARP_], null));
})),utilities.container.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),cljs.core.deref(selected_option_sub)], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$0())], null);
return res16165;
});

//# sourceMappingURL=flex.layout_direction.js.map
