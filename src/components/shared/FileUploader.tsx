import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";


type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
};



const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {

    // creating new state for fileURL
    const [file, setFile] = useState<File[]>([]);
    const [fileUrl, setFileUrl] = useState<string>(mediaUrl);



    // This is the function that will be called when we drop the image 
    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            setFile(acceptedFiles);
            fieldChange(acceptedFiles);
            setFileUrl(convertFileToUrl(acceptedFiles[0]));
        }, [file])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpeg", ".jpg", ".svg", ".webp"]
        },
    })

    return (
        <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
            <input {...getInputProps()} className="cursor-pointer" />
            {
                fileUrl ? (
                    <div>
                        test1
                    </div>
                ) : (
                    <div className="file_uploader-box ">
                        <img
                            src="/assets/icons/file-upload.svg"
                            width={96}
                            height={77}
                            alt="file upload"
                        />

                        <h3 className="base-medium text-light-2 mb-2 mt-6">
                            Drag photo here
                        </h3>
                        <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

                        <Button type="button" className="shad-button_dark_4">
                            Select from computer
                        </Button>
                    </div>
                )
            }
        </div >
    )
}

export default FileUploader