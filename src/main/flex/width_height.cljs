(ns flex.width-height
  (:require ["react-native" :as rn]
            [re-frame.core :as rf]
            [utilities :as u :refer [screen-style]]
            [reagent.core :as r]))

(defn- option-view [title options key] 
  (let [dimen @(rf/subscribe [:db/get-dimen key])] 
    [:> rn/View {:style {:flex-direction :row
                         :flex-wrap :wrap
                         :margin-bottom 8
                         :align-items :center}}
     [:> rn/Text {:style {:font-size 24}} title]
     (map (fn [option]
            [:> rn/TouchableOpacity {:style {:background-color (if (= dimen option) :coral :oldlace)
                                             :padding-vertical 6
                                             :padding-horizontal 8
                                             :border-radius 6
                                             :margin-horizontal 4}
                                     :key option
                                     :on-press (fn [] (rf/dispatch [:db/set-dimen key option]))}
             [:> rn/Text {:style {:font-size 12
                                  :font-weight 500
                                  :color (if (= dimen option) :white :coral)}} (str option)]])
          options)]))

(defn width-height []
  [:> rn/View {:style screen-style}
   (option-view "width" ["auto" 300 "80%"] :width)
   (option-view "height" ["auto" 200 "60%"] :height)
   
   (r/with-let [width (rf/subscribe [:db/get-dimen :width])
                height (rf/subscribe [:db/get-dimen :height])]
     [:> rn/View {:style {:padding 10
                          :align-self :flex-start
                          :width @width
                          :height @height
                          :background-color :aliceblue}}
      (u/build-demo-children (fn [_] {}))])])