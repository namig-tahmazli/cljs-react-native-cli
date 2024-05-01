goog.provide('flex.width_height');
flex.width_height.option_view = (function flex$width_height$option_view(title,options,key){
var dimen = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-dimen","db/get-dimen",-58260006),key], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null),title], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (option){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.TouchableOpacity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dimen,option))?new cljs.core.Keyword(null,"coral","coral",1082484055):new cljs.core.Keyword(null,"oldlace","oldlace",-966038915)),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(6),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(8),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(4)], null),new cljs.core.Keyword(null,"key","key",-1516042587),option,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-dimen","db/set-dimen",737700539),key,option], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dimen,option))?new cljs.core.Keyword(null,"white","white",-483998618):new cljs.core.Keyword(null,"coral","coral",1082484055))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(option)], null)], null);
}),options)], null);
});
flex.width_height.width_height = (function flex$width_height$width_height(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),flex.width_height.option_view("width",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["auto",(300),"80%"], null),new cljs.core.Keyword(null,"width","width",-384071477)),flex.width_height.option_view("height",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["auto",(200),"60%"], null),new cljs.core.Keyword(null,"height","height",1025178622)),(function (){var with_let18628 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18628","with-let18628",621708735));
var temp__5808__auto___18631 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18631 == null)){
} else {
var c__16352__auto___18632 = temp__5808__auto___18631;
if((with_let18628.generation === c__16352__auto___18632.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18628.generation = c__16352__auto___18632.ratomGeneration);
}

var init18629 = (with_let18628.length === (0));
var width = ((((init18629) || (cljs.core.not(with_let18628.hasOwnProperty((0))))))?(with_let18628[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-dimen","db/get-dimen",-58260006),new cljs.core.Keyword(null,"width","width",-384071477)], null))):(with_let18628[(0)]));
var height = ((((init18629) || (cljs.core.not(with_let18628.hasOwnProperty((1))))))?(with_let18628[(1)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-dimen","db/get-dimen",-58260006),new cljs.core.Keyword(null,"height","height",1025178622)], null))):(with_let18628[(1)]));
var res18630 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref(width),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.deref(height),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108)], null)], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$1((function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}))], null);
return res18630;
})()], null);
});

//# sourceMappingURL=flex.width_height.js.map
