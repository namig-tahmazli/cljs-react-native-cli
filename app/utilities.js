goog.provide('utilities');
if((typeof utilities !== 'undefined') && (typeof utilities.screen_style !== 'undefined')){
} else {
utilities.screen_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null);
}
if((typeof utilities !== 'undefined') && (typeof utilities.Stack !== 'undefined')){
} else {
utilities.Stack = shadow.js.shim.module$$react_navigation$native_stack.createNativeStackNavigator();
}
utilities.screen = (function utilities$screen(name,component_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),utilities.Stack.Screen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"component","component",1555936782),(function (p1__16145_SHARP_){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((component_fn.cljs$core$IFn$_invoke$arity$1 ? component_fn.cljs$core$IFn$_invoke$arity$1(p1__16145_SHARP_) : component_fn.call(null, p1__16145_SHARP_)));
})], null)], null);
});
utilities.header_menu = (function utilities$header_menu(selected_option,options,select_option){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(6)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (option){
var option_as_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(option);
var is_selected_option_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_as_key,selected_option);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.TouchableOpacity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"48%",new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),"1%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(6),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(8),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(6),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"background-color","background-color",570434026),((is_selected_option_QMARK_)?new cljs.core.Keyword(null,"coral","coral",1082484055):new cljs.core.Keyword(null,"oldlace","oldlace",-966038915))], null),new cljs.core.Keyword(null,"key","key",-1516042587),option,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (select_option.cljs$core$IFn$_invoke$arity$1 ? select_option.cljs$core$IFn$_invoke$arity$1(option_as_key) : select_option.call(null, option_as_key));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),((is_selected_option_QMARK_)?new cljs.core.Keyword(null,"white","white",-483998618):new cljs.core.Keyword(null,"coral","coral",1082484055)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500)], null)], null),option], null)], null);
}),options)], null);
});
utilities.header_title = (function utilities$header_title(title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null),title], null);
});
utilities.container = (function utilities$container(var_args){
var G__16149 = arguments.length;
switch (G__16149) {
case 2:
return utilities.container.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return utilities.container.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utilities.container.cljs$core$IFn$_invoke$arity$2 = (function (style,children){
var given_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"min-height","min-height",398480837),(200),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8)], null);
var new_style = cljs.core.into.cljs$core$IFn$_invoke$arity$2(given_style,style);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"style","style",-496642736),new_style], null),children], null);
}));

(utilities.container.cljs$core$IFn$_invoke$arity$1 = (function (children){
return utilities.container.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children);
}));

(utilities.container.cljs$lang$maxFixedArity = 2);

utilities.build_demo_children = (function utilities$build_demo_children(var_args){
var G__16151 = arguments.length;
switch (G__16151) {
case 2:
return utilities.build_demo_children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return utilities.build_demo_children.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utilities.build_demo_children.cljs$core$IFn$_invoke$arity$2 = (function (add_style,colors){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(50),new cljs.core.Keyword(null,"min-height","min-height",398480837),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50)], null),(add_style.cljs$core$IFn$_invoke$arity$1 ? add_style.cljs$core$IFn$_invoke$arity$1(color) : add_style.call(null, color))),new cljs.core.Keyword(null,"key","key",-1516042587),color], null)], null);
}),colors);
}));

(utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1 = (function (add_style){
return utilities.build_demo_children.cljs$core$IFn$_invoke$arity$2(add_style,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381)], null));
}));

(utilities.build_demo_children.cljs$core$IFn$_invoke$arity$0 = (function (){
return utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1((function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
}));

(utilities.build_demo_children.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=utilities.js.map
