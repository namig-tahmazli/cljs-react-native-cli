(ns flex.row-column-gap
  (:require [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]
            [reagent.core :as r]))

(defn int-parser [key]
  (fn [text] (when-not (nil? text)
               (let [int-parsing (js/parseInt text 10)
                     result (if-not (js/isNaN int-parsing)
                              int-parsing
                              0)]
                 (rf/dispatch [:db/set-gap key result])))))

(defn gap-tab [name key]
  (let [gap-subs (rf/subscribe [:db/get-gap key])]
    [:> rn/View {:style {:flex 1
                         :align-items :center}}
     [:> rn/Text name]
     [:> rn/TextInput {:style {:text-align :center
                               :border-bottom-width 1
                               :width 50}
                       :value (str @gap-subs)
                       :on-change-text (int-parser key)}]]))

(defn row-column-gap []
  [:> rn/View {:style {:flex 1
                       :flex-direction :column
                       :padding 10
                       :background-color :white}}
   
   [:> rn/View {:style {:flex-direction :row
                        :margin-bottom 8
                        :gap 8
                        :justify-content :space-around}} 
    
    (gap-tab "Row Gap" :row)
    (gap-tab "Column Gap" :column)]
   
   (r/with-let [row-gap (rf/subscribe [:db/get-gap :row])
                column-gap (rf/subscribe [:db/get-gap :column])]
     [:> rn/View {:style {:background-color :aliceblue
                          :flex 1
                          :flex-wrap :wrap
                          :max-height 400
                          :row-gap @row-gap
                          :column-gap @column-gap
                          :align-content :flex-start}}
     
      (ut/build-demo-children (fn [_] {:height 80})
                              [:orangered :orange :mediumseagreen
                               :deepskyblue :mediumturquoise :mediumslateblue
                               :purple :red :blue :green])])])