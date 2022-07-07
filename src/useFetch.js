import React,{useState,useEffect} from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError]=useState(null)
    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter((blog) => blog.id !== id);
    //   setBlogs(newBlogs);
    // };
    useEffect(() => {
        const abortCont = new AbortController;
      setTimeout(() => {
        console.log("useEffect worked");
        fetch(url,{signal:abortCont.signal})
          .then((res) => {
            if (!res.ok){
              throw Error("could not fetch data from that resource")
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(false)
          })
          .catch((err) => {
            setError(err.message);
            setIsLoading(false)
          });
      }, 1000);
      return ()=>{
        console.log("cleanup")
        abortCont.abort()
      }
    }, [url]);
    return{
        data,error,isLoading
    }
  
}
export default useFetch;