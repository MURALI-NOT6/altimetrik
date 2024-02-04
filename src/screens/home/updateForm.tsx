import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import InputText from '../../components/inputText';
import FileUpload from '../../components/fileUpload';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateCarServices } from '../../services/updateServices';
import { useCarId } from '../../components/CarIdProvider';

const UpdateForm = ({ setModel }: any) => {
    const [carList, setCarList] = useState([])
    const dispatch = useAppDispatch();
    const carId = useCarId();
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        control,
        reset,
        trigger,
        formState: { errors, isValid },
    } = useForm();
    const carsInfo = useAppSelector((state: any) => state?.updateCarInfo?.data);
    const submitAction = (data: any) => {
        if (carsInfo && carId) {
            dispatch(updateCarServices({ carsInfo: carsInfo, data: data, upDatedId: carId }));
            setModel(false);
        }
    }

    useEffect(() => {
        const formData = carsInfo?.find((x: any) => x.id === carId);
        reset(formData)
    }, [])
    return (
        <div className="model">
            <div className='card'>
                <span className='closeIcon' onClick={() => setModel(false)}>X</span>
                <div className='titel'>
                    <h4>Car Info</h4>
                </div>
                <form onSubmit={handleSubmit((data) => submitAction(data))}>
                    <div className='row'>
                        <div className='col-6'>
                            <InputText label="Model" required={true} field="name" Controller={Controller} control={control} errors={errors} />
                            <InputText label="Color" required={true} field="color" Controller={Controller} control={control} errors={errors} />
                            <InputText label="Year of Manufacure" required={true} field="yearofManufacure" Controller={Controller} control={control} errors={errors} />
                            <InputText label="Insurance Valid upto" required={true} field="validDate" Controller={Controller} control={control} errors={errors} />
                            <InputText label="KMS" required={true} field="kms" Controller={Controller} control={control} errors={errors} />
                        </div>
                        <div className='col-6'>
                            <InputText label="Location" required={true} field="location" Controller={Controller} control={control} errors={errors} />
                            <InputText label="No of Owners" required={true} field="owners" Controller={Controller} control={control} errors={errors} />
                            <InputText label="Transmission" required={true} field="transmission" Controller={Controller} control={control} errors={errors} />
                            <InputText label="External Fiments" required={true} field="fiments" Controller={Controller} control={control} errors={errors} />
                            <FileUpload label="Photo" required={true} field="logo" Controller={Controller} control={control} errors={errors} setValue={setValue} trigger={trigger} />
                        </div>
                    </div>
                    <div className='actionBtn'>
                        <button type='submit' className='PrimaryBtn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateForm;