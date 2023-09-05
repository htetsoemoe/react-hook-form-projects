import React from 'react'
import { useForm } from 'react-hook-form'

const BasicReactHookForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className='w-96 mx-auto mt-10 mb-24'>
            <h1 className='text-2xl text-blue-950'>Basic React Hook Form</h1>

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-5'>

                {/* register your input into the hook by invoking the "register" function */}
                <input type="text" defaultValue="This is test." {...register("example")} className='border-blue-950 bg-slate-400 p-3 rounded'/>

                {/* include validation with required or other standard HTML validation rules */}
                <input type="text" {...register("exampleRequired", { required: true })} className='border-blue-950 bg-slate-400 p-3 rounded' />
                {/* include validation with required or other standard HTML validation rules */}
                {errors.exampleRequired && <span>This filed is required.</span>}

                <input type='submit' className='px-3 py-2 bg-blue-500 rounded font-semibold cursor-pointer'/>
            </form>

        </div>
    )
}

export default BasicReactHookForm
