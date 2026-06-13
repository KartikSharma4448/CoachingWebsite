'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      category: 'classroom',
      title: 'Modern Classroom Setup',
      description: 'State-of-the-art learning environment with digital boards',
    },
    {
      id: 2,
      category: 'events',
      title: 'Mock Test Session',
      description: 'Students practicing exam-style questions in a timed format',
    },
    {
      id: 3,
      category: 'classroom',
      title: 'Interactive Learning',
      description: 'Teachers engaging students with practical examples',
    },
    {
      id: 4,
      category: 'activities',
      title: 'Science Experiments',
      description: 'Hands-on learning through practical demonstrations',
    },
    {
      id: 5,
      category: 'events',
      title: 'Result Celebration',
      description: 'Students celebrating progress after regular coaching and tests',
    },
    {
      id: 6,
      category: 'classroom',
      title: 'Library Resources',
      description: 'Well-stocked library with reference materials',
    },
    {
      id: 7,
      category: 'activities',
      title: 'Group Study Sessions',
      description: 'Collaborative learning among student groups',
    },
    {
      id: 8,
      category: 'events',
      title: 'Orientation Program',
      description: 'New students orientation and campus tour',
    },
    {
      id: 9,
      category: 'activities',
      title: 'Lab Work',
      description: 'Students conducting experiments in science lab',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'classroom', label: 'Classrooms' },
    { value: 'activities', label: 'Activities' },
    { value: 'events', label: 'Events' },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-max">
          <h1 className="text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-white text-opacity-90 text-lg">
            Capture the moments of learning and growth at Atharva Classes
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-light">
        <div className="container-max">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <p className="text-secondary font-bold text-lg mb-4">BROWSE OUR</p>
            <h2 className="section-title mb-8">Photos & Memories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                      : 'bg-white text-dark border-2 border-gray-200 hover:border-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.title)}
                className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Placeholder with Gradient */}
                <div className="relative h-64 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                    <div>
                      <p className="text-lg font-semibold mb-2">{item.title}</p>
                      <p className="text-sm text-white text-opacity-80">{item.description}</p>
                    </div>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300"></div>

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-110 transition-transform">
                      View
                    </button>
                  </div>
                </div>

                {/* Title Below Image */}
                <div className="bg-white p-4">
                  <h3 className="font-bold text-dark text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600 font-semibold">Photos</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">50+</p>
              <p className="text-gray-600 font-semibold">Events</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-500 mb-2">100+</p>
              <p className="text-gray-600 font-semibold">Activities</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-500 mb-2">24/7</p>
              <p className="text-gray-600 font-semibold">Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-secondary text-white p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <X size={24} />
            </button>
            <div className="bg-gradient-to-br from-primary to-secondary h-96 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{selectedImage}</p>
            </div>
            <div className="p-6">
              <p className="text-dark font-bold text-xl">{selectedImage}</p>
              <p className="text-gray-600 mt-2">This is a sample gallery view. Add actual images for live website.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
