// Shared nav + utilities for all pages
const POSTS_KEY   = 'taih_posts';
const MSGS_KEY    = 'taih_msgs';
const ABOUT_KEY   = 'taih_about';
const SESSION_KEY = 'taih_admin_session';

function getPosts()  { try { return JSON.parse(localStorage.getItem(POSTS_KEY))  || []; } catch(e){ return []; } }
function savePosts(d){ localStorage.setItem(POSTS_KEY, JSON.stringify(d)); }
function getMsgs()   { try { return JSON.parse(localStorage.getItem(MSGS_KEY))   || []; } catch(e){ return []; } }
function saveMsgs(d) { localStorage.setItem(MSGS_KEY,  JSON.stringify(d)); }
function getAbout()  { return JSON.parse(localStorage.getItem(ABOUT_KEY) || 'null') || {
  name: 'TechAI Hub',
  tagline: 'Student. Builder. AI Enthusiast.',
  bio1: "Hey! I'm a BTech CSE (AI & ML) student passionate about Artificial Intelligence and Technology. I created TechAI Hub to document my learning journey and help fellow students navigate the world of AI.",
  bio2: "I believe the best way to learn is to teach. Every article I write is something I've personally explored, tested, or built.",
  skills: ['Python','Machine Learning','HTML & CSS','JavaScript','Video Editing','AI Tools'],
  timeline: [
    { title:'Started Learning Python', sub:'Learned basics and built first projects' },
    { title:'Launched TechAI Hub',     sub:'Built and deployed this website from scratch' },
    { title:'BTech CSE AI & ML',       sub:'Starting college — Aug/Sep 2025' },
    { title:"What's Next",             sub:'Building AI projects, growing this blog' }
  ]
}; }
function saveAbout(d){ localStorage.setItem(ABOUT_KEY, JSON.stringify(d)); }
function isAdmin()   { return sessionStorage.getItem(SESSION_KEY) === '1'; }