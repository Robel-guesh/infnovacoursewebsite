import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <Link
            to={`/course/${course.id}`}
            className="block group no-underline w-full h-full"
        >
            <div className="bg-white rounded-[10px] overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="relative h-[200px] overflow-hidden">
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 right-4 ${course.level === 'Beginner' ? 'bg-green-100/90' : course.level === 'Intermediate' ? 'bg-blue-100/90' : course.level === 'Advanced' ? 'bg-purple-100/90' : 'bg-green-100/90'} backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-regular ${course.level === 'Beginner' ? 'text-green-700' : course.level === 'Intermediate' ? 'text-blue-700' : course.level === 'Advanced' ? 'text-purple-700' : 'text-green-700'}   `}>
                        {course.level}
                    </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                    <div className='flex-grow flex flex-col'>
                        <div className="text-[#F54900] text-xs font-regular uppercase tracking-wider mb-3">
                            {course.category}
                        </div>
                        <div className='flex-grow flex flex-col justify-between'>

                            <h3 className="font-inter font-medium text-[18px] leading-[28px] tracking-[-0.44px] text-[#0A0A0A] mb-3 line-clamp-2">
                                {course.title}
                            </h3>
                            <p className="text-[#364153] text-[14px] mb-3">
                                Instructor: <span className="text-[#4A5565]/80">{course.instructor}</span>
                            </p>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[#4A5565] text-[14px]">
                        <div className="flex gap-4" >
                            <div className="flex items-center gap-1.5">
                                <Clock size={16} />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Users size={16} />
                                <span>{course.enrolled.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star size={18} className="text-[#FFC107] fill-[#FFC107]" />
                            <span className="font-regular text-[#4A5565]/80">{course.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
