goog.provide('flex.row_column_gap');
flex.row_column_gap.int_parser = (function flex$row_column_gap$int_parser(key){
return (function (text){
if((text == null)){
return null;
} else {
var int_parsing = parseInt(text,(10));
var result = ((cljs.core.not(isNaN(int_parsing)))?int_parsing:(0));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set-gap","db/set-gap",-1961743512),key,result], null));
}
});
});
flex.row_column_gap.gap_tab = (function flex$row_column_gap$gap_tab(name,key){
var gap_subs = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-gap","db/get-gap",-327941447),key], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.TextInput,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"width","width",-384071477),(50)], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gap_subs)),new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),flex.row_column_gap.int_parser(key)], null)], null)], null);
});
flex.row_column_gap.row_column_gap = (function flex$row_column_gap$row_column_gap(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8),new cljs.core.Keyword(null,"gap","gap",80255254),(8),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132)], null)], null),flex.row_column_gap.gap_tab("Row Gap",new cljs.core.Keyword(null,"row","row",-570139521)),flex.row_column_gap.gap_tab("Column Gap",new cljs.core.Keyword(null,"column","column",2078222095))], null),(function (){var with_let16197 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16197","with-let16197",-707367113));
var temp__5808__auto___16232 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___16232 == null)){
} else {
var c__15612__auto___16236 = temp__5808__auto___16232;
if((with_let16197.generation === c__15612__auto___16236.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16197.generation = c__15612__auto___16236.ratomGeneration);
}

var init16198 = (with_let16197.length === (0));
var row_gap = ((((init16198) || (cljs.core.not(with_let16197.hasOwnProperty((0))))))?(with_let16197[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-gap","db/get-gap",-327941447),new cljs.core.Keyword(null,"row","row",-570139521)], null))):(with_let16197[(0)]));
var column_gap = ((((init16198) || (cljs.core.not(with_let16197.hasOwnProperty((1))))))?(with_let16197[(1)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get-gap","db/get-gap",-327941447),new cljs.core.Keyword(null,"column","column",2078222095)], null))):(with_let16197[(1)]));
var res16199 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"max-height","max-height",-612563804),(400),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),cljs.core.deref(row_gap),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),cljs.core.deref(column_gap),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null)], null),utilities.build_demo_children.cljs$core$IFn$_invoke$arity$2((function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(80)], null);
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839)], null))], null);
return res16199;
})()], null);
});

//# sourceMappingURL=flex.row_column_gap.js.map
