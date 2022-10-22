import { Button } from './components/Button/button'
import { Icon } from './components/Icon/icon'
import './styles/global.css'

export function App() {
  return (
    <div className="App">
      <div className="headName">
        <h1>Your Name</h1>
      </div>
      <Icon />
      <div className="navButtons">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  )
}
