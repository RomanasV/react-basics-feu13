import './LargeButton.css'

const LargeButton = (props) => {
  const { title, color } = props

  if (!title) {
    return ''
  }

  let classes = 'primary-button'

  if (color === 'secondary') {
    classes = 'secondary-button'
  }

  return (
    <button className={`button ${classes}`}>{title}</button>
  )
}

export default LargeButton