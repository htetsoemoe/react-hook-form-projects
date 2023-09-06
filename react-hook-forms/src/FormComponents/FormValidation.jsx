import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='w-96 mx-auto mt-10 mb-24'>
            <h1 className='text-2xl text-blue-950'>React Hook Form Validation</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-5'>
                <input {...register("firstName", { required: true, maxLength: 20 })} className="border-blue-950 bg-slate-400 p-3 rounded" />
                {errors.firstName && <span>First Name is required and maxLength is 20 chars!</span>}

                <input {...register("lastName", { required: true, maxLength: 20 })} className='border-blue-950 bg-slate-400 p-3 rounded'/>
                {errors.lastName && <span>Last Name is required and maxLength is 20 chars!</span>}

                <input type="number" {...register("age", { required: true, min: 18, max: 99 })} className='border-blue-950 bg-slate-400 p-3 rounded'/>
                {errors.age && <span>Age is required and must between 18 to 99!</span>}

                <input type='submit' value='Submit' className='px-3 py-2 bg-blue-500 rounded font-semibold cursor-pointer' />
            </form>
        </div>
    )
}

export default FormValidation
