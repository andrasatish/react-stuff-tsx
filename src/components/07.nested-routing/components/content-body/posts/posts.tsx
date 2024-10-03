import { useEffect, useState } from "react";
import './posts.css';
import { useNavigate } from "react-router-dom";

const PostsDetails = () => {
    const [postsData, setPostsData] = useState<any>();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data)=>{
            setPostsData(data.posts);
        });
    },[])

    const navigateToPostDetail = (post:any) => {
        // const updatedPost = { ...post, test:'test_data'}
        navigate(`/posts/${post.id}`, { state:post });
    }

    return (
        <div>
            <h1>Posts Details</h1>
            <hr/>
            <div className="posts-wrapper">
                {
                    postsData?.map((post:any)=> (
                        <div className="post-item" onClick={()=>{navigateToPostDetail(post)}}>
                            <p><span className="title-bolder">Title : </span>{post.title}</p>
                            <p><span className="title-bolder">Description : </span>{post.body}</p>
                            <p>
                                <span className="title-bolder">Tags : </span>
                                {
                                    post.tags.map((tag:string)=> (
                                        <span className="tag-pills">{tag}</span>
                                    ))
                                }
                            </p>
                        </div>  
                    ))
                }
            </div>
        </div>
    )
}

export default PostsDetails;