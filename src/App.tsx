import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">B. Nithish Kumar</h1>
            <p className="text-xl mb-8">Software Developer | Programming Enthusiast</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Nithish-705" className="hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nithish-kumar-9589532bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:23331a4705@mvgrce.edu.in" className="hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=600"
                alt="Professional headshot"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a dedicated software developer with a strong foundation in programming languages like C, C++, and Python.
                Currently, I'm expanding my skills in database management and frontend development, driven by my passion for
                creating user-friendly applications.
              </p>
              <p className="text-lg text-gray-700">
                I believe in continuous learning and am always excited to take on new challenges that help me grow as a developer.
                My current focus is on mastering frontend technologies to build engaging web experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Skills & Learning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Skills */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Code2 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold">Current Skills</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-2">C Programming</h4>
                  <p className="text-gray-600">Strong foundation in C programming fundamentals and algorithms</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-2">C++</h4>
                  <p className="text-gray-600">Object-oriented programming and STL library experience</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-2">Python</h4>
                  <p className="text-gray-600">Python programming with focus on automation and scripting</p>
                </div>
              </div>
            </div>

            {/* Learning Journey */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold">Learning Journey</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-2">Database Management</h4>
                  <p className="text-gray-600">Learning fundamentals of database design and SQL</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-gray-600">Exploring HTML, CSS, and JavaScript for web development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=500"
                alt="Python Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Python Automation Tool</h3>
                <p className="text-gray-600 mb-4">
                  A Python script for automating repetitive tasks and file organization.
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=500"
                alt="C++ Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Structures Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Collection of common data structures implemented in C++ with practical examples.
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=500"
                alt="C Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Console Based Game</h3>
                <p className="text-gray-600 mb-4">
                  A simple text-based game developed in C, demonstrating programming logic and user interaction.
                </p>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 B. Nithish Kumar. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:23331a4705@mvgrce.edu.in" className="hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
