import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios.get("http://localhost:4000/posts");
      setPosts(result.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, isError, isLoading };
};

export default useBlogPosts;
