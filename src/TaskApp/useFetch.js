import { useEffect, useState } from "react";
const useFetch = (refresh,url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
        setTimeout(() => {
          fetch(url,{signal:abortCont.signal})
            .then(res => {
              if (!res.ok)
              {
                throw Error('couldn\'t fetch the data');
              }
              return res.json();
            })
            .then(data => {
              setData(data);
              setIsPending(false);
              setError(null);
            }).catch((err) => {
              if (err.name === 'AbortError') {
                console.log('Fetch aborted');
              }
              else {
                setIsPending(false);
                setError(err.message); 
              }
            })  
        }, 1000);
      
    return () => abortCont.abort();
    }, [url,refresh])   
    return { data, error, isPending };
}

export default useFetch;