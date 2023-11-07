import React from 'react';
import pasta from '../assets/pasta.jpg';
import dessert from '../assets/dessert.jpg'
import ScrollToTop from '../SHARED/ScrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogPosts = [
        {
          title: 'Delicious Pasta Recipes',
          date: 'Published on January 15, 2023',
          imageSrc: pasta,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          title: 'Tasty Dessert Ideas',
          date: 'Published on February 2, 2023',
          imageSrc: dessert,
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore...',
        },
      ];
    
      return (
        <>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-100">
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <img
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                    <p className="text-base">{post.content}</p>
                    <Link to={`/recipe/${1}`}
                      className="text-blue-500 hover:underline mt-4 block"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
      );
};

export default Blog;