import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from '../../assets/img.png';
import './body.css';

const Body = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = () => {
    axios.get(`https://api.agify.io?name=${search}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Errore durante la chiamata API:", err);
      });
  };

  const handleDelete = () => {
    setData(null);
    setSearch('');
  };

  return (
    <section className="body-wrapper">
        <section className="hero-content">
            <h1 className="hero-text">Ask me a question</h1>
            <p className="hero-p">{`about someone's age`}</p>
                <section className="search-bar">
                <FontAwesomeIcon 
                    icon={faSearch} 
                    className="search-icon"
                    size="2x"
                />
                <input 
                    type="text" 
                    placeholder="Type a name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="searchBtn" onClick={handleSearch}>
                    Search
                </button>
                </section>
                <section className="response">
                    {data ? (
                        <div className="data">
                        <button className="del-button" onClick={handleDelete}>X</button>
                        <p>Name: {data.name}</p>
                        <p>Age: {data.age}</p>
                        </div>
                    ) : (
                        <p>No data to display</p>
                    )}
                </section>
        </section>
        <img src={Image} alt="robot" />
    </section>
  );
};

export default Body;
