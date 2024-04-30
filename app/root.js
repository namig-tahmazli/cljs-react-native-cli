goog.provide('root');
if((typeof root !== 'undefined') && (typeof root.root_ref !== 'undefined')){
} else {
root.root_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof root !== 'undefined') && (typeof root.root_component_ref !== 'undefined')){
} else {
root.root_component_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
root.render_root = (function root$render_root(root__$1){
var first_call_QMARK_ = (cljs.core.deref(root.root_ref) == null);
cljs.core.reset_BANG_(root.root_ref,root__$1);

if((!(first_call_QMARK_))){
var temp__5804__auto__ = cljs.core.deref(root.root_component_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var root__$2 = temp__5804__auto__;
return root__$2.forceUpdate();
} else {
return null;
}
} else {
var Root = reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
return cljs.core.reset_BANG_(root.root_component_ref,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
return cljs.core.reset_BANG_(root.root_component_ref,null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var body = cljs.core.deref(root.root_ref);
if(cljs.core.fn_QMARK_(body)){
return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null, ));
} else {
return body;
}
})], null));
return shadow.js.shim.module$react_native.AppRegistry.registerComponent("CLJSNativeCLI",(function (){
return Root;
}));
}
});

//# sourceMappingURL=root.js.map
