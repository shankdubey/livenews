import React from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const article = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Mary Ilyushina, Amy Cheng",
      title:
        "Edgy calm after Kazakhstan protests amid signs of Tokayev-Nazarbayev rift - The Washington Post",
      description:
        "Kazakh President Kassym-Jomart Tokayev's government detained a powerful ally of his predecessor on charges on high treason.",
      url: "https://www.washingtonpost.com/world/2022/01/08/kazakhstan-russia-protests-csto-tokayev/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M4PTOWDOKEI6ZMPCAU45VD2EKE.jpg&w=1440",
      publishedAt: "2022-01-08T10:06:29Z",
      content:
        "There were also emerging signs of a divide between Kazakhstans two most powerful men, with experts suggesting the rift was partly behind the chaos that led to dozens of deaths since demonstrations br… [+6230 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Mail",
      },
      author: "Jennifer Smith, Harriet Alexander",
      title:
        "Shackled killers of Ahmaud Arbery are led out of court as New Black Panthers stand guard - Daily Mail",
      description:
        "Travis McMichael, his father Gregory and their neighbor William Bryan were led away from court in Georgia on Friday in handcuffs to begin their life sentences, with Travis also shackled.",
      url: "https://www.dailymail.co.uk/news/article-10380573/Shackled-killers-Ahmaud-Arbery-led-court-New-Black-Panthers-stand-guard.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/01/08/10/52681069-0-image-a-9_1641636968493.jpg",
      publishedAt: "2022-01-08T09:28:12Z",
      content:
        "The killers of Ahmaud Arbery were led to their cells in handcuffs on Friday to begin their life sentences, as rifle-toting members of the New Black Panther Party protested outside the Georgia courtro… [+17515 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Hannah Ritchie, CNN",
      title:
        "Novak Djokovic was granted vaccine exemption after testing positive for Covid-19 in December, court documents show - CNN",
      description:
        "Novak Djokovic was granted a medical exemption to compete in the Australian Open as he had recently recovered from Covid-19, court documents published on Saturday by Australia's Federal Circuit show.",
      url: "https://www.cnn.com/2022/01/08/tennis/novak-djokovic-covid-australia-intl-spt/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220106160737-novak-djokovic-super-tease.jpg",
      publishedAt: "2022-01-08T09:25:00Z",
      content:
        "Melbourne, Australia (CNN)Novak Djokovic was granted a medical exemption to compete in the Australian Open as he had recently recovered from Covid-19, court documents published on Saturday by Austral… [+4577 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Facebook parent's head of communications leaves company - Reuters",
      description:
        'The head of communications at Facebook parent Meta Platforms Inc <a href="https://www.reuters.com/companies/FB.O" target="_blank">(FB.O)</a>, John Pinette, is leaving the company, the social media company said late on Friday.',
      url: "https://www.reuters.com/technology/meta-platforms-head-communications-leaves-company-wsj-2022-01-08/",
      urlToImage:
        "https://www.reuters.com/resizer/c8mj7t3vETFVZEJoemxXNwcPpP4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RBQNZMDHRVNYXBILIUA2LHBKL4.jpg",
      publishedAt: "2022-01-08T07:53:00Z",
      content:
        "Jan 7 (Reuters) - The head of communications at Facebook parent Meta Platforms Inc (FB.O), John Pinette, is leaving the company, the social media company said late on Friday.\r\nChris Norton, vice pres… [+1192 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Kazakhstan detains former national security chief on suspicion of treason - Reuters",
      description:
        "Authorities in Kazakhstan have detained Karim Massimov, the former head of the national security committee, on suspicion of treason, the security committee said on Saturday.",
      url: "https://www.reuters.com/world/asia-pacific/kazakhstan-detains-former-national-security-chief-suspicion-treason-2022-01-08/",
      urlToImage:
        "https://www.reuters.com/resizer/4bVQ0ZJQSdFBdtQrCg6BxzA7Ce0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TF25BZ453FPPVI3BFIUF4YGDQ4.jpg",
      publishedAt: "2022-01-08T06:47:00Z",
      content:
        "ALMATY, Jan 8 (Reuters) - Authorities in Kazakhstan have detained Karim Massimov, the former head of the national security committee, on suspicion of treason, the security committee said on Saturday.… [+1673 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Nate Day",
      title:
        "Golden Globes will not be streamed, event will be 'private' amid scandal - Fox News",
      description:
        'The Golden Globes will not be live-streamed anywhere and the event will remain "private" after NBC refused to air this year\'s ceremony.',
      url: "https://www.foxnews.com/entertainment/golden-globes-not-streamed-event-private",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Golden-Globes.jpg",
      publishedAt: "2022-01-08T06:17:29Z",
      content:
        'The Golden Globes will be a "private" affair this year.\r\nQuestions about the glitzy award ceremony have swirled since NBC announced that it would not air the awards in light of the Hollywood Foreign … [+2104 chars]',
    },
  ];
  const [articles, setArticles] = React.useState(article);
  return (
    <div div className="container">
      <div className="row">
        {articles.map((article) => (
          <div className="col-4" key={article.url}>
            <NewsItem
              title={article.title}
              description={article.description}
              urltoimage={article.urlToImage}
              url={article.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
