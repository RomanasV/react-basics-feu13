import Content from '../../components/huddlePage/Content/Content'
import Footer from '../../components/huddlePage/Footer/Footer'
import HeroBox from '../../components/huddlePage/HeroBox/HeroBox'
import './HuddlePage.css'

const HuddlePage = () => {
  const servicesList = [
    {
      title: 'Flowing Conversations',
      description: 'You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.',
      image: ''
    },
    {
      title: 'Grow Together',
      description: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
      image: ''
    },
    {
      title: 'Your Users',
      description: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      image: ''
    },
  ]

  const heroBoxData = {
    header: {
      image: '',
      buttonText: 'Try It Free',
      buttonColor: 'secondary',
    },
    content: {
      pageTitle: 'Build The Community Your Fans Will Love',
      pageDescription: 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.',
      buttonText: 'Get Started For Free',
      image: ''
    }
  }

  return (
    <>
      <HeroBox data={heroBoxData} />
      <Content services={servicesList} />
      <Footer />
    </>
  )
}

export default HuddlePage