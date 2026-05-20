import { div } from "motion/react-client";
import { useState,useRef,useEffect} from "react";

export default function HandWrite(){
    function useFecth(url){
        const [data,setData] = useState(null);
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState(null);
        const controllerRef = useRef(null);
        useEffect(()=>{
              if(controllerRef.current){
                controllerRef.current.abort();
              }
              const controller = new AbortController();
              controllerRef.current = controller;
              fetch(url,{signal:controller.signal}).then(
                (res)=>{
                   if (!res.ok) throw new Error("Network error!");
                   return res.json();
                }
              ).then(
                (data)=>{
                     if(!controller.signal.aborted){
                           setData(data);
                           setLoading(false);
                     }
                }
              ).catch(
                (error)=>{
                    if(!controller.signal.aborted){
                        setError(error);
                        setLoading(false);
                    }
                }
              )
              return ()=>controller.abort();
        },[url])
        return {data,loading,error};
    }
    return(
        <div>

        </div>
    )
}