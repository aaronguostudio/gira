import { useArray, useMount } from './utils'

export const TsReactTest = () => {
  const persons: {name: string, age: number}[] = [
    { name: 'Aaron', age: 34 },
    { name: 'Wilson', age: 38 }
  ]

  const { value, clear, removeIndex, add } = useArray(persons)

  useMount(() => {
    //
  })

  return (
    <div>
      <button onClick={() => add({ name: 'J', age: 23 })}>Add</button>
      <button onClick={() => removeIndex(0)}>Remove index 0</button>
      <button onClick={() => clear()}>Clear</button>
      {
        value.map((person, index) => (
          <div key={index}>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        ))
      }
    </div>
  )
}
