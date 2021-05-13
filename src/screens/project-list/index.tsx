import { useState, useEffect } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from 'utils'
import { useHttp } from 'utils/http'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: '', personId: '' })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const debouncedParam = useDebounce(param)
  const client = useHttp()

  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList)
  }, [client, debouncedParam])

  useMount(() => {
    client('users').then(setUsers)
  })

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
