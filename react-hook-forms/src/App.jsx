import React from 'react'
import BasicReactHookForm from './FormComponents/BasicReactHookForm'
import RegisterFields from './FormComponents/RegisterFields'
import FormValidation from './FormComponents/FormValidation'

const App = () => {
  return (
    <div>
      <BasicReactHookForm />
      <RegisterFields />
      <FormValidation />
    </div>
  )
}

export default App
