import React, {useState, useEffect } from "react";
import axios from "axios";

export default function Books() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const url = 'https://drive.google.com/file/d/1W2fctaQGHKuJP0fm6OI3SMAzLQ8b1SVp/view';
        const fetchData = async() => {
            try {
                const response = await fetch(url, {headers: {crossDomain: true}});
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
        // axios(url, {crossDomain: true})
        // .then(response => {
        //     setData(response.data);
        //     console.log('data: ', data);
        // })
        // .catch(error => {
        //     console.error("Error getting data", error);
        //     setError(error);
        // })
        // .finally(() => {
        //     setLoading(false);
        // })
    },[]);

  return (
    <div>
          Helloooo world
          {data}
    </div>
  );
}
