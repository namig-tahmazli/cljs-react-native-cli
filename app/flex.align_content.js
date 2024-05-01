goog.provide('flex.align_content');
flex.align_content.align_content = (function flex$align_content$align_content(){
var with_let16173 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16173","with-let16173",1365602777));
var temp__5808__auto___16203 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16203 == null)){
} else {
var c__15612__auto___16204 = temp__5808__auto___16203;
if((with_let16173.generation === c__15612__auto___16204.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16173.generation = c__15612__auto___16204.ratomGeneration);
}

var init16174 = (with_let16173.length === (0));
var subs = ((((init16174) || (cljs.core.not(with_let16173.hasOwnProperty((0))))))?(with_let16173[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-align-content","db/get-align-content",843499765)], null))):(with_let16173[(0)]));
var res16175 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),utilities.screen_style], null),utilities.header_title("alignContent"),utilities.header_menu(cljs.core.deref(subs),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-start","flex-end","stretch","center","space-between","space-around","space-evenly"], null),(function (p1__16172_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-align-content","db/set-align-content",2065842523),p1__16172_SHARP_], null));
})),(function (){var selected_option = cljs.core.deref(subs);
return utilities.container.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"align-content","align-content",-990200349),selected_option], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$2((function (color){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"orangered","orangered",-1851964317),color)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204),color)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"width","width",-384071477),"auto"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(80)], null);
}
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839)], null)));
})()], null);
return res16175;
});

//# sourceMappingURL=flex.align_content.js.map
