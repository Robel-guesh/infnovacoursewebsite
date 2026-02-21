import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../services/api';
import { Loader2, ArrowLeft, Star, Clock, Users, CheckCircle2 } from 'lucide-react';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await getCourseById(id);
                setCourse(data);
            } catch (err) {
                setError('Failed to fetch course details.');
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <Loader2 className="animate-spin text-primary" size={48} />
                <p className="text-gray-500 italic">Loading course details...</p>
            </div>
        );
    }

    if (error || !course) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <p className="text-red-500 mb-6 italic">{error || 'Course not found'}</p>
                <Link to="/" className="text-primary font-bold flex items-center justify-center gap-2">
                    <ArrowLeft size={20} /> Back to Courses
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            <div className="bg-white px-6 md:px-12 py-4">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
                        <ArrowLeft size={18} /> Back to Courses
                    </Link>
                </div>
            </div>


            <div className="bg-[#FF6B2C] text-white py-12 md:py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-2/3">
                        <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">
                            {course.category}
                        </div>
                        <h1 className="text-4xl md:text[36px] font-bold mb-6">{course.title}</h1>
                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-[15px] font-medium mb-8">
                            <div className="flex items-center gap-2">
                                <Users size={18} />
                                <span>Instructor: <span className="font-bold">{course.instructor}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={18} />
                                <span>{course.enrolled.toLocaleString()} enrolled</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                                <span className="font-bold">{course.rating} rating</span>
                            </div>
                        </div>

                        <div className={`inline-block ${course.level === 'Beginner' ? 'text-green-700' : course.level === 'Intermediate' ? 'text-blue-700' : course.level === 'Advanced' ? 'text-purple-700' : 'text-green-700'} ${course.level === 'Beginner' ? 'bg-green-100/90' : course.level === 'Intermediate' ? 'bg-blue-100/90' : course.level === 'Advanced' ? 'bg-purple-100/90' : 'bg-green-100/90'} backdrop-blur-sm text-blue-100 px-6 py-2 rounded-full text-sm font-bold border border-blue-100/30`}>
                            {course.level} Level
                        </div>
                    </div>

                    <div className="lg:w-1/3 w-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video lg:aspect-square">
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">

                    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="text-[#FF6B2C]">
                                <Users size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">What You'll Learn</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {course.skills.map((skill, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Description</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>{course.description}</p>
                            <p>This comprehensive course is designed to provide you with practical, hands-on experience and real-world skills. You'll work on projects that simulate actual industry scenarios, giving you the confidence to apply your knowledge immediately.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Instructor</h2>
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="w-16 h-16 rounded-full bg-[#FF6B2C] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                {course.instructor.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.instructor}</h3>
                                <p className="text-gray-600 leading-relaxed italic">
                                    Expert {course.category} professional with over 10 years of industry experience. Passionate about teaching and helping students achieve their career goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 sticky top-28">
                        <h2 className="text-[30px] font-bold text-gray-900 mb-2">Enroll Today</h2>
                        <p className="text-gray-500 text-sm mb-8">Join {course.enrolled.toLocaleString()} students already enrolled</p>

                        <div className="space-y-4 mb-8">
                            <button className="w-full bg-[#FF6B2C] text-white py-2 rounded-xl font-bold text-lg hover:bg-[#e85a1a] transition-colors shadow-lg shadow-orange-500/10">
                                Enroll Now
                            </button>
                            <button className="w-full bg-white text-[#FF6B2C] py-2 rounded-xl font-bold text-lg border-2 border-[#FF6B2C]/20 hover:border-[#FF6B2C] transition-colors">
                                Add to Wishlist
                            </button>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-6">This course includes:</h3>
                            <ul className="space-y-4">
                                {[
                                    `${course.duration} of content`,
                                    'Lifetime access',
                                    'Certificate of completion',
                                    'Access on mobile and desktop',
                                    'Downloadable resources'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                        <CheckCircle2 size={16} className="text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
