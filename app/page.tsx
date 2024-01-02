import Image from 'next/image'
import Card from './components/card/card'
import Button from './components/button/button'
var count:number=10;

export default function Home() {
  return (
    <main >
      hello world
      <Card/>
      <Button title='apply'/>
      <Button title='basic'/>
      {count>5 ?<span>{count}</span>:""}
      {count>5 &&<span>{count}</span>}
    </main>
  )
}
