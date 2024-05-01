(ns app
  (:require [reagent.core :as r]
            [root :refer [render-root]]
            [re-frame.core :as rf]
            [db]
            ["react-native" :as rn]))

(defn root []
  (r/with-let [count-subs (rf/subscribe [:db/get-count])]
    [:> rn/View {:style {:flex 1
                         :flex-wrap :wrap}}
     [:> rn/View {:style {:flex-direction :row}}
      [:> rn/Text {:style {:color :red
                           :font-size 24}} 
       (str "Count" @count-subs)]

      [:> rn/TouchableOpacity {:style {:align-self :flex-start
                                       :padding 10
                                       :justify-content :flex-start
                                       :width 100}
                               :on-press #(rf/dispatch [:db/increment])}
       [:> rn/Text {:style {:font-size 24}} "Click me"]]]]))

(defn start  {:dev/after-load true} []
  (render-root (r/as-element [root])))

(defn init []
  (rf/dispatch-sync [:db/init])
  (start))

(comment
  (rf/dispatch [:db/increment]))