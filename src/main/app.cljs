(ns app
  (:require [reagent.core :as r]
            [root :refer [render-root]]
            ["react-native" :as rn]))

(defn root []
  [:> rn/View {:style {:flex 1}}
   [:> rn/Text {:style {:color :red
                        :font-size 30}} "Hello"]])

(defn init [] 
  (render-root (r/as-element [root])))