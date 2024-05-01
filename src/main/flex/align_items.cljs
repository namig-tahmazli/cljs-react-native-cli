(ns flex.align-items
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]))

(defn align-items []
  (r/with-let [selected-option-sub (rf/subscribe [:db/get-align-items])]
    [:> rn/View {:style ut/screen-style}
     (ut/header-title "alignItems")
     (ut/header-menu @selected-option-sub ["stretch" "flex-start" "flex-end" "center" "baseline"]
                     #(rf/dispatch [:db/set-align-items %]))
     (ut/container {:align-items @selected-option-sub}
                   (ut/build-demo-children #(if (= :steelblue %) {:width "auto"} {})))]))