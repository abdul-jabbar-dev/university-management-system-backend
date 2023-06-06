class MyError extends Error {
  myStatus: number
  constructor(status: number, message: string, stack = '') {
    super(message)
    this.myStatus = status
    if (stack) {
      this.stack = stack
    }
    Error.captureStackTrace(this, this.constructor)
  }
}
export default MyError
