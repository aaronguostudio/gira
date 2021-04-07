export const SearchPanel = ({ param, setParam, users }) => {
  return (
    <div>
      <input type="text" value={param.name} onChange={evt => setParam({ ...param, name: evt.target.value })} />
      <select value={ param.personId } onChange={evt => setParam({ ...param, personId: evt.target.value })}>
        <option value="">Manager</option>
        {
          users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  )
}