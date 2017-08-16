export type valueType = any

export interface IValueMap {
  [name: string]: valueType
}

export interface IValidationMap {
  [name: string]: (value: valueType, values: IValueMap) => string | boolean
}

export interface IValidationError {
  name: string,
  value: any,
  message: string
}

export default class FormStore {
  private values: IValueMap = {}
  private defaultValues: IValueMap = {}
  private validations: IValidationMap = {}

  constructor (validations?: IValidationMap) {
    this.validations = validations || {}
  }

  get = (name: string) => {
    return this.values[name]
  }

  getValues = () => {
    return this.values
  }

  set = (name: string, value: valueType, callback?: (values: IValueMap) => void) => {
    if (name in this.values) {
      const oldValue = this.values[name]

      if (oldValue === undefined || oldValue === value) {
        return
      }

      let newValue = value
      if (oldValue instanceof Array) {
        newValue = !!oldValue.find((item) => item === newValue)
          ? oldValue.filter((item) => item !== value)
          : [...oldValue, value]
      }

      this.values = {...this.values, [name]: newValue}
    } else {
      this.values[name] = value
      this.defaultValues[name] = value
    }

    if (callback) {
      callback(this.values)
    }
  }

  validate = (name: string, value: any): IValidationError | null => {
    const validation = this.validations[name]

    if (validation) {
      const result = validation(value, this.values)
      if (typeof result === 'string' || !result) {
        const message = result || ''
        return {name, value, message}
      }
    }

    return null
  }

  validateValues = () => {
    const errors: IValidationError[] = []

    for (let name in this.values) {
      const value = this.values[name]
      const error = this.validate(name, value)
      if (error) {
        errors.push(error)
      }
    }

    return errors
  }

  reset = () => {
    this.values = {...this.defaultValues}
  }
}
