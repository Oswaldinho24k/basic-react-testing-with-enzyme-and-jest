import { useState } from 'react'
import Button from '../components/Button/Button'

const Index = () => {
  const [text, setText] = useState("")

  const handleClick = () => {
    setText("Quédate en tu casa!!!")
  }

  return(
    <div>
      <h2>Kiubole</h2>
      <p>{text}</p>
      <section>
        <Button disabled={true} onClick={handleClick}> Disabled</Button>
        <Button onClick={handleClick}> Pícale</Button>
      </section>
    </div>
  )  
}

export default Index