import React from 'react'
import { useForm } from 'react-hook-form'

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
    <>
        <label className='font-semibold'>{label}</label>
        <input {...register(label, { required })} 
            className='border-blue-950 bg-slate-400 p-3 rounded'/>
    </>
)

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label className='font-semibold'>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}
            className='border-blue-950 bg-slate-200 p-3 rounded'>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>
    </>
))

const FormValidationRefs = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    return (
        <div className='w-96 mx-auto mt-10 mb-24'>
            <h1 className='text-2xl text-blue-950'>React Hook Form Validation with Refs</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-5'>
                <Input label="First Name" register={register} required/>
                <Select label="Age" {...register("Age")}/>

                <input type='submit' value='Submit' className='px-3 py-2 bg-blue-500 rounded font-semibold cursor-pointer' />
            </form>
        </div>
    )
}

export default FormValidationRefs
