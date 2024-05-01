goog.provide('flex.align_items');
flex.align_items.align_items = (function flex$align_items$align_items(){
var with_let16166 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16166","with-let16166",1953231140));
var temp__5808__auto___16193 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16193 == null)){
} else {
var c__15612__auto___16194 = temp__5808__auto___16193;
if((with_let16166.generation === c__15612__auto___16194.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16166.generation = c__15612__auto___16194.ratomGeneration);
}

var init16167 = (with_let16166.length === (0));
var selected_option_sub = ((((init16167) || (cljs.core.not(with_let16166.hasOwnProperty((0))))))?(with_let16166[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-align-items","db/get-align-items",-2041975611)], null))):(with_let16166[(0)]));
var res16168 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("alignItems"),utilities.header_menu(cljs.core.deref(selected_option_sub),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stretch","flex-start","flex-end","center","baseline"], null),(function (p1__16160_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-align-items","db/set-align-items",-1912546663),p1__16160_SHARP_], null));
})),utilities.container.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),cljs.core.deref(selected_option_sub)], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1((function (p1__16161_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),p1__16161_SHARP_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"auto"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})))], null);
return res16168;
});

//# sourceMappingURL=flex.align_items.js.map
