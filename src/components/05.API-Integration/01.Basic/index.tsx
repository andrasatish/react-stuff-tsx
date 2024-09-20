import { useEffect, useState } from "react";
import './index.css';

const BasicAPIIntegration = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/posts').then((response:any)=>{
            // console.log('RESPONSE',response)
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        }).then((data:any)=>{
            console.log('DATA....', data)
            setPosts(data?.posts);
        }).catch((err)=>{
            // console.log(err);
            const errorMsg = err.message;
            alert(errorMsg);
        })


        //  const payload = {
        //     name: 'Sudheer',
        //     desc: 'Description data'
        // }
        // fetch('https://dummyjson.com/posts',
        //     {
        //         method: 'POST',//'DELETE', 'PUT'
        //         body: JSON.stringify(payload)
        //     }
        // ).then((response:any)=>{
        //     if(response.ok){
        //         return response.json();
        //     }
        // }).then((data:any)=>{
        //     console.log('DATA....', data)
        //     setPosts(data?.posts);
        // })
    },[]);

    useEffect(()=>{
        console.log('DETAILS CAME ......', posts);
    },[posts])


    return (
        <div className="api-wrapper">
            <h1>Posts Data</h1>
            <div className="post-cards">
                {
                    posts.map((post:any)=>(
                        <div key={post.id} className="post-item">
                            <p className="post-title">{post.title}</p>
                            <p className="post-description">{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 

export default BasicAPIIntegration;