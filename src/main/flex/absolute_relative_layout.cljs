(ns flex.absolute-relative-layout
  (:require ["react-native" :as rn]
            [utilities :refer [screen-style build-demo-children] :as ut]
            [reagent.core :as r]
            [re-frame.core :as rf]))

(defn absolute-relative []
  (r/with-let [subs (rf/subscribe [:db/get-position])]
    [:> rn/View {:style screen-style}
     (ut/header-title "position")
     (ut/header-menu @subs ["relative" "absolute"]
                     #(rf/dispatch [:db/set-position %]))
     
     (let [selected-option @subs]
       (ut/container (build-demo-children (fn [color]
                                            (cond-> {:position selected-option}
                                              (= color :powderblue) (conj {:top 25 :left 25})
                                              (= color :skyblue) (conj {:top 50 :left 50})
                                              (= color :steelblue) (conj {:top 75 :left 75}))))))]))

(comment
  (some #{1} [1 2])
  (#{1 2} 3)
  (let [set #{1 2}
        map {:one 1 :two 2}]
    (:one map))
  
  
  
  (conj {:one 1} {:two "t"})
  (-> {} (cond-> false
    (assoc :name "Namig")))
  )