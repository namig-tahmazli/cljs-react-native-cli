(ns db
  (:require [re-frame.core :as rf]))

(defonce app-db {:count 0})

(rf/reg-event-db
 ::init
 (fn [_ _] app-db))

(rf/reg-event-db
 ::increment
 (fn [db _]
   (update db :count inc)))

(comment 
  (update {:count 0} :count inc))

(rf/reg-sub
 ::get-count
 (fn [db _]
   (get db :count)))