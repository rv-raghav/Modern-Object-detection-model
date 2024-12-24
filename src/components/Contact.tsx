import React from 'react';
import { Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
          <p className="text-gray-300 mb-8">Have questions? We'd love to hear from you.</p>
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}