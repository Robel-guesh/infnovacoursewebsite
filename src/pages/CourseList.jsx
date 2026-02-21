import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../services/api';
import { Search, Loader2 } from 'lucide-react';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (err) {
                console.error('Failed to fetch courses, showing fallback data');

            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-50 pb-20">
            <Hero />

            <div className="max-w-7xl mx-auto  md:mt-12 p-6">
                <div className="bg-white p-2 md:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 mb-6 md:mb-12 ">
                    <div className="relative flex-grow w-[600px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search courses, instructors..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50/50 border-none focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-inter"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="hidden lg:flex gap-2 shrink-0">
                        <div className="w-[145px] h-[48px] rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"></div>
                        <div className="w-[200px] h-[48px] rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"></div>
                    </div>
                </div>

                <div className="text-gray-500 font-medium pb-8 flex items-center gap-2">

                    Showing <span className="text-secondary font-bold">{filteredCourses.length}</span> of <span className="text-secondary font-bold">{courses.length}</span> courses
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="animate-spin text-primary" size={48} />
                        <p className="text-gray-500 font-medium italic">Loading amazing courses for you...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 text-red-600 p-6 rounded-xl text-center border border-red-100 italic">
                        {error}
                    </div>
                ) : (
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseList;
