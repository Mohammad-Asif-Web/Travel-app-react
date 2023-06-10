import React from 'react'
import "./TripStyle.css"
import TripData from './TripData';

function Trip() {
  return (
    <section className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>
        <div className="tripcard">
            <TripData 
                image="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                heading="Trip In Switzerland"
                text="Switzerland, officially the republic of Switzerland, is a country in Nothern Europe. It consists of over 17,000 mountains. This is best beautifull country in Europe"
            />
            <TripData 
                image="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                heading="Trip In Norway"
                text="Norway, officially the republic of Norway, is a country in Nothern Europe. It consists of over 13,500 mountains. This is best beautifull country in Europe"
            />
            <TripData 
                image="https://images.unsplash.com/photo-1623072932867-80d024272cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                heading="Trip In Indonesia"
                text="Indonesia, officially the republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
            />
        </div>
    </section>
  )
}
export default Trip;