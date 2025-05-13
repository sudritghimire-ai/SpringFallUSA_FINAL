import React, { useState } from 'react';
import SearchBlog from './SearchBlog';
import { Link } from 'react-router-dom';
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi';

const Blogs = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState({ search: '', category: '' });

    // Fetch data using Redux
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
    console.log(blogs);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => setQuery({ search, category });

    return (
        <div className="mt-16 container mx-auto px-4">
            {/* Search Bar */}
            <SearchBlog
                search={search}
                handleSearchChange={handleSearchChange}
                handleSearch={handleSearch}
            />

            {/* Loading State */}
            {isLoading && <div className="text-center text-lg text-gray-500">Loading...</div>}
            {error && <div className="text-center text-lg text-red-500">{error.toString()}</div>}

            {/* Blogs Grid */}
            <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {blogs.map((blog) => (
                    <Link
                        to={`/blogs/${blog._id}`}
                        key={blog._id}
                        className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg bg-white overflow-hidden"
                    >
                        <img
    src={blog.coverImg}
    alt={blog.title}
    className="w-full h-auto object-cover rounded-t-lg transition-all duration-300 hover:opacity-80 hover:scale-105 ease-in-out shadow-lg"
/>

                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3 transition-all duration-300 hover:text-indigo-600">
                                {blog.title}
                            </h2>
                            <p className="text-base text-gray-600 line-clamp-3 font-serif leading-relaxed tracking-wide transition-all duration-300 hover:text-gray-800">
                                {blog.description || 'No description available.'}
                            </p>
                        </div>
                        <div className="p-4 text-right">
                            <span className="text-xs text-gray-400">Read more →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
