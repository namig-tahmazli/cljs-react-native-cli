(ns flex.basis-shrink-grow
  (:require ["react-native" :as rn]
            [re-frame.core :as rf]
            [utilities :refer [screen-style]]))

(defn input-field [value-subs on-change-text]
  [:> rn/TextInput {:value (str @value-subs)
                    :style {:text-align :center
                            :border-bottom-width 1
                            :margin-bottom 8
                            :width 50}
                    :on-change-text on-change-text}])

(defn input-text-parser [event key on-nil]
  (fn [text]
    (when-not (nil? text)
      (let [int-parsing (js/parseInt text 10)]
        (rf/dispatch [event key (if-not (js/isNaN int-parsing) int-parsing on-nil)])))))

(defn box-layout [color key]
  (let [flex-basis-subs (rf/subscribe [:db/get-flex-basis key])
        flex-shrink-subs (rf/subscribe [:db/get-flex-shrink key])
        flex-grow-subs (rf/subscribe [:db/get-flex-grow key])]
    [:> rn/View {:style {:flex 1
                         :flex-direction :column
                         :align-items :center}}
     [:> rn/View {:style {:border-radius 8
                          :background-color color
                          :margin-bottom 8
                          :padding 8}}
      [:> rn/Text {:style {:color :white
                           :text-align :center
                           :min-width 80}} "Box"]]

     [:> rn/Text "flexBasis"]
     (input-field flex-basis-subs
                  (input-text-parser :db/set-flex-basis key "auto"))

     [:> rn/Text "flexShrink"]
     (input-field flex-shrink-subs
                  (input-text-parser :db/set-flex-shrink key 0))

     [:> rn/Text "flexGrow"]
     (input-field flex-grow-subs
                  (input-text-parser :db/set-flex-grow key 0))]))

(defn box [color key]
  (let [flex-basis-subs (rf/subscribe [:db/get-flex-basis key])
        flex-shrink-subs (rf/subscribe [:db/get-flex-shrink key])
        flex-grow-subs (rf/subscribe [:db/get-flex-grow key])]
    [:> rn/View {:width 50
                 :height 50
                 :flex 1
                 :background-color color
                 :flex-basis @flex-basis-subs
                 :flex-shrink @flex-shrink-subs
                 :flex-grow @flex-grow-subs}]))

(defn basis-grow-shrink []
  [:> rn/View {:style screen-style}
   [:> rn/View {:flex 1
                :padding-horizontal 10
                :flex-direction :row
                :align-content :space-between}
    (box-layout :powderblue :box-1)
    (box-layout :skyblue :box-2)
    (box-layout :steelblue :box-3)]
   [:> rn/View {:flex 1
                :flex-direction :row
                :background-color :aliceblue}
    (box :powderblue :box-1)
    (box :skyblue :box-2)
    (box :steelblue :box-3)]])