import { useAuth } from '../context/auth-context'
import Form from "antd/lib/form/Form"
import FormItem from "antd/lib/form/FormItem"
import { Input } from "antd"
import { LongButton } from 'styles/common'

export const LoginScreen = () => {

  const { login } = useAuth()

  const handleSubmit = (values: { username: string, password: string }) => {
    login(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <FormItem name={'username'} rules={[{ required: true, message: 'username is required' }]}>
        <Input placeholder={'username'} type='text' id={'username'}></Input>
      </FormItem>
      <FormItem name={'password'} rules={[{ required: true, message: 'password is required' }]}>
        <Input placeholder={'password'} type='password' id={'password'} />
      </FormItem>
      <FormItem>
        <LongButton htmlType={'submit'} type={'primary'}>Signin</LongButton>
      </FormItem>
    </Form>
  )
}
