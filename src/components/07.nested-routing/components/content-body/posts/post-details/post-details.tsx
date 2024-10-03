import { useLocation, useParams } from "react-router-dom";
import './post-details.css';
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import DislikeOutlined from '@ant-design/icons/DislikeOutlined';

const PostDetails = () => {
    const { postId } = useParams();
    const postState = useLocation();
    const postData = postState.state;

    return (
        <>
            <h1>Post Details...</h1>
            {
                postData && (
                    <div className="post-item-wrapper">
                    <p><span className="title-bolder">Title : </span>{postData.title}</p>
                    <p><span className="title-bolder">Description : </span>{postData.body}</p>
                    <p>
                        <span className="title-bolder">Tags : </span>
                        {
                            postData.tags.map((tag: string) => (
                                <span className="tag-pills">{tag}</span>
                            ))
                        }
                    </p>
                    <div className="post-reactions">
                        <div style={{color:'green'}}><LikeOutlined /> &nbsp; {postData.reactions.likes}</div>
                        <div style={{color:'red'}}><DislikeOutlined /> &nbsp; {postData.reactions.dislikes}</div>
                    </div>
                </div>
                )
            }

        </>
    )
}

export default PostDetails;