import React from 'react'
import S3 from 'aws-sdk/clients/s3';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi';
import env from '../../env';
import { roundTo3SFand2DP } from '../../conponents/roundPercentage/roundPercentage';
import { TruncateText } from '../../conponents/truncateText/truncateText';

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
        },
        multiple: false
    });

    const files = acceptedFiles.map((file: any) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const [uploadProgress, setUploadProgress] = React.useState(0);

    const handleUpload = async () => {
        // Configure the S3 client
        const s3 = new S3({
            region: env.region,
            accessKeyId: env.accessKey,
            secretAccessKey: env.secretKey

        });

        let params: any = {}

        acceptedFiles.map((file: any) => (
            params = {
                Bucket: `${env.bucketName}/${userState.userId}/${env.thumbnailApi}`,
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
                        <div className='mt-2 pb-1 flex justify-center'>
                            <div>
                                <section className={`flex items-center justify-center xs:p-3 p-0 border-4  border-dashed   rounded-3xl   ${darkMode ? 'text-white bg-[#4b4b4b]' : 'text-black bg-[#dcdcdc] border-black'}`}>
                                    <div>
                                        <div {...getRootProps({ className: 'dropzone' })}>
                                            <input {...getInputProps()} />
                                            {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                                            <div className='flex justify-center'>
                                                <BiCloudUpload size={60} className='cursor-pointer' />
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                Upload Thumbnail
                                            </div>
                                        </div>
                                        <aside>
                                            <>
                                            <h4>Files</h4>
                                            <ul>{ files}</ul>
                                            
                                            {/* {console.log((files[0]))} */}
                                            <div>
                                                {uploadProgress > 0 && <div className='mt-30'> Upload progress: {roundTo3SFand2DP(uploadProgress)} % </div>}
                                            </div>
                                            </>
                                        </aside>
                                    </div>

                                </section>



                                <button onClick={handleUpload} className={`w-full border-2 border-gray-700 bg-[#a3a3a3] py-2 rounded-3xl mt-3 ${acceptedFiles.length === 0 ? 'pointer-events-none' : 'cursor-pointer'}`} >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}