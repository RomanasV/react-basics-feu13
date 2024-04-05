import NewsItem from "../NewsItem/NewsItem"
import './PrimaryNewsList.css'

const PrimaryNewsList = () => {
  return (
    <div className="primary-news-list">
      <NewsItem
        url="./"
        imageAlt=""
        imageSrc="https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg"
        category="Programavimas"
        title="Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų"
        date="2024-02-01"
      />

      <NewsItem
        url="./"
        imageAlt=""
        // imageSrc="https://codeacademy.lt/wp-content/uploads/2024/02/347376644_264133982758490_1171303248287627440_n-1536x1024.jpg"
        // category="Programavimas"
        title="Vienas kvalifikacijos keitimo projektas valstybės biudžetui atneš 51 mln. papildomų eurų"
        // date="2024-02-01"
      />
    </div>
  )
}

export default PrimaryNewsList