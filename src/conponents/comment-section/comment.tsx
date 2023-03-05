import axios from 'axios'
import React from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import env from '../../env'

type Props = {
    user: {
        user_name: string,
        display_picture: string,
        _id: string
    }
    
}

export default function Comment(props: Props) {

    const [like, setLike] =React.useState<boolean>(false)

    const likeTheVideo = () => {
        setLike(!like)
    }

    const [commentText, setCommentText] = React.useState('');
    const [comments, setComments] = React.useState<any[]>([]);
  
    // React.useEffect(() => {
    //     // Fetch comments from backend API
    //     axios.get('/api/comments').then((response) => {
    //       setComments(response.data);
    //     });
    //   }, []);
// console.log(`${env.baseUrl}/api/comment`)
    
    
    const handleCommentSubmit = (e: any) => {
      e.preventDefault();

      fetch(`${env.baseUrl}/api/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: commentText,
            author: props.user._id,
            parentId: null // Set parentId to null for top-level comments
        })
    }).then((result: any) => {
        console.log('req sucessful', result)
    }).catch((error: Error) => {
        console.log(error)
    });

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
                                                />
                                                <div className='flex justify-between'>
                                                    <div>
                                                        {/* dsada */}
                                                    </div>
                                                    <div>
                                                        <button className='px-3 py-1 hover:bg-[#3F3F3F] rounded-2xl hover:text-white'>
                                                            Cancel
                                                        </button>
                                                        <button className='ml-3 bg-[#65B8FF] text-black px-3 py-1 rounded-2xl' onClick={handleCommentSubmit }>
                                                            Comment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='flex h-auto mt-3 text-sm'>
                                            <div className=" ">
                                                <img src={props.user.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[4.0rem] h-auto" />
                                                
                                            </div>
                                            <div className='ml-3 flex-grow w-full'>
                                                {/* <textarea className='w-full min-h-[10px] py-2 mb-3 rounded-md resize-none text-sm' placeholder='Add a Comment'/> */}
                                                <div className='flex'>
                                                    <div>
                                                        John Doe
                                                    </div>
                                                    <div className='ml-1'>
                                                        . 2 days ago
                                                    </div>
                                                    
                                                </div>
                                                <div className='mt-1'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis odit voluptate nisi temporibus consectetur soluta, corporis excepturi exercitationem, rem similique qui. Nesciunt laborum temporibus iste fugit, alias aliquid nemo ipsum!
                                                </div>
                                                <div className='flex '>
                                                    <div>
                                                        {/* dsada */}
                                                    </div>
                                                    <div className='mt-1'>
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
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='flex h-auto mt-3 text-sm'>
                                            <div className=" ">
                                                <img src={props.user.display_picture} alt='profilepic' className="rounded-full object-cover w-full max-w-[4.0rem] h-auto" />
                                                
                                            </div>
                                            <div className='ml-3 flex-grow w-full'>
                                                {/* <textarea className='w-full min-h-[10px] py-2 mb-3 rounded-md resize-none text-sm' placeholder='Add a Comment'/> */}
                                                <div className='flex'>
                                                    <div>
                                                        Eren Yaeger
                                                    </div>
                                                    <div className='ml-1'>
                                                        . 2 days ago
                                                    </div>
                                                    
                                                </div>
                                                <div className='mt-1'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis odit voluptate nisi temporibus consectetur soluta, corporis excepturi exercitationem, rem similique qui. Nesciunt laborum temporibus iste fugit, alias aliquid nemo ipsum!
                                                </div>
                                                <div className='flex '>
                                                    <div>
                                                        {/* dsada */}
                                                    </div>
                                                    <div className='mt-1'>
                                                        <div className='flex items-center'>
                                                            <AiFillLike className={`${like ? 'text-blue-600' : ''}`} onClick={likeTheVideo} />
                                                            <div className='ml-1'>
                                                                699
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className='mt-1 ml-2'>
                                                        <div className='flex items-center'>
                                                            <AiFillDislike className={`${like ? '' : 'text-blue-600'}`}/>
                                                            <div className='ml-1'>
                                                                699
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        
                                    </div>
        </div>
    )
}