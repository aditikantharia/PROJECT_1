import React from 'react'
import Card from './Components/card'
import { FileMusic, User } from 'lucide-react';
import Card1 from './Components/Card1';
import Card2 from './Card2';

const App = () => {
      const data =[
  {
    "photo": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "Rahul Sharma",
    "username": "rahul_dev",
    "bio": "Frontend developer who loves JavaScript.",
    "points": 1200,
    "friends": 85,
    "joinedAt": "March 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Priya Patel",
    "username": "priya_codes",
    "bio": "UI/UX designer and creative thinker.",
    "points": 980,
    "friends": 64,
    "joinedAt": "January 2024"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Amit Verma",
    "username": "amit_v",
    "bio": "Backend developer and Node.js enthusiast.",
    "points": 1500,
    "friends": 102,
    "joinedAt": "July 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Neha Singh",
    "username": "neha_design",
    "bio": "Passionate about digital design.",
    "points": 760,
    "friends": 48,
    "joinedAt": "September 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "Rohit Gupta",
    "username": "rohit_tech",
    "bio": "Tech blogger and software engineer.",
    "points": 1340,
    "friends": 95,
    "joinedAt": "May 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/6.jpg",
    "name": "Anjali Mehta",
    "username": "anjali_m",
    "bio": "Full stack developer and coffee lover.",
    "points": 1110,
    "friends": 73,
    "joinedAt": "February 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/7.jpg",
    "name": "Karan Shah",
    "username": "karan_js",
    "bio": "JavaScript developer and open source contributor.",
    "points": 870,
    "friends": 56,
    "joinedAt": "November 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/8.jpg",
    "name": "Riya Desai",
    "username": "riya_ui",
    "bio": "Frontend enthusiast and UI specialist.",
    "points": 920,
    "friends": 61,
    "joinedAt": "June 2024"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/9.jpg",
    "name": "Arjun Nair",
    "username": "arjun_code",
    "bio": "Problem solver and backend architect.",
    "points": 1400,
    "friends": 88,
    "joinedAt": "August 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/10.jpg",
    "name": "Sneha Joshi",
    "username": "sneha_dev",
    "bio": "Web developer exploring new technologies.",
    "points": 1050,
    "friends": 69,
    "joinedAt": "April 2023"
  }
];

  return (
    <>
    <section className='flex flex-wrap justify-center'> 
    {data.map(function (user){
    //  console.log( user);
      return <Card data={user}/>
    })}
    </section>
    <Card1/>
    <Card2 />
    </>
    
  )
}

export default App