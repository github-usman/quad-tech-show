import React, { useEffect, useState } from 'react'

const SummaryScreen = () => {
    const [showData, setShowData] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('URL_TO_YOUR_API_ENDPOINT');
    //     const data = await response.json();
    //     setShowData(data.show);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };



   setShowData( {
        "score": 0.6857463,
        "show": {
          "id": 19337,
          "url": "https://www.tvmaze.com/shows/19337/salvage-1",
          "name": "Salvage 1",
          "type": "Scripted",
          "language": "English",
          "genres": [
            "Comedy",
            "Adventure",
            "Science-Fiction"
          ],
          "status": "Ended",
          "runtime": 60,
          "averageRuntime": 60,
          "premiered": "1979-01-20",
          "ended": "1979-11-11",
          "officialSite": null,
          "schedule": {
            "time": "12",
            "days": [
              "Sunday"
            ]
          },
          "rating": {
            "average": null
          },
          "weight": 65,
          "network": {
            "id": 3,
            "name": "ABC",
            "country": {
              "name": "United States",
              "code": "US",
              "timezone": "America/New_York"
            },
            "officialSite": "https://abc.com/"
          },
          "webChannel": null,
          "dvdCountry": null,
          "externals": {
            "tvrage": null,
            "thetvdb": 76178,
            "imdb": "tt0078681"
          },
          "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/68/170207.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/68/170207.jpg"
          },
          "summary": "<p>Once upon a time, a junkman had a dream... \"I'm gonna build a spaceship, go to the moon, salvage all the junk that's up there, bring it back and sell it.\" So he put together a team. An ex-astronaut...a fuel expert...they built a rocketship... And they went to the moon.</p>",
          "updated": 1621836558,
          "_links": {
            "self": {
              "href": "https://api.tvmaze.com/shows/19337"
            },
            "previousepisode": {
              "href": "https://api.tvmaze.com/episodes/870932"
            }
          }
        }
      })
      //   fetchData();
    }, []);
    // console.log(showData.show.network.country);
  return (
    <>{
        showData && (
          <> 
           <p>{showData.score}</p>
           <p>{showData.show.id}</p>
           <p>{showData.show.url}</p>
           <p>{showData.show.name}</p>
           <p>{showData.show.type}</p>
           <p>{showData.show.language}</p>
           <p>{showData.show.genres}</p>
           <p>{showData.show.status}</p>
           <p>{showData.show.runtime}</p>
           <p>{showData.show.runtime}</p>
           <p>{showData.show.averageRuntime}</p>
           <p>{showData.show.premiered}</p>
           <p>{showData.show.ended}</p>
           <p>{showData.show.officialSite}</p>
           <p>{showData.show.schedule.time}</p>
           <p>{showData.show.schedule.days}</p>
           <p>{showData.show.rating.average}</p>
           <p>{showData.show.rating.average}</p>
           <p>{showData.show.weight}</p>
           <p>{showData.show.network.id}</p>
           <p>{showData.show.network.name}</p>
           <p>{showData.show.network.country.name}</p>
           <p>{showData.show.network.country.code}</p>
           <p>{showData.show.network.country.timezone}</p>
           <p>{showData.show.network.officialSite}</p>
           <p>{showData.show.network.webChannel}</p>
           <p>{showData.show.network.dvdCountry}</p>
           <p>{showData.show.externals.tvrage}</p>
           <p>{showData.show.externals.thetvdb}</p>
           <p>{showData.show.externals.imdb}</p>
           <img src={showData.show.image.medium} alt={showData.show.name || "movei name"}/>
           <img src={showData.show.image.original} alt={showData.show.name || "movei name"}/>
           <p>{showData.show.summary}</p>
           <p>{showData.show.updated}</p>
           <p>{showData.show._links.self.href}</p>
           <p>{showData.show._links.previousepisode.href}</p>

           <p>{}</p>
            </>
        )
    }</>
  )
}

export default SummaryScreen