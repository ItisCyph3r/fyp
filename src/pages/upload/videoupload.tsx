import React from 'react'
import S3 from 'aws-sdk/clients/s3';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi';
import { Backdrop, Button, CircularProgress } from '@mui/material';
import { FaEnvelope } from 'react-icons/fa';
import { Thumbnail } from './thumbnail';
import { MdClose } from 'react-icons/md';
import { PutObjectResponse } from 'aws-sdk/clients/mediastoredata';
import UUID from '../../conponents/uuid/uuid';
import generateUUID from '../../conponents/uuid/uuid';


export const VideoUpload: React.FC<{}> = () => {

    const setDetails = (event: any) => {
        const { name, value } = event.target;
        setVideoState({
            ...videoState,
            [name]: value
        });
    };



    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {

    };







    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'video/mp4': ['.mp4', '.MP4'],
        }
    })

    const files = acceptedFiles.map((file: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));


    const userObject = useSelector((state: any) => state.auth.UserObject);

    const [userState, setUserState] = React.useState({
        userId: ''
    });

    React.useEffect(() => {
        setUserState({
            userId: userObject._id,
        })
    }, [userObject._id,])


    const [videoState, setVideoState] = React.useState<any>({
        title: null,
        description: null,
        course: null,
        file: null,
        thumbnail: null
    });

    // console.log(videoState)

    const [uploadProgress, setUploadProgress] = React.useState(0);

    const handleFileChange = (event: any) => {
        // event.target.files[0].name = 'fml'
        setVideoState({
            ...videoState,
            file: event.target.files[0]
        })
        console.log(event.target.files[0].name);
    }






    const handleDataFromChild = (data: any) => {
        // Do something with the data passed from the child component
        console.log(data);
        setVideoState({ ...videoState, thumbnail: data })

    };




    async function data() {
        fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                video_title: videoState.title,
                video_description: videoState.description,
                course: videoState.course,
                fileName: acceptedFiles.map((data) => (data.name)),
                thumbnail: videoState.thumbnail,
                userId: userState.userId,
                uuid: generateUUID(),
                date: new Date()
            })
        });
    }
    // data.json();


