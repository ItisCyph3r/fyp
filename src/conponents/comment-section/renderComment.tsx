import axios, { AxiosResponse } from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { AiFillDislike, AiFillLike, AiOutlineMore } from 'react-icons/ai'
import env from '../../env';
import BasicMenu from '../basic-select/basic-select';
import { parseCurrentDate } from '../getDate/getDate';

// type Props = {
//     user: { 
//         user_name: string; 
//         display_picture: string; 
//         _id: string; 
//     }
// }

export default function RenderComment() {

    const id = useParams();

    const video_uuid = id.videoID

    const [like, setLike] =React.useState<boolean>(false)

    const likeTheVideo = () => {
        setLike(!like)
    }

    const [comments, setComments] = React.useState<any[]>([]);

    // React.useEffect(() => {
    //     // Fetch comments from backend API
    //     axios.get(`${env.baseUrl}/api/comment?v=${video_uuid}`).then((response) => {
    //         console.log(response.data  )
    //         setComments(response.data);
    //     });
    // }, [video_uuid]);
    
    
    React.useEffect(() => {
        axios.get(`${env.baseUrl}/api/comment?v=${video_uuid}`)
            .then((res: AxiosResponse) => {
                // console.log(res.data  )
                setComments(res.data);
            })
    }, [comments])


    // console.log(comments)

    return (
        <>
            {
                comments.map((comment) => (
                    <div className='flex h-auto mt-3 text-sm' key={comment._id}>
                        <div className=" ">
                            <img src={comment.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[3.0rem] h-auto" />
                            
                        </div>
                        <div className='ml-3 flex-grow w-full'>
                            {/* <textarea className='w-full min-h-[10px] py-2 mb-3 rounded-md resize-none text-sm' placeholder='Add a Comment'/> */}
                            <div className='flex justify-between items-center'>
                                <div className='flex'>
                                    <div>
                                        {comment.display_name}
                                    </div>
                                    <div className='ml-1'>
                                        . {parseCurrentDate(comment.createdAt)}
                                    </div>
                                </div>
                                {/* <AiOutlineMore /> */}
                                <BasicMenu />
                                
                            </div>
                            
                            <div className='mt-1'>
                                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis odit voluptate nisi temporibus consectetur soluta, corporis excepturi exercitationem, rem similique qui. Nesciunt laborum temporibus iste fugit, alias aliquid nemo ipsum! */}
                                {comment.content}
                            </div>
                            <div className='flex '>
                                <div>
                                    {/* dsada */}
                                </div>
                                {/* <div className='mt-1'>
                                    <div className='flex items-center'>
                                        <AiFillLike className={`${like ? 'text-blue-600' : ''}`} onClick={likeTheVideo} />
                                        <div className='ml-1'>
                                            999
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='mt-1 ml-2'>
                                    <div className='flex items-center'>
                                        <AiFillDislike className={`${like ? '' : 'text-blue-600'}`}/>
                                        <div className='ml-1'>
                                            999
                                        </div>
                                    </div>
                                    
                                </div> */}
                            </div>
                        </div>
                    </div>
                )).reverse()
            }
        </>
    )
}