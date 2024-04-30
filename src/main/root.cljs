(ns root
  (:require [reagent.core :as r]
            ["react-native" :as rn]))

(defonce root-ref (atom nil))
(defonce root-component-ref (atom nil))

(defn render-root [root]
  (let [first-call? (nil? @root-ref)]
    (reset! root-ref root)

    (if-not first-call?
      (when-let [root @root-component-ref]
        (.forceUpdate ^js root))
      (let [Root (r/create-class {:componentDidMount 
                                  (fn [] (this-as this (reset! root-component-ref this))) 
                                  :componentWillUnmount 
                                  (fn [] (reset! root-component-ref nil))
                                  :render 
                                  (fn [] (let [body @root-ref] (if (fn? body) (body) body)))})] 
        (.registerComponent rn/AppRegistry 
                            "CLJSNativeCLI"
                            (fn [] Root))))))