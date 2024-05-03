goog.provide('app');
app.home = (function app$home(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_menu(new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flex","Counter"], null),(function (dest){
return props.navigation.navigate(dest);
}))], null);
});
app.flex = (function app$flex(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),utilities.header_menu(new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LayoutDirection","JustifyContent","AlignItems","AlignSelf","AlignContent","FlexWrap","FlexBasisShrinkGrow","RowColumnGap","WidthHeight","AbsoluteRelative"], null),(function (dest){
return props.navigation.navigate(dest);
}))], null);
});
app.counter = (function app$counter(){
var with_let19595 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let19595","with-let19595",-380006034));
var temp__5808__auto___19605 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___19605 == null)){
} else {
var c__15614__auto___19606 = temp__5808__auto___19605;
if((with_let19595.generation === c__15614__auto___19606.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let19595.generation = c__15614__auto___19606.ratomGeneration);
}

var init19596 = (with_let19595.length === (0));
var count = ((((init19596) || (cljs.core.not(with_let19595.hasOwnProperty((0))))))?(with_let19595[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-count","db/get-count",1779260633)], null))):(with_let19595[(0)]));
var res19597 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(33),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620)], null)], null),["Hello World",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(count))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Click me",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","increment","db/increment",-1558833922)], null));
})], null)], null)], null);
return res19597;
});
app.nav_graph = (function app$nav_graph(){
var with_let19598 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let19598","with-let19598",-1926258427));
var temp__5808__auto___19607 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___19607 == null)){
} else {
var c__15614__auto___19608 = temp__5808__auto___19607;
if((with_let19598.generation === c__15614__auto___19608.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let19598.generation = c__15614__auto___19608.ratomGeneration);
}

var init19599 = (with_let19598.length === (0));
var nav_state = ((((init19599) || (cljs.core.not(with_let19598.hasOwnProperty((0))))))?(with_let19598[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-nav-state","db/get-nav-state",208692855)], null))):(with_let19598[(0)]));
var get_nav_state = ((((init19599) || (cljs.core.not(with_let19598.hasOwnProperty((1))))))?(with_let19598[(1)] = (function (){
var temp__5804__auto__ = cljs.core.deref(nav_state);
if(cljs.core.truth_(temp__5804__auto__)){
var state = temp__5804__auto__;
return state.data.state;
} else {
return null;
}
})):(with_let19598[(1)]));
var save_state = ((((init19599) || (cljs.core.not(with_let19598.hasOwnProperty((2))))))?(with_let19598[(2)] = (function (state){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","save-nav-state","db/save-nav-state",1053039732),state], null));
})):(with_let19598[(2)]));
var add_listener = ((((init19599) || (cljs.core.not(with_let19598.hasOwnProperty((3))))))?(with_let19598[(3)] = (function (ref){
return ref.addListener("state",save_state);
})):(with_let19598[(3)]));
var nav_ref = ((((init19599) || (cljs.core.not(with_let19598.hasOwnProperty((4))))))?(with_let19598[(4)] = (function (ref){
if(cljs.core.truth_(ref)){
return (add_listener.cljs$core$IFn$_invoke$arity$1 ? add_listener.cljs$core$IFn$_invoke$arity$1(ref) : add_listener.call(null, ref));
} else {
return null;
}
})):(with_let19598[(4)]));
var res19600 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_navigation$native.NavigationContainer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),nav_ref,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(get_nav_state.cljs$core$IFn$_invoke$arity$0 ? get_nav_state.cljs$core$IFn$_invoke$arity$0() : get_nav_state.call(null, ))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),utilities.Stack.Navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen-options","screen-options",-104988822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navigation-bar-color","navigation-bar-color",315980526),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"status-bar-color","status-bar-color",333724229),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"status-bar-style","status-bar-style",-381121430),new cljs.core.Keyword(null,"light","light",1918998747)], null)], null),utilities.screen("Home",(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.home,props], null);
})),utilities.screen("Flex",(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.flex,props], null);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19601){
var vec__19602 = p__19601;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19602,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19602,(1),null);
return utilities.screen(name,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null);
}));
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Counter",app.counter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LayoutDirection",flex.layout_direction.layout_direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JustifyContent",flex.justify_content.justify_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AlignItems",flex.align_items.align_items], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AlignSelf",flex.align_self.align_self], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AlignContent",flex.align_content.align_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FlexWrap",flex.flex_wrap.flex_wrap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FlexBasisShrinkGrow",flex.basis_shrink_grow.basis_grow_shrink], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RowColumnGap",flex.row_column_gap.row_column_gap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WidthHeight",flex.width_height.width_height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AbsoluteRelative",flex.absolute_relative_layout.absolute_relative], null)], null))], null)], null);
return res19600;
});
app.app_screen = (function app$app_screen(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.SafeAreaView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),app.nav_graph()], null);
});
app.start = (function app$start(){
return root.expo_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app_screen], null)));
});
app.init = (function app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","init-db","db/init-db",1595178336)], null));

return app.start();
});

//# sourceMappingURL=app.js.map
