import React from 'react'
import S3 from 'aws-sdk/clients/s3';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi';


export const Thumbnail: React.FC<{}> = () => {

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

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
        file: null
    });

    const [uploadProgress, setUploadProgress] = React.useState(0);

    const handleFileChange = (event: any) => {
        // event.target.files[0].name = 'fml'
        setVideoState({
            ...videoState,
            file: event.target.files[0]
        })
        console.log(event.target.files[0].name);
    }

    const handleUpload = async () => {
        // Configure the S3 client
        const s3 = new S3({
            // region: '',
            // accessKeyId: '',
            // secretAccessKey: ''


        });

        const params: any = {
            Bucket: ``,
            Key: videoState.file.name,
            Body: videoState.file,
            ContentType: videoState.file.type
        };

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
    }
    return (
        <>
            <div className='w-full'>
                <div className='text-center'>
                    <div className=''>

                        {/* <img src={upload} alt=' ' className='w-full max-w-[50%] h-auto' /> */}
                        <div className='mt-2 pb-1 flex justify-center'>
                            <section className={`flex items-center justify-center p-3 border-4  border-dashed w-full min-h-[320px]  rounded-3xl  cursor-pointer ${darkMode ? 'text-white bg-[#4b4b4b]' : 'text-black bg-[#dcdcdc] border-black'}`}>
                                {/* <div className={`dash-content  `}> */}
                                <div>
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <input {...getInputProps()} />
                                        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                                        <div className='flex justify-center'>
                                            <BiCloudUpload size={60} />
                                        </div>
                                        <div className='flex justify-center items-center'>



                                            {/* Click here to add your Video filesadsd */}
                                            Upload Thumbnail
                                        </div>
                                    </div>
                                    <aside>
                                        <h4>Files</h4>
                                        <ul>{files}</ul>
                                    </aside>
                                </div>
                            </section>

                        </div>
                    </div>
                    {/* <div className='px-3 '>
                        <div className='mt-2 text-xl'>
                            Upload a video to get started
                        </div>
                        <div className='text-xs mt-3'>
                            Start sharing your story and connecting with viewers. Videos you upload will show up here.
                        </div>
                    </div> */}

                    {/* <div>
                        <button onClick={handleUpload} className='px-8 py-2 rounded-3xl bg-white text-black mt-4'>
                            Upload
                        </button>
                    </div> */}
                    <div>
                        {uploadProgress > 0 && <div className='mt-30'> Upload progress: {uploadProgress} % </div>}
                    </div>
                </div>
            </div>
        </>
    )
}