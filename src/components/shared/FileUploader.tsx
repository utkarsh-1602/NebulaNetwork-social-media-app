import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";


const FileUploader = () => {



    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
            <input {...getInputProps()} className="cursor-pointer" />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default FileUploader