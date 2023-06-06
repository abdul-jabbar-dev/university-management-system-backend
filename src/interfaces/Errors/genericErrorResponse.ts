import IGenericErrorMessage from './genericErrorMessage'

export type IGenericErrorResponse = {
  statusCode: number
  messages: string
  errorMessages: IGenericErrorMessage[]
}
