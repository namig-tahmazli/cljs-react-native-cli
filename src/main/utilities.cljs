(ns utilities
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            ["@react-navigation/native-stack" :as nns]))

(defonce screen-style {:flex 1
                       :padding 10
                       :background-color :white})

(defonce Stack (nns/createNativeStackNavigator))

(defn screen [name component-fn]
  [:> Stack.Screen {:name name
                    :key name
                    :component #(r/as-element (component-fn %))}])

(defn header-menu [selected-option options select-option]
  [:> rn/View {:style {:flex-direction :row
                       :flex-wrap :wrap
                       :margin-top 6}}
   (map (fn [option]
          (let [option-as-key (keyword option)
                is-selected-option? (= option-as-key selected-option)]
            [:> rn/TouchableOpacity {:style {:min-width "48%"
                                             :margin-horizontal "1%"
                                             :margin-bottom 6
                                             :padding-horizontal 8
                                             :padding-vertical 6
                                             :border-radius 6
                                             :background-color (if is-selected-option? :coral :oldlace)}
                                     :key option
                                     :on-press #(select-option option-as-key)}
             [:> rn/Text {:style {:color (if is-selected-option? :white :coral)
                                  :font-size 12
                                  :font-weight 500}} option]]))
        options)])

(defn header-title [title]
  [:> rn/Text {:style {:text-align :center
                       :color :coral
                       :font-size 24}} title])

(defn container
  ([style children] (let [given-style {:flex 1
                                       :background-color :aliceblue
                                       :min-height 200
                                       :margin-top 8}
                          new-style (into given-style style)]
                      [:> rn/View {:key :container
                                   :style new-style}
                       children]))
  ([children] (container {} children)))

(defn build-demo-children
  ([add-style colors] (map (fn [color] [:> rn/View {:style (into {:background-color color
                                                                  :width 50
                                                                  :min-width 50
                                                                  :min-height 50
                                                                  :height 50}
                                                                 (add-style color))
                                                    :key color}])
                           colors))
  ([add-style] (build-demo-children add-style [:powderblue :skyblue :steelblue]))
  ([] (build-demo-children (fn [_] {}))))