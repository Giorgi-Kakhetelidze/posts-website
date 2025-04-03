import React, { useState } from "react";
import Header from './components/layout/Header';
import './assets/styles/global.css';
import './assets/styles/responsive.css';
import PostCard from './components/ui/PostCard';
import PostList from './components/PostList';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>

      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PostList searchTerm={searchTerm}/>        
    </div>
  );
}

export default App;
