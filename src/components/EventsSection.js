import EventItem from "./EventItem"
import LargeLink from "./LargeLink"
import SectionTitle from "./SectionTitle"

const EventsSection = () => {
  return (
    <div className="events-section">
      <SectionTitle title="Renginiai" />

      <div className="events-list">
        <EventItem 
          imageSrc="https://codeacademy.lt/wp-content/uploads/2024/02/CCBaltics-vizualas-1024x592-1.png" 
          imageAlt="" 
          title="COMIC CON BALTICS 2024" 
          location="Lietuvos parodų ir kongresų centras LITEXPO" 
          day="24" 
          month="geg" 
          url="./"  
        />

        <EventItem 
          title="Naujas event" 
          location="Lietuvos parodų ir kongresų centras LITEXPO" 
          day="5" 
          month="bir" 
          url="./"  
        />

        <EventItem 
          title="COMIC CON BALTICS 2024" 
          location="Lietuvos parodų ir kongresų centras LITEXPO" 
          day="24" 
          month="geg" 
          url="./"  
        />

      </div>

      <LargeLink text="Visi renginiai" url="#" />
    </div>
  )
}

export default EventsSection