import React, {
    useState
} from 'react';
import AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';

const S3Uploader = () => {
        const [file, setFile] = useState(null);
        const [uploadProgress, setUploadProgress] = useState(0);

        const handleFileChange = (event) => {
            setFile(event.target.files[0]);
        }

        const handleUpload = () => {
            // Configure the S3 client
            const s3 = new S3({
                region: 'your-region',
                accessKeyId: 'your-access-key',
                secretAccessKey: 'your-secret-key'
            });

            // Create the S3 upload params
            const params = {
                Bucket: 'your-bucket-name',
                Key: file.name,
                Body: file,
                ContentType: file.type
            };

            // Upload the file to S3 and update the upload progress
            s3.putObject(params, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            }).on('httpUploadProgress', function (progress) {
                const currentProgress = (progress.loaded / progress.total) * 100;
                setUploadProgress(currentProgress);
            });
        }

        return ( 
            <div>
            <input 
                type = "file"
                onChange = { handleFileChange }
            /> 
            <button 
                onClick = { handleUpload }
            > 
                Upload 
            </button> 
            {
                uploadProgress > 0 && <div> Upload progress: { uploadProgress } % </div>} </div>
        );
    }

        export default S3Uploader;