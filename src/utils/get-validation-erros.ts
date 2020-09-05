import { ValidationError } from 'yup'

interface IValidationError {
  [key: string]: string
}

const getValidationErrors = (errors: ValidationError): IValidationError => {
  const validationErrors: IValidationError = {}

  errors.inner.forEach((err) => {
    validationErrors[err.path] = err.message
  })

  return validationErrors
}

export { getValidationErrors }
