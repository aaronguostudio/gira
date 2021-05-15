import { Input } from "antd"
import Form from "antd/lib/form/Form"
import FormItem from "antd/lib/form/FormItem"
import { useAuth } from '../context/auth-context'
import { LongButton } from 'styles/common'

export const RegisterScreen = () => {

  const { register } = useAuth()

  const handleSubmit = (values: { username: string, password: string }) => {
    register(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <FormItem name="username" rules={[{ required: true, message: 'username is required' }]}>
        <Input placeholder={'username'} type="text" id={'username'} />
      </FormItem>
      <FormItem name="password" rules={[{ required: true, message: 'password is required' }]}>
        <Input placeholder={'password'} type="password" id={'password'} />
      </FormItem>
      <FormItem>
        <LongButton htmlType={'submit'} type={'primary'}>Register</LongButton>
      </FormItem>
    </Form>
  )
}
