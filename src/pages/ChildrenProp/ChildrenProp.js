import Card from '../../components/Card/Card'
import Container from '../../components/Container/Container'

const ChildrenProp = () => {
  return (
    <Container>
      <h1>ChildrenProp</h1>
      <p>Čia yra paragrafas</p>

      <Card>
        <form>
          <input type='text' />
          <button>Click</button>
        </form>
      </Card>

      <div>
        <Card>
          <h2>Pavadinimas</h2>
          <p>Paragrafas</p>
          <ul>
            <li>vienas</li>
            <li>du</li>
            <li>trys</li>
          </ul>
        </Card>
        <Card>
          <h2>Pavadinimas</h2>
          <p>Paragrafas</p>
          <ul>
            <li>vienas</li>
            <li>du</li>
            <li>trys</li>
          </ul>
        </Card>
        <Card borderStyle={'rectangle'}>
          <h2>Pavadinimas</h2>
          <p>Paragrafas</p>
          <ul>
            <li>vienas</li>
            <li>du</li>
            <li>trys</li>
          </ul>
        </Card>
        <Card borderStyle={'rounded'}>
          <h2>Pavadinimas</h2>
          <p>Paragrafas</p>
          <ul>
            <li>vienas</li>
            <li>du</li>
            <li>trys</li>
          </ul>
        </Card>
      </div>
    </Container>
  )
}

export default ChildrenProp