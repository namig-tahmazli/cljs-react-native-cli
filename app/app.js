goog.provide('app');
app.home = (function app$home(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_menu(new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flex","Counter"], null),(function (dest){
return props.navigation.navigate(dest);
}))], null);
});
app.flex = (function app$flex(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),utilities.header_menu(new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LayoutDirection","JustifyContent","AlignItems","AlignSelf","AlignContent","FlexWrap","FlexBasisShrinkGrow","RowColumnGap","WidthHeight"], null),(function (dest){
return props.navigation.navigate(dest);
}))], null);
});
app.counter = (function app$counter(){
var with_let18633 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18633","with-let18633",599739524));
var temp__5808__auto___18643 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18643 == null)){
} else {
var c__16352__auto___18644 = temp__5808__auto___18643;
if((with_let18633.generation === c__16352__auto___18644.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18633.generation = c__16352__auto___18644.ratomGeneration);
}

var init18634 = (with_let18633.length === (0));
var count = ((((init18634) || (cljs.core.not(with_let18633.hasOwnProperty((0))))))?(with_let18633[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-count","db/get-count",1779260633)], null))):(with_let18633[(0)]));
var res18635 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(33),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620)], null)], null),["Hello World",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(count))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Click me",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","increment","db/increment",-1558833922)], null));
})], null)], null)], null);
return res18635;
});
app.nav_graph = (function app$nav_graph(){
var with_let18636 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18636","with-let18636",1495637722));
var temp__5808__auto___18645 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18645 == null)){
} else {
var c__16352__auto___18646 = temp__5808__auto___18645;
if((with_let18636.generation === c__16352__auto___18646.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18636.generation = c__16352__auto___18646.ratomGeneration);
}

var init18637 = (with_let18636.length === (0));
var nav_state = ((((init18637) || (cljs.core.not(with_let18636.hasOwnProperty((0))))))?(with_let18636[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-nav-state","db/get-nav-state",208692855)], null))):(with_let18636[(0)]));
var get_nav_state = ((((init18637) || (cljs.core.not(with_let18636.hasOwnProperty((1))))))?(with_let18636[(1)] = (function (){
var temp__5804__auto__ = cljs.core.deref(nav_state);
if(cljs.core.truth_(temp__5804__auto__)){
var state = temp__5804__auto__;
return state.data.state;
} else {
return null;
}
})):(with_let18636[(1)]));
var save_state = ((((init18637) || (cljs.core.not(with_let18636.hasOwnProperty((2))))))?(with_let18636[(2)] = (function (state){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","save-nav-state","db/save-nav-state",1053039732),state], null));
})):(with_let18636[(2)]));
var add_listener = ((((init18637) || (cljs.core.not(with_let18636.hasOwnProperty((3))))))?(with_let18636[(3)] = (function (ref){
return ref.addListener("state",save_state);
})):(with_let18636[(3)]));
var nav_ref = ((((init18637) || (cljs.core.not(with_let18636.hasOwnProperty((4))))))?(with_let18636[(4)] = (function (ref){
if(cljs.core.truth_(ref)){
return (add_listener.cljs$core$IFn$_invoke$arity$1 ? add_listener.cljs$core$IFn$_invoke$arity$1(ref) : add_listener.call(null, ref));
} else {
return null;
}
})):(with_let18636[(4)]));
var res18638 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_navigation$native.NavigationContainer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),nav_ref,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(get_nav_state.cljs$core$IFn$_invoke$arity$0 ? get_nav_state.cljs$core$IFn$_invoke$arity$0() : get_nav_state.call(null, ))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),utilities.Stack.Navigator,utilities.screen("Home",(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.home,props], null);
})),utilities.screen("Flex",(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.flex,props], null);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18639){
var vec__18640 = p__18639;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(1),null);
return utilities.screen(name,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null);
}));
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Counter",app.counter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LayoutDirection",flex.layout_direction.layout_direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JustifyContent",flex.justify_content.justify_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AlignItems",flex.align_items.align_items], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AlignSelf",flex.align_self.align_self], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AlignContent",flex.align_content.align_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FlexWrap",flex.flex_wrap.flex_wrap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FlexBasisShrinkGrow",flex.basis_shrink_grow.basis_grow_shrink], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RowColumnGap",flex.row_column_gap.row_column_gap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WidthHeight",flex.width_height.width_height], null)], null))], null)], null);
return res18638;
});
app.start = (function app$start(){
return root.expo_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav_graph], null)));
});
app.init = (function app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","init-db","db/init-db",1595178336)], null));

return app.start();
});

//# sourceMappingURL=app.js.map
