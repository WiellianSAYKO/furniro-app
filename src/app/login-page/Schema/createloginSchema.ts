import * as Yup from 'yup'

export const createloginSchema = Yup.object().shape({
    username: Yup.string()
              .email('Email format is invalid')
              .required('username is required'),
    password: Yup.string()
              .required('password is required')            
})