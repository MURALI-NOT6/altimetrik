import React, { useEffect } from 'react';

interface InputPropse {
    Controller: any;
    control: any;
    field: string;
    placeholder?: string;
    errors?: { [x: string]: any };
    required?: boolean,
    label: string,
}

const InputText = ({
    Controller,
    control,
    field,
    placeholder = "",
    errors,
    required = false,
    label
}: InputPropse) => { 

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
                    <input type="text" className="form-control" defaultValue={value} placeholder={placeholder} onChange={onChange}/>
                )}
            />
            </div>
            {errors && errors[field]?.type === "required" && <p className='errorMsg'>{`${label} is Required.`}</p>}
        </div>
    </>)
}

export default InputText;