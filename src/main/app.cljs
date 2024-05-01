(ns app
  (:require ["react-native" :as rn]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [root :as expo-root]
            [db :as db]
            [utilities :as ut :refer [screen Stack]]
            [flex.basis-shrink-grow :refer [basis-grow-shrink]]
            [flex.layout-direction :refer [layout-direction]]
            [flex.justify-content :refer [justify-content]]
            [flex.align-items :refer [align-items]]
            [flex.align-self :refer [align-self]]
            [flex.align-content :refer [align-content]]
            [flex.flex-wrap :refer [flex-wrap]]
            [flex.row-column-gap :refer [row-column-gap]]
            [flex.width-height :refer [width-height]]
            ["@react-navigation/native" :as nn]))

(defn home [props]
  [:> rn/View {:style ut/screen-style}

   (ut/header-menu :nothing ["Flex" "Counter"] (fn [dest] (-> props .-navigation (.navigate dest))))])

(defn flex [^js props]
  [:> rn/View {:style {:flex 1
                       :padding 10
                       :background-color :white}}

   (ut/header-menu :nothing ["LayoutDirection" "JustifyContent"
                             "AlignItems" "AlignSelf" "AlignContent"
                             "FlexWrap" "FlexBasisShrinkGrow" "RowColumnGap"
                             "WidthHeight"]
                (fn [dest] (-> props .-navigation (.navigate dest))))])

(defn counter []
  (r/with-let [count (rf/subscribe [::db/get-count])]
    [:> rn/View {:style {:flex 1
                         :justify-content :center}}
     [:> rn/Text {:style {:font-size 33
                          :color :blue}}
      (str "Hello World" @count)]
     [:> rn/Button {:title "Click me"
                    :on-press (fn [] (rf/dispatch [::db/increment]))}]]))



(defn nav-graph []
  (r/with-let [nav-state (rf/subscribe [::db/get-nav-state])
               get-nav-state (fn [] (when-let [state @nav-state] (-> state .-data .-state)))
               save-state (fn [state] (rf/dispatch [::db/save-nav-state state]))

               add-listener (fn [ref] (.addListener ref "state" save-state))
               nav-ref (fn [ref] (when ref (add-listener ref)))]
    [:> nn/NavigationContainer {:ref nav-ref
                                :initial-state (get-nav-state)}
     [:> Stack.Navigator
      (screen "Home" (fn [props] [home props]))
      (screen "Flex" (fn [props] [flex props]))

      (map (fn [[name component]] (screen name (fn [_] [component])))
           [["Counter" counter]
            ["LayoutDirection" layout-direction]
            ["JustifyContent" justify-content]
            ["AlignItems" align-items]
            ["AlignSelf" align-self]
            ["AlignContent" align-content]
            ["FlexWrap" flex-wrap]
            ["FlexBasisShrinkGrow" basis-grow-shrink]
            ["RowColumnGap" row-column-gap]
            ["WidthHeight" width-height]])]]))

(defn start
  {:dev/after-load true}
  []
  (expo-root/expo-root (r/as-element [nav-graph])))

(defn init []
  (rf/dispatch-sync [::db/init-db])
  (start))