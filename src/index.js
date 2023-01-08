import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MoviesSpecial from './moviesSpecial';
import MoviesNew from './moviesNew';

const moviesSpecial = {
    "movie": [
    {
      "image":"https://static.namava.ir/Content/Upload/Images/5df1aaf4-955a-41ff-ac43-bfbec7b246aa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":"تازه سرباز",
      "type":"سریال",
      "year":2022,
      "rate":"82%",
      "imdb":"7.5",
      "subtitle":"زیرنویس",
    },
    {
      "image":"https://static.namava.ir/Content/Upload/Images/a72c4c32-7067-40b2-b63d-6de918b917d7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":"بیست و پنج بیست و یک",
      "type":"سریال",
      "year":2022,
      "rate":"94%",
      "imdb":"8.7",
      "subtitle":"دوبله نماوا",
    },
    {
      "image":"https://static.namava.ir/Content/Upload/Images/6e5c1372-b735-4a91-b32e-2aadbb5b7878.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":"گارسیا!",
      "type":"سریال",
      "year":2022,
      "rate":"83%",
      "imdb":"5.9",
      "subtitle":"دوبله نماوا",
    },
    {
      "image":"https://static.namava.ir/Content/Upload/Images/f062a4ed-4dd1-416d-8222-3cb9d4842650.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":1923,
      "type":"سریال",
      "year":2022,
      "rate":"87%",
      "imdb":"8.4",
      "subtitle":"زیرنویس",
    },
    {
      "image":"https://static.namava.ir/Content/Upload/Images/3e8127a7-1005-4295-996b-cb804b95358f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":"ساخته شده در آبیس",
      "type":"سریال",
      "year":2017,
      "rate":"90%",
      "imdb":"8.4",
      "subtitle":"دوبله نماوا",
    },
    {
      "image":"https://static.namava.ir/Content/Upload/Images/597ee6af-55eb-4a52-9f61-63885da5e15f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":"شبکه مخفی زنان",
      "type":"سریال",
      "year":1401,
      "rate":"88%",
      "imdb":"",
      "subtitle":"",
    },
    {
      "image":"https://static.namava.ir/Content/Upload/Images/de41b9f5-e6e6-45cc-bf9d-7f88ec429ffa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
      "title":"آنتن",
      "type":"سریال",
      "year":1401,
      "rate":"87%",
      "imdb":"",
      "subtitle":"",
    },
]
};
const moviesNew = {
  "nMovie": [
  {
    "image":"https://static.namava.ir/Content/Upload/Images/a2b93efa-c079-49ec-8f1d-aa6463d0e4a0.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"ویچر: منشا خون ",
    "type":"سریال",
    "year":2022,
    "rate":"",
    "imdb":"4.5",
    "subtitle":"زیرنویس",
  },
  {
    "image":"https://static.namava.ir/Content/Upload/Images/54ce44a2-ed52-4ed4-8aad-fad1a051debc.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"کلایدسکوپ",
    "type":"سریال",
    "year":2023,
    "rate":"95%",
    "imdb":"7.0",
    "subtitle":"زیرنویس",
  },
  {
    "image":"https://static.namava.ir/Content/Upload/Images/5df1aaf4-955a-41ff-ac43-bfbec7b246aa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"تازه سرباز",
    "type":"سریال",
    "year":2022,
    "rate":"84%",
    "imdb":"7.5",
    "subtitle":"زیرنویس",
  },
  {
    "image":"https://static.namava.ir/Content/Upload/Images/f062a4ed-4dd1-416d-8222-3cb9d4842650.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"خویشاوند",
    "type":"سریال",
    "year":2022,
    "rate":"",
    "imdb":"7.4",
    "subtitle":"زیرنویس",
  },
  {
    "image":"https://static.namava.ir/Content/Upload/Images/67704b12-34c9-4eac-b847-2e60981ff58c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"دختر امتیاز بالا",
    "type":"سریال",
    "year":2018,
    "rate":"90%",
    "imdb":"8.0",
    "subtitle":"زیرنویس",
  },
  {
    "image":"https://static.namava.ir/Content/Upload/Images/fcd4b8df-2da7-4d7c-8e82-6a957a41f759.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"پسر دختر سگ گربه موش پنیر",
    "type":"سریال",
    "year":2019,
    "rate":"6.5",
    "subtitle":"دوبله نماوا",
  },
  {
    "image":"https://static.namava.ir/Content/Upload/Images/e3cd01bd-59f0-4d3f-9bb9-fb1207eabb45.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    "title":"۲۸ روز تسخیر شده",
    "type":"سریال",
    "year":2022,
    "rate":"79%",
    "imdb":"3.3",
    "subtitle":"زیرنویس",
  },
]
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <MoviesSpecial data={moviesSpecial}/>
      <MoviesNew data={moviesNew}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
