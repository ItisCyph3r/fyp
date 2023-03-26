import axios from 'axios'
import React from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import env from '../../env'
import RenderComment from './renderComment'


type Props = {
    user: {
        display_picture: string,
        _id: string
    }
    video_id: string,    
}

export default function Comment(props: Props) {

    const id = useParams();

    const video_uuid = id.videoID


    const [like, setLike] =React.useState<boolean>(false)

    const likeTheVideo = () => {
        setLike(!like)
    }

    const [commentText, setCommentText] = React.useState('');
    const [postComment,  setPostComment] = React.useState<boolean>(false)
    const [comments, setComments] = React.useState<any[]>([]);

    
    const handleCommentSubmit = (e: any) => {
        e.preventDefault();

        async function fetchData() {
            fetch(`${env.baseUrl}/api/comment?v=${video_uuid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: commentText,
                    author: props.user._id,
                    parentId: null, // Set parentId to null for top-level comments
                    videoId: props.video_id
                })
                
                
            }).then((result: any) => {
                
                // console.log('req sucessful', result)
            }).catch((error: Error) => {
                console.log(error)
            });
            setCommentText('')
            setPostComment(false)
        }

        if(props.video_id) return fetchData()
    };
// console.log(like)

    return (
        <div>
            <div className='text-xl font-[400] mt-3'> 
                                        <div>
                                            Comments
                                            <div className='mt-3 border-t-[1px] border-gray-500'></div>
                                        </div>
                                        <div className='flex h-auto mt-3 text-sm'>
                                            <div className=" ">
                                                <img src={props.user.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[4.0rem] h-auto" />
                                                
                                            </div>
                                            <div className='ml-3 flex-grow w-full'>
                                                <textarea 
                                                    className={`w-full min-h-[10px] p-2 mb-3 rounded-md resize-none text-sm bg-transparent`} 
                                                    placeholder='Add a Comment'
                                                    value={commentText}
                                                    onChange={(e) => setCommentText(e.target.value)}
                                                    onClick={(e) => {setPostComment(true)}}
                                                />
                                                {
                                                    postComment &&
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            {/* dsada */}
                                                        </div>
                                                        <div>
                                                            <button className='px-3 py-1 hover:bg-[#3F3F3F] rounded-2xl hover:text-white' onClick={() => {setPostComment(false); setCommentText('')}}>
                                                                Cancel
                                                            </button>
                                                            <button className='ml-3 bg-[#65B8FF] text-black px-3 py-1 rounded-2xl' onClick={handleCommentSubmit }>
                                                                Comment
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            
                                        </div>
                                        <RenderComment />                                  
                                        
                                    </div>
        </div>
    )
}