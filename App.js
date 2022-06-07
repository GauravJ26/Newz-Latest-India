
import React, { useState } from 'react'

import './App.css';

import axios from 'axios'

function App() {

  const [news, setNews] = useState([])


  const fetchNews = () => {
    axios.get(" https://newsapi.org/v2/top-headlines?country=in&apiKey=412ea2446cf64b3cae139c65ce3517f2&q=india ")
      .then((response) => {
        //    console.log(response);
        setNews(response.data.articles)

      })

  }

  return (
    <div className="App">

      <>

        <div className="container my-3">

          <button className='btn btn-success' onClick={fetchNews} >Click Here to View Newz</button>

        </div>

        <div className='container'>
          <div className='row'>

            {
              news.map((value, index) => {
                return (

                  <div className='col-4'>

                    <div className="card" style={{ width: "15rem" }}>
                      <img src={value.urlToImage} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                   
                   
                      </div>
                    </div>
                  </div>


                );
              })

            }

          </div>
        </div>

      </>

    </div>

  );
}

export default App;
