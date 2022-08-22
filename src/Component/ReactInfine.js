import React,{useState,useEffect} from 'react'

export default function ReactInfinite() {
    const [count, setCount] = useState(0);
    const handler = () =>{
        setCount(count + 1);
    }
    useEffect(() => {
      handler();
    },[]);
    return <div className="App" onClick={handler}>{count}</div>;
}
