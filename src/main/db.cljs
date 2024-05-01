(ns db
  (:require [re-frame.core :as rf]))

(defonce app-db {:count 0
                 :flex {:direction :column
                        :justify-content :flex-start
                        :align-items :flex-start
                        :align-self :strech
                        :align-content :flex-start
                        :flex-wrap :nowrap
                        :box-1 {:flex-basis "auto"
                                :flex-shrink 0
                                :flex-grow 0}
                        
                        :box-2 {:flex-basis "auto"
                                :flex-shrink 0
                                :flex-grow 0}
                        
                        :box-3 {:flex-basis "auto"
                                :flex-shrink 0
                                :flex-grow 0}
                        :gap {:row 0
                              :column 0}
                        :dimen {:width "auto" 
                                :height "auto"}}})
;; Events
(rf/reg-event-db
 ::init-db
 (fn [_ _]
   app-db))

(rf/reg-event-db
 ::increment
 (fn [db _]
   (update db :count inc)))

(rf/reg-event-db
 ::save-nav-state
 (fn [db [_ state]]
   (assoc db :nav-state state)))

(rf/reg-event-db
 ::select-flex-direction
 (fn [db [_ direction]] 
   (assoc-in db [:flex :direction] direction)))

(rf/reg-event-db
 ::set-justify-content
 (fn [db [_ style]]
   (assoc-in db [:flex :justify-content] style)))

(rf/reg-event-db
 ::set-align-items
 (fn [db [_ option]]
   (assoc-in db [:flex :align-items] option)))

(rf/reg-event-db
 ::set-align-self
 (fn [db [_ option]]
   (assoc-in db [:flex :align-self] option)))

(rf/reg-event-db
 ::set-align-content
 (fn [db [_ option]]
   (assoc-in db [:flex :align-content] option)))

(rf/reg-event-db
 ::set-flex-wrap
 (fn [db [_ option]]
   (assoc-in db [:flex :flex-wrap] option)))

(rf/reg-event-db
 ::set-flex-basis
 (fn [db [_ key value]]
   (assoc-in db [:flex key :flex-basis] value)))

(rf/reg-event-db
 ::set-flex-shrink
 (fn [db [_ key value]]
   (assoc-in db [:flex key :flex-shrink] value)))

(rf/reg-event-db
 ::set-flex-grow
 (fn [db [_ key value]]
   (assoc-in db [:flex key :flex-grow] value)))

(rf/reg-event-db
 ::set-gap
 (fn [db [_ key value]]
   (assoc-in db [:flex :gap key] value)))

(rf/reg-event-db
 ::set-dimen
 (fn [db [_ key value]]
   (assoc-in db [:flex :dimen key] value)))

;; Subscriptions
(rf/reg-sub
 ::get-nav-state
 (fn [db _]
   (get db :nav-state)))

(rf/reg-sub
 ::get-count
 (fn [db _]
   (get db :count)))

(rf/reg-sub
 ::selected-flex-direction
 (fn [db _]
   (get-in db [:flex :direction])))

(rf/reg-sub
 ::get-justify-content
 (fn [db _]
   (get-in db [:flex :justify-content])))

(rf/reg-sub
 ::get-align-items
 (fn [db _]
   (get-in db [:flex :align-items])))

(rf/reg-sub
 ::get-align-self
 (fn [db _]
   (get-in db [:flex :align-self])))

(rf/reg-sub
 ::get-align-content
 (fn [db _]
   (get-in db [:flex :align-content])))

(rf/reg-sub
 ::get-flex-wrap
 (fn [db _]
   (get-in db [:flex :flex-wrap])))

(rf/reg-sub
 ::get-flex-basis
 (fn [db [_ key]]
   (get-in db [:flex key :flex-basis])))

(rf/reg-sub
 ::get-flex-grow
 (fn [db [_ key]]
   (get-in db [:flex key :flex-grow])))

(rf/reg-sub
 ::get-flex-shrink
 (fn [db [_ key]]
   (get-in db [:flex key :flex-shrink])))

(rf/reg-sub
 ::get-gap
 (fn [db [_ key]]
   (get-in db [:flex :gap key])))

(rf/reg-sub
 ::get-dimen
 (fn [db [_ key]]
   (get-in db [:flex :dimen key])))