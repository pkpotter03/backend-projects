import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: "dx2q6pybq",
    api_key: 961689958899457,
    api_secret: "r34f0ei7Q0RJ_WDIG7rVDilFWD0"
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )
        console.log(`file uploaded on cloudinary. File src: ` + response.url)
        fs.unlinkSync(localFilePath) //once file is uploaded, we would like to delete it from our server
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteFromCloudinary = async (publicId) => {
    try{
        const result = await cloudinary.uploader.destroy(publicId)
        console.log("deleted from cloudinary. Public id ", publicId)

    } catch (error) {
        console.log("Error while deleting from cloudinary", error)
        return null
    }
} 

export { uploadOnCloudinary, deleteFromCloudinary }