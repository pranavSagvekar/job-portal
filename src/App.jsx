import React, { useEffect, useState } from 'react';
import Navbar from './Comonents/Navbar';
import Header from './Comonents/Header';
import SearchBar from './Comonents/SearchBar';
import JobCard from './Comonents/JobCard';

import { db } from './firebase.config';
import './App.css';
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isCustomSearch, setIsCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setIsCustomSearch(false);
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("postedOn", "desc"));

    const tempJobs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (criteria) => {
    setIsCustomSearch(true);
    const jobsRef = collection(db, "jobs");
    let q = query(jobsRef);

    if (criteria.title) {
      q = query(q, where("title", "==", criteria.title));
    }
    if (criteria.location) {
      q = query(q, where("location", "==", criteria.location));
    }
    if (criteria.experience) {
      q = query(q, where("experience", "==", criteria.experience));
    }
    if (criteria.type) {
      q = query(q, where("type", "==", criteria.type));
    }

    const tempJobs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>

      
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {isCustomSearch && (
        <div className="flex justify-end px-10 mb-4">
          <button onClick={fetchJobs} className="bg-blue-500 px-6 py-2 rounded-md text-white font-semibold">
            Clear Filter
          </button>
        </div>
      )}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;