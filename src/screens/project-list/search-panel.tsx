import { Input, Select } from "antd"
import Form from "antd/lib/form/Form"
import FormItem from "antd/lib/form/FormItem"
import { STYLES } from "styles/common"

export interface User {
  id: string
  name: string
  email: string
  title: string
  organization: string
}

interface SearchPanelProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form layout={'inline'} style={{ marginBottom: STYLES.size2 }}>
      <FormItem>
        <Input placeholder="Project Name" type="text" value={param.name} onChange={evt => setParam({ ...param, name: evt.target.value })} />
      </FormItem>
      <FormItem>
        <Select value={ param.personId } onChange={value => setParam({ ...param, personId: value })}>
          <Select.Option value={''}>Manager</Select.Option>
          {
            users.map(user => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
          }
        </Select>
      </FormItem>
    </Form>
  )
}
