import happyFramework from '@happyFramework'

let count = 0
let value = ''

const Button = ({ onclick }) => <button onclick={onclick}>+1</button>

const App = () => {
  console.log('render')

  return (
    <center>
      <div id="watch-display">
      </div>
    </center>
  )
}


const render = happyFramework.init(
  document.getElementById('root'), App
)
