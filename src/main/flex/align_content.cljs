(ns flex.align-content
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]))

(defn align-content []
  (r/with-let [subs (rf/subscribe [:db/get-align-content])]
    [:> rn/View {:style ut/screen-style}
     (ut/header-title "alignContent")
     (ut/header-menu @subs ["flex-start" "flex-end"
                            "stretch" "center"
                            "space-between" "space-around" "space-evenly"]
                     #(rf/dispatch [:db/set-align-content %]))
     (let [selected-option @subs]
       (ut/container {:flex-wrap :wrap
                      :align-content selected-option}
                     (ut/build-demo-children (fn [color]
                                               (if (or (= :orangered color)
                                                       (= :red color))
                                                 {:height 80 :width "auto"}
                                                 {:height 80}))
                                             [:orangered :orange :mediumseagreen
                                              :deepskyblue :mediumturquoise :mediumslateblue
                                              :purple :red :blue :green])))]))