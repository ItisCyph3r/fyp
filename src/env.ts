const env = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKey: process.env.REACT_APP_ACCESS,
    secretKey: process.env.REACT_APP_SECRET,
    baseUrl: process.env.REACT_APP_BASE_URL,
    cloudFrontApi: process.env.REACT_APP_CLOUDFRONT_API,
    videoApi: process.env.REACT_APP_VIDEO_API,
    thumbnailApi: process.env.REACT_APP_THUMBNAIL_API
}

export default env;
