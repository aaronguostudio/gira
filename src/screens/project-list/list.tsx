import { Table, TableProps } from 'antd'
import dayjs from 'dayjs'
import { FORMAT } from 'styles/common'
import { User } from './search-panel'

interface Project {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
  created: number
}

interface ListProps extends TableProps<Project> {
  users: User[]
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        { key: 'name', title: 'name', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
        { key: 'organization', title: 'organization', dataIndex: 'organization', sorter: (a, b) => a.name.localeCompare(b.name) },
        { key: 'manager', title: 'manager', render(_, project) {
          return <span>{users.find(user => user.id === project.personId)?.name || 'Uknown'}</span>
        } },
        {
          key: 'created', title: 'created', dataIndex: 'created',
          render: (_, project) => project.created ? dayjs(project.created).format(FORMAT.date) : '',
          sorter: (a, b) => a.name.localeCompare(b.name)
        },
      ]}
      rowKey="id"
      { ...props }
    />
  )
}
