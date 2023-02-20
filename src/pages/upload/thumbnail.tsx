import React from 'react'
import S3 from 'aws-sdk/clients/s3';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi';
import Uploading from '../../images/95241-uploading.gif'
// import { Player, Controls } from '@lottiefiles/react-lottie-player';

type Props = {
    thumbsnail: any
}
interface ChildProps {
    onDataChange: (data: any) => void;
}

// export const Thumbnail: React.FC<{}> = (props: Props) => {
export const Thumbnail: any = (props: ChildProps) => {



    const userObject = useSelector((state: any) => state.auth.UserObject);

    const [userState, setUserState] = React.useState({
        userId: ''
    });

    React.useEffect(() => {
        setUserState({
            userId: userObject._id,
        })
    }, [userObject._id,])

    const darkMode = useSelector((state: any) => state.nav.darkMode);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.png']
        }
    });

    const files = acceptedFiles.map((file: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const [thumbnail, setThumbnail] = React.useState<any>();

    // console.log(videoState.file)

    const roundTo3SFand2DP = (num: any) => {
        let roundedNum = Math.round(num * 100) / 100;
        return roundedNum.toFixed(2);
    }
    const sendDataToParent = () => {
        // props.thumbnail(acceptedFiles);

    };


    const [uploadProgress, setUploadProgress] = React.useState(0);

    // console.log(acceptedFiles)

    const handleUpload = async () => {
        sendDataToParent()
        // Configure the S3 client
        const s3 = new S3({
            // region: '',
            // accessKeyId: '',
            // secretAccessKey: ''


        });

        let params: any = {}

        acceptedFiles.map((file: any) => (
            params = {
                Bucket: ``,
                Key: file.name,
                Body: file,
                ContentType: file.type

            }
        ));

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

        props.onDataChange(acceptedFiles[0].name);

    }
    return (
        <>
            <div className='w-full'>
                <div className='text-center'>
                    <div className=''>

                        {/* <img src={upload} alt=' ' className='w-full max-w-[50%] h-auto' /> */}
                        <div className='mt-2 pb-1 flex justify-center'>
                            <div>
                                <section className={`flex items-center justify-center p-3 border-4  border-dashed w-full min-h-[320px]  rounded-3xl   ${darkMode ? 'text-white bg-[#4b4b4b]' : 'text-black bg-[#dcdcdc] border-black'}`}>
                                    {/* <div className={`dash-content  `}> */}
                                    <div>
                                        <div {...getRootProps({ className: 'dropzone' })}>
                                            <input {...getInputProps()} />
                                            {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                                            <div className='flex justify-center'>
                                                <BiCloudUpload size={60} className='cursor-pointer' />
                                                {/* <div>
                                                    {uploadProgress > 0 && <div className='mt-30'> Upload progress: {uploadProgress} % </div>}
                                                </div> */}
                                                {/* {acceptedFiles.length === 0 && <img src={Uploading} alt='' />} */}


                                                {/* <Player
                                                autoplay
                                                loop
                                                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                                                style={{ height: '300px', width: '300px' }}
                                            >
                                                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                                            </Player> */}
                                            </div>
                                            <div className='flex justify-center items-center'>



                                                {/* Click here to add your Video filesadsd */}
                                                Upload Thumbnail
                                            </div>
                                        </div>
                                        <aside>
                                            <h4>Files</h4>
                                            <ul>{files}</ul>
                                            <div>
                                                {uploadProgress > 0 && <div className='mt-30'> Upload progress: {roundTo3SFand2DP(uploadProgress)} % </div>}
                                            </div>
                                        </aside>
                                    </div>

                                </section>



                                <button onClick={handleUpload} className={`w-full border-2 border-gray-700 bg-[#a3a3a3] py-2 rounded-3xl mt-3 ${acceptedFiles.length === 0 ? 'pointer-events-none' : 'cursor-pointer'}`} >
                                    Upload
                                </button>
                            </div>
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






                    {/* <div>
                        {uploadProgress > 0 && <div className='mt-30'> Upload progress: {uploadProgress} % </div>}
                    </div> */}
                </div>
            </div>
        </>
    )
}