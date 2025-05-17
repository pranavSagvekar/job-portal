import React from 'react';
import Navbar from './Comonents/Navbar';
import Header from './Comonents/Header';
import SearchBar from './Comonents/SearchBar';
import JobCard from './Comonents/JobCard';
import jobData from './jobDummyData';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
