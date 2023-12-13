import {useState, useEffect} from 'react';
import axios from 'axios';
import dumb from '../assets/dumb-data.json'

const useFetch = (endPoint, query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host':'jsearch.p.rapidapi.com'
        },
        params: { ...query},
    };

    const fetchData = async () => {
        try {
            setIsLoading(true);
            // const response = await axios.request
            // (options);
            const response = dumb
            console.info({response})

            setData(response.data);
        } catch (error) {
            console.info({error})
            setError(error);
            // alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    },[]);

    const refetch =() => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;