import happyFramework from '../happyFramework'

let count = 0
let value = ''

const Button = ({ onclick }) => <button onclick={onclick}>+1</button>

const App = () => {
  console.log('render')

  return (
    <div>
      <h1>Счастливый фреймворк</h1>
      <div><Button onclick={(e) => count++}/></div>
      <div>current count: {count.toString()}</div>

      <p>
        Документация на <a href="https://счастливыйконец.рф/фреймворк">https://счастливыйконец.рф/фреймворк</a>
      </p>
    </div>
  )
}


const render = happyFramework.init(
  document.getElementById('root'), App
)
