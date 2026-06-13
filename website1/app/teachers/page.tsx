import React from 'react';
import { Star, Award, BookOpen } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      name: 'Dr. Amit Sharma',
      subject: 'Mathematics',
      experience: '12 Years',
      qualification: 'Ph.D. in Mathematics',
      specialty: 'JEE Preparation',
      bio: 'Expert in advanced mathematics with proven track record of 500+ successful students.',
    },
    {
      name: 'Prof. Anjali Verma',
      subject: 'Physics',
      experience: '10 Years',
      qualification: 'M.Tech, IIT Delhi',
      specialty: 'Conceptual Learning',
      bio: 'Passionate educator focused on making physics concepts easy and understandable.',
    },
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Chemistry',
      experience: '11 Years',
      qualification: 'Ph.D. in Chemistry',
      specialty: 'NEET Preparation',
      bio: 'Specialized in organic and inorganic chemistry with unique teaching methodology.',
    },
    {
      name: 'Ms. Priya Singh',
      subject: 'English',
      experience: '9 Years',
      qualification: 'M.A. English Literature',
      specialty: 'Communication Skills',
      bio: 'Develops comprehensive language and communication skills for all students.',
    },
    {
      name: 'Mr. Vikram Patel',
      subject: 'Biology',
      experience: '8 Years',
      qualification: 'M.Sc. Biology',
      specialty: 'Medical Science',
      bio: 'Expert in biology with special focus on medical entrance exams.',
    },
    {
      name: 'Dr. Neha Gupta',
      subject: 'Science Coordinator',
      experience: '13 Years',
      qualification: 'Ph.D. Education',
      specialty: 'Curriculum Design',
      bio: 'Oversees overall science education quality and student development programs.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-max">
          <h1 className="text-5xl font-bold text-white mb-4">Our Expert Teachers</h1>
          <p className="text-white text-opacity-90 text-lg">
            Dedicated educators committed to your academic excellence
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-light">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-secondary font-bold text-lg mb-2">MEET THE TEAM</p>
            <h2 className="section-title">Highly Qualified & Experienced Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of dedicated professionals with extensive experience in academic excellence and student mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold">{teacher.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dark mb-2">{teacher.name}</h3>
                  <p className="text-secondary font-semibold mb-4 text-lg">{teacher.subject}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award size={18} className="text-primary" />
                      <span className="text-sm">{teacher.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen size={18} className="text-primary" />
                      <span className="text-sm">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star size={18} className="text-yellow-500" />
                      <span className="text-sm">Specialty: {teacher.specialty}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>

                  <button className="mt-6 w-full btn-secondary">Ask Question</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quality Teachers Matter */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Why Quality Teachers Matter</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Atharva Classes, we believe that excellent education starts with excellent teachers. Our faculty members are carefully selected and continuously trained to provide the best learning experience.
              </p>
              <ul className="space-y-4">
                {[
                  'Subject matter expertise',
                  'Student-centric approach',
                  'Regular professional development',
                  'Individual student attention',
                  'Latest teaching methodologies',
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-dark font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary to-purple-400 p-8 rounded-xl text-white text-center">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-sm">Expert Teachers</p>
              </div>
              <div className="bg-gradient-to-br from-secondary to-orange-400 p-8 rounded-xl text-white text-center">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-sm">Avg. Experience</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-teal-400 p-8 rounded-xl text-white text-center">
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-sm">Success Rate</p>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-red-400 p-8 rounded-xl text-white text-center">
                <p className="text-4xl font-bold mb-2">6500+</p>
                <p className="text-sm">Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
