import React from 'react'
import BasicReactHookForm from './FormComponents/BasicReactHookForm'
import RegisterFields from './FormComponents/RegisterFields'
import FormValidation from './FormComponents/FormValidation'
import FormValidationRefs from './FormComponents/FormValidationRefs'

const App = () => {
  return (
    <div>
      <BasicReactHookForm />
      <RegisterFields />
      <FormValidation />
      <FormValidationRefs />
    </div>
  )
}

export default App
