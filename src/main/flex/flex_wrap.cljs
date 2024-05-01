(ns flex.flex-wrap
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [utilities :as ut]
            ["react-native" :as rn]))

(defn flex-wrap []
  (r/with-let [subs (rf/subscribe [:db/get-flex-wrap])]
    [:> rn/View {:style ut/screen-style}
     (ut/header-title "flexWrap")
     (ut/header-menu @subs ["wrap" "nowrap"]
                     #(rf/dispatch [:db/set-flex-wrap %]))
     (ut/container {:flex-wrap @subs
                    :align-content :stretch}
                   (ut/build-demo-children (fn [_] {:height 80})
                                           [:orangered :orange :mediumseagreen
                                            :deepskyblue :mediumturquoise :mediumslateblue
                                            :purple :red :blue :green]))]))