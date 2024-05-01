(ns flex.align-self
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]))

(defn align-self []
  (r/with-let [subs (rf/subscribe [:db/get-align-self])]
    [:> rn/View {:style ut/screen-style}
     (ut/header-title "alignSelf")
     (ut/header-menu @subs ["stretch" "flex-start" "flex-end" "center" "baseline"]
                     #(rf/dispatch [:db/set-align-self %]))
     (let [selected-option @subs]
       (ut/container (ut/build-demo-children (fn [color]
                                               (let [style {:align-self selected-option
                                                            :width "auto"}]
                                                 (if (= :powderblue color) style {}))))))]))