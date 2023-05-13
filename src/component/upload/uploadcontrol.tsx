//import react
import { ErrorMessage, useField, useFormikContext } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
//import io image outline from react icons
import { IoImageOutline } from 'react-icons/io5';
import TextError from '../formControls/TextError';

const Dropzone = (props:any) => {
  const { setFieldValue, handleBlur, setFieldTouched, touched} = useFormikContext();
  
  const [field, errors , { setValue }] = useField(props);

  const [files, setFiles] = useState([]);
  const { label, name, format, labelClass, mimeTypes, ...rest } = props
  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    fontSize: '12px',
    borderStyle: 'dashed',
    backgroundColor: '#ffff',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };

  const focusedStyle = {
    borderColor: '#2196f3'
  };

  const acceptStyle = {
    borderColor: '#00e676'
  };

  const rejectStyle = {
    borderColor: '#ff1744'
  };
//@ts-ignore:next-line
  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  useEffect(() => {
    if (files.length > 0) {
      if (format === "base64") {
        blobToBase64(files[0]).then(res => {
          setFieldTouched(field.name, true, true);
          if (props.callback)  props.callback(res);
          setFieldValue(name, res);
        });
      } else if (format === "file") {
        setFieldTouched(field.name, true, true);
        if (props.callback)  props.callback(files[0]);
        setFieldValue(name, files[0]);
        //setFieldValue(name, files);
      }
    }
  }, [files]);

  const { getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    fileRejections,
    isDragAccept,
    isDragReject,
    isFocused
  } = useDropzone(
    {
      noClick: true,
      noKeyboard: true,
      //maxSize 5MB in bytes
      maxSize: (props.maxSize) ? props.maxSize : 5242880,
      accept: { 'image/*': (mimeTypes) ? mimeTypes : ['image/jpeg', 'image/png', 'image/jpg'] },
      onDrop: (acceptedFiles: any) => {
      //@ts-ignore:next-line
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
  ]) as any;


  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
//@ts-ignore:next-line
    <div key={file["path"]}>

      {errors.map(e => <label key={e.code}>{e.message}</label>)}

    </div>
  ));

  const acceptedItems = acceptedFiles.map(file => (
    //@ts-ignore:next-line
    <div key={file["path"]}>
        
      <label>
        
        { 
        //@ts-ignore:next-line
        file["path"]}</label>
    </div>
  ));

  return (
    <div className="container px-0">
      <div {...getRootProps({ style, isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <IoImageOutline style={{ "width": "40px", "height": "auto" }} />
        <p><a className="hyperLink" onClick={open} style={{ 'fontSize': '12px', 'fontWeight': 'bold'}}>Upload a file</a> <b>or Drag and Drop </b> </p>
        <p>PNG and JPEG Upto 20KB</p>
      </div>
      <aside>

        {isDragReject && <p className="errors">Only PNG and JPEG Upto 20KB Size images will be accepted</p>}
        {fileRejectionItems && <p className="errors">{fileRejectionItems}</p>}
        {acceptedItems && <p className="success">{acceptedItems}</p>}
        <ErrorMessage component={TextError} name={props.name} />

      </aside>
    </div>
  );
}

export default Dropzone;