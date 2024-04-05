import PodcastItem from "./PodcastItem"
import SectionTitle from "./SectionTitle"

const PodcastsSection = (props) => {
  const { title, list } = props.data

  // const podcastElements = list.map((podcast, index) => {
  //   return <PodcastItem key={index} data={podcast} />
  // })

  // const podcastElements = list.map((podcast, index) => <PodcastItem key={index} data={podcast} />)

  return (
    <div className="podcasts-section">
      <SectionTitle title={title} />

      <div className="podcasts-list">
        
        {/* <PodcastItem data={list[0]} />
        <PodcastItem data={list[1]} />
        <PodcastItem data={list[2]} />
        <PodcastItem data={list[3]} /> */}

        {/* {podcastElements} */}

        {list.map((podcast, index) => <PodcastItem key={index} data={podcast} />)}

      </div>
    </div>
  )
}

export default PodcastsSection