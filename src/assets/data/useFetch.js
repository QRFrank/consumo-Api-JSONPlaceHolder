import{ useEffect, useState } from 'react'


export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch (url)
        .then ((respuesta) => respuesta.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));   
        
    }, [url]);
  return {data, loading, error};
}
