(ns root
  (:require ["react-native" :as rn]
            [reagent.core :as r]))

(defonce root-ref (atom nil))
(defonce root-comp-ref (atom nil))

(defn expo-root [root]
  (let [is-first-call? (nil? @root-ref)]
    (reset! root-ref root)

    (if-not is-first-call?
      (when-let [root @root-comp-ref] (.forceUpdate ^js root))
      (let [Root (r/create-class {:componentDidMount
                                  (fn [] (this-as this (reset! root-comp-ref this)))
                                  :componentWillUnmount 
                                  (fn [] (reset! root-comp-ref nil))
                                  :render 
                                  (fn [] (let [body @root-ref] (if (fn? body) (body) body)))})]
        (.registerComponent rn/AppRegistry
                            "CLJSNativeCLI"
                            (fn [] Root))))))