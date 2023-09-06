import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterFields = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='w-96 mx-auto mt-10 mb-24'>
            <h1 className='text-2xl text-blue-950'>Register Fields to React Hook Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-5'>
                <input type="text" {...register("firstName", {required: true})} className='border-blue-950 bg-slate-400 p-3 rounded'/>
                {errors.firstName && <span>This field is required!</span>}
                <select {...register("gender")} className='border-blue-950 bg-slate-200 p-3 rounded'>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>
                <input type="submit" value="Submit" className='px-3 py-2 bg-blue-500 rounded font-semibold cursor-pointer'/>
            </form>
        </div>
    )
}

export default RegisterFields


/*

    Register Fields

    One of the key concepts in React Hook Form is to register your component into the hook. 
    This will make its value available for both the form validation and submission.

    Note: Each field is required to have a name as a key for the registration process.


*/
