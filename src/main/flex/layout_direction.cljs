(ns flex.layout-direction
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]))

(defn layout-direction []
  (r/with-let [selected-option-sub (rf/subscribe [:db/selected-flex-direction])]
    [:> rn/View {:style ut/screen-style}
     (ut/header-title "layoutDirection")
     (ut/header-menu @selected-option-sub ["column" "row"
                                           "row-reverse" "column-reverse"]
                     #(rf/dispatch [:db/select-flex-direction %]))
     (ut/container {:flex-direction @selected-option-sub}
                   (ut/build-demo-children))]))