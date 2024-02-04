import React, { useEffect } from 'react';

interface fileUploadPropse {
    Controller: any;
    control: any;
    field: string; 
    errors?: { [x: string]: any };
    required?: boolean,
    label: string,
    setValue:any;
    trigger:any;
}

const FileUpload = ({
    Controller,
    control,
    field, 
    errors,
    required = false,
    label,
    setValue,
    trigger
}: fileUploadPropse) => { 

    return (<>
        <div className='inpuField'>
            <div>
                {label && <label>{label}{required?<span className='requiredFiled'>*</span>:""}</label>}
            </div>
            <div>
            <Controller
                control={control}
                name={field}
                rules={{ required: required }}
                render={({ field: { onChange, value } }: any) => (
                    <input type="file" className="form-control" defaultValue={value} onChange={(e:any)=>{
                        const file = e?.target?.files?.[0];  
                        if (file) { 
                            const reader = new FileReader(); 
                            reader.onload = (event: ProgressEvent<FileReader>) => { 
                                const base64String = event?.target?.result as string; 
                                setValue(field, base64String);
                                trigger(field)
                            }; 
                            reader.readAsDataURL(file); 
                        } 
                
                    }}/>
                )}
            />
            </div>
            {errors && errors[field]?.type === "required" && <p className='errorMsg'>{`${label} is Required.`}</p>}
        </div>
    </>)
}

export default FileUpload;