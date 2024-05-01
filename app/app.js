goog.provide('app');
app.root = (function app$root(){
var with_let18992 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let18992","with-let18992",158182591));
var temp__5808__auto___18995 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___18995 == null)){
} else {
var c__15598__auto___18996 = temp__5808__auto___18995;
if((with_let18992.generation === c__15598__auto___18996.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let18992.generation = c__15598__auto___18996.ratomGeneration);
}

var init18993 = (with_let18992.length === (0));
var count_subs = ((((init18993) || (cljs.core.not(with_let18992.hasOwnProperty((0))))))?(with_let18992[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-count","db/get-count",1779260633)], null))):(with_let18992[(0)]));
var res18994 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null),["Count",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(count_subs))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.TouchableOpacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","increment","db/increment",-1558833922)], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null),"Click me"], null)], null)], null)], null);
return res18994;
});
app.start = (function app$start(){
return root.render_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.root], null)));
});
app.init = (function app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","init","db/init",-1875485912)], null));

return app.start();
});

//# sourceMappingURL=app.js.map