// console.log(acceptedFiles[0].name)

    const handleUpload = async () => {


        setOpen(!open);
        // Configure the S3 client
        const s3 = new S3({
            region: '',
            accessKeyId: '',
            secretAccessKey: ''


            

        });

        let params: any = {}

        acceptedFiles.map((file: any) => (
            // <li key={file.path}>
            //     {file.path} - {file.size} bytes
            // </li>
            // console.log(file)

            params = {
                // Bucket: ``,
                // Key: videoState.file.name,
                // Body: videoState.file,
                // ContentType: videoState.file.type



                Bucket: ``,
            


        
                Key: file.name,
                Body: file,
                ContentType: file.type

            }
        ));


        // console.log(`butv/${userState.userId}/video`)

        // Upload the file to S3 and update the upload progress
        s3.putObject(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }).on('httpUploadProgress', function (progress: any) {
            const currentProgress = (progress.loaded / progress.total) * 100;
            setUploadProgress(currentProgress);
        });

        // data()
        
    }



    return (
        <>
            {/* <div className='flex justify-center'> */}
            <div className='md:mt-0 mt-3 flex items-center justify-center md:w-full w-full '>
                <div className='text-center w-full h-full'>
                    <div className=''>

                        {/* <img src={upload} alt=' ' className='w-full max-w-[50%] h-auto' /> */}
                        <div className='mt-5 pb-3 flex justify-center'>
                            <section className={`flex items-center justify-center text-center md:p-0 p-7 md:h-[200px] border-4  border-dashed w-full rounded-3xl cursor-pointer ${darkMode ? 'text-white bg-[#4b4b4b]' : 'text-black bg-[#dcdcdc] border-black'}`}>
                                {/* <div className={`dash-content  `}> */}
                                <div>
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <input {...getInputProps()} />
                                        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                                        <div className='flex justify-center'>
                                            <BiCloudUpload size={60} />
                                        </div>
                                        Click here to add your Video file
                                    </div>
                                    <aside>
                                        <h4>Files</h4>
                                        <ul>{files}</ul>
                                    </aside>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='px-3 '>
                        <div className='mt-4 text-xl'>
                            Upload a video to get started
                        </div>
                        <div className='text-xs mt-3'>
                            Start sharing your story and connecting with viewers. Videos you upload will show up here.
                        </div>
                    </div>

                    <div>
                        <button onClick={handleUpload} className={`px-8 py-2 rounded-3xl  mt-4 ${acceptedFiles.length === 0 ? 'pointer-events-none' : 'cursor-pointer'} ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`} disabled={acceptedFiles.length === 0} >
                            Upload
                        </button>

                        {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        // onClick={handleClose}
                        >
                            <div className='md:w-2/3'>
                                <div>
                                    {/* <CircularProgress color="inherit" /> */}

                                    <div className='bg-[#525252] p-5 rounded-t-3xl'>
                                        <div>
                                            <div className='flex justify-end'>
                                                <MdClose size={25} onClick={handleClose} className='cursor-pointer' />
                                            </div>
                                            <div className='text-left flex md:flex-row flex-col'>
                                                <div className='md:w-[70%] w-full mr-5'>
                                                    <div>
                                                        <div className=''>
                                                            Title of the video
                                                        </div>
                                                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">

                                                            <textarea
                                                                // className="input100"
                                                                className="w-full min-h-[10px] rounded-lg bg-gray-500 p-3 resize-none !outline-2 !outline-red-700"
                                                                // type="text"
                                                                name="title"
                                                                placeholder="Title"
                                                                value={videoState.title || ''}
                                                                onChange={setDetails}
                                                                required
                                                            />
                                                            {/* <span className="focus-input100"></span>
                                                    <span className="symbol-input100">
                                                        <FaEnvelope />
                                                    </span> */}
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <div className='mt-3'>
                                                            Description of the video
                                                        </div>
                                                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">

                                                            <textarea
                                                                // className="input100"
                                                                // className='w-full min-h-[120px] rounded-2xl bg-[#525252] p-3 resize-none border-2 border-red-700'
                                                                className="w-full min-h-[120px] rounded-lg bg-gray-500 p-3 resize-none !outline-2 !outline-red-700"

                                                                // type="text"
                                                                name="description"
                                                                placeholder="Description"
                                                                value={videoState.description || ''}
                                                                onChange={setDetails}
                                                                required />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className={` mt-0`}>
                                                        <label>Course:</label>
                                                        <br />
                                                        <select
                                                            name="course"
                                                            id="cars"
                                                            className={`${darkMode ? 'text-white bg-[#171a1c]' : 'text-black'} p-3 rounded-3xl `}
                                                            onChange={setDetails}
                                                            defaultValue='-- select an option --'
                                                            required
                                                        >
                                                            <option disabled> -- select an option -- </option>
                                                            <option value="Computer Science">Computer Science</option>
                                                            <option value="Medicine">Medicine</option>
                                                            <option value="Accounting">Accounting</option>
                                                            <option value="Economics">Economics</option>
                                                        </select>

                                                        {/* <input type="submit" value="Submit"></input> */}
                                                    </div>
                                                </div>
                                                <div className='md:w-[30%] w-full'>
                                                    <Thumbnail onDataChange={handleDataFromChild} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='w-full border-t-2 border-gray-700 bg-[#a3a3a3] py-2 rounded-b-3xl' onClick={data} >
                                        Upload
                                    </button>
                                </div>
                            </div>

                        </Backdrop>
                    </div>
                    <div>
                        {uploadProgress > 0 && <div className='mt-30'> Upload progress: {uploadProgress} % </div>}
                    </div>




                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

