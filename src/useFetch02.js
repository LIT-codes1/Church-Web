import { useEffect, useState } from "react";
const useFetch02 = (url) => {
   const [data, setLog] = useState(null)
   const [isPendingLog, setIsPendingLog] = useState(true)
   const [error, setErrorLog] =useState(null)

   useEffect(() => {
    const abortCont = new AbortController()
   
       setTimeout(() => {
         fetch(url, { signal: abortCont.signal })
         .then(res => {
           if (!res.ok) { 
             throw Error('could not fetch the data for that resource');
           } 
           return res.json();
         })
         .then(data => {
           setIsPendingLog(false);
           setLog(data);
           setErrorLog(null);
         })
         .catch(err => {
           if(err.name === 'AbortError') {
             console.log('fetch aborted') 
           }else {
             setIsPendingLog(false);
             setErrorLog(err.message);
           }
         })
       }, 1000);
   
       return()=> abortCont.abort()
   
     }, [url])
   
     return { data, isPendingLog, error };
}
 
export default useFetch02;