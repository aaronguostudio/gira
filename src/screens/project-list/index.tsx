import { useState, useEffect } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from 'utils'
import { useHttp } from 'utils/http'
import styled from '@emotion/styled'
import { STYLES } from 'styles/common'
import { Typography } from 'antd'

export const ProjectListScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [param, setParam] = useState({ name: '', personId: '' })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const [error, setError] = useState<null | Error>(null)
  const debouncedParam = useDebounce(param)
  const client = useHttp()

  useEffect(() => {
    setIsLoading(true)
    client('projects', { data: cleanObject(debouncedParam) })
      .then(setList)
      .catch(async err => {
        setList([])
        setError(await err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam])

  useMount(() => {
    client('users').then(setUsers)
  })

  return (
    <Container>
      <h1>Project List</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />

      { error? <Typography.Text type={'danger'}>
        { error.message }
      </Typography.Text> : null }

      <List dataSource={list} users={users} loading={isLoading} />
    </Container>
  )
}

const Container = styled.div`
  padding: ${STYLES.size2}
`
