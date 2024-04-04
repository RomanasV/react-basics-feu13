const SectionTitle = (props) => {
  if (!props.title) {
    return ''
  }

  return (
    <h2 className="section-title">{props.title}</h2>
  )
}

export default SectionTitle