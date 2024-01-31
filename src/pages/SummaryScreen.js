import React from 'react';

const SummaryScreen = () => {
	const apiData = JSON.parse(sessionStorage.getItem('apiData'));

	return (
		<div>
			

			{apiData && (
       <>
          <p>{apiData.score}</p>
          <p>{apiData.show.id}</p>
          <p>{apiData.show.url}</p>
          <p>{apiData.show.name}</p>
          <p>{apiData.show.type}</p>
          <p>{apiData.show.language}</p>
          <p>{apiData.show.genres}</p>
          <p>{apiData.show.status}</p>
          <p>{apiData.show.runtime}</p>
          <p>{apiData.show.runtime}</p>
          <p>{apiData.show.averageRuntime}</p>
          <p>{apiData.show.premiered}</p>
          <p>{apiData.show.ended}</p>
          <p>{apiData.show.officialSite}</p>
          <p>{apiData.show.schedule.time}</p>
          <p>{apiData.show.schedule.days}</p>
          <p>{apiData.show.rating.average}</p>
          <p>{apiData.show.rating.average}</p>
          <p>{apiData.show.weight}</p>
          <p>{apiData.show.network.id}</p>
          <p>{apiData.show.network.name}</p>
          <p>{apiData.show.network.country.name}</p>
          <p>{apiData.show.network.country.code}</p>
          <p>{apiData.show.network.country.timezone}</p>
          <p>{apiData.show.network.officialSite}</p>
          <p>{apiData.show.network.webChannel}</p>
          <p>{apiData.show.network.dvdCountry}</p>
          <p>{apiData.show.externals.tvrage}</p>
          <p>{apiData.show.externals.thetvdb}</p>
          <p>{apiData.show.externals.imdb}</p>
          <img src={apiData.show.image.medium} alt={apiData.show.name || 'movei name'} />
          <img src={apiData.show.image.original} alt={apiData.show.name || 'movei name'} />
          <p>{apiData.show.summary}</p>
          <p>{apiData.show.updated}</p>
          <p>{apiData.show._links.self.href}</p>
          <p>{apiData.show._links.previousepisode.href}</p>

        </>
			)}


		</div>
      )
	

};

export default SummaryScreen;
