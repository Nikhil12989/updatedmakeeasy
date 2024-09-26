import React from 'react';
import tean1 from '../../assets/team/1.png';
import tean2 from '../../assets/team/2.png';
import tean3 from '../../assets/team/3.png';
import tean4 from '../../assets/team/4.png';
import tean5 from '../../assets/team/5.png';

const Team = () => {
    // Sample team members data
    const teamMembers = [
        {
            name: 'Ajit Salunke',
            role: 'App Developer',
            photo: tean1, // Use imported image directly
        },
        {
            name: 'Sandeep ',
            role: 'Backend Developer',
            photo: tean2, // Use imported image directly
        },
        {
            name: 'Tanmay Raut',
            role: 'Application Developer ',
            photo: tean3, // Use imported image directly
        },
        {
            name: 'Sapana Salunke ',
            role: 'HR Manager',
            photo: tean4, // Use imported image directly
        },
        {
            name: 'Nikhil ',
            role: 'Full Stack Developer',
            photo: tean5, // Use imported image directly
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Meet Our Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-50 text-center">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                            <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
