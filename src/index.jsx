import * as happyFramework from '../framework'

let count = 0

const Button = ({ click }) => <button click={click}>+1</button>

const App = () => {
  console.log('render')

  return (
    <>
      <Button click={(e) => count++}/>
      current count:{' '}
      {count.toString()}
    </>
  )
}


const render = happyFramework.init(
  document.getElementById('root'), App
)
