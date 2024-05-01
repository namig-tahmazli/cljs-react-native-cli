(ns flex.justify-content
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]))

(defn justify-content []
  (r/with-let [selected-option-sub (rf/subscribe [:db/get-justify-content])]
    [:> rn/View {:style ut/screen-style}
     (ut/header-title "justifyContent")
     (ut/header-menu @selected-option-sub ["flex-start" "flex-end"
                                           "center" "space-between"
                                           "space-around" "space-evenly"]
                     #(rf/dispatch [:db/set-justify-content %]))
     (ut/container {:justify-content @selected-option-sub}
                   (ut/build-demo-children))]))