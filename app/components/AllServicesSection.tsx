'use client'

import Link from 'next/link';
import { ScrollAnimation } from './ScrollAnimation';

export function AllServicesSection() {
  return (
    <ScrollAnimation direction="up" delay={0.25}>
      <section className="max-w-2xl mx-auto pb-20">
        <ScrollAnimation direction="fade" delay={0.3}>
          <h2 className="text-2xl font-bold lg:text-center mb-8">Explore All Services</h2>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.35}>
          <div className="space-y-4 mb-8">
            <Link href="/i-build-websites" className="block p-4 border border-gray-700 rounded-lg hover:border-blue-400 transition-colors">
              <h4 className="font-bold mb-2">Modern Websites</h4>
              <p className="text-sm text-gray-400">Fast, responsive, and user-friendly websites that convert visitors into customers.</p>
            </Link>
            <Link href="/i-build-ror-apps" className="block p-4 border border-gray-700 rounded-lg hover:border-blue-400 transition-colors">
              <h4 className="font-bold mb-2">Ruby on Rails Applications</h4>
              <p className="text-sm text-gray-400">Scalable, maintainable Rails applications built with best practices.</p>
            </Link>
            <Link href="/i-am-a-software-developer" className="block p-4 border border-gray-700 rounded-lg hover:border-blue-400 transition-colors">
              <h4 className="font-bold mb-2">Custom Software Solutions</h4>
              <p className="text-sm text-gray-400">Tailored software development to solve your unique business challenges.</p>
            </Link>
            <Link href="/i-am-an-ai-software-developer" className="block p-4 border border-gray-700 rounded-lg hover:border-blue-400 transition-colors">
              <h4 className="font-bold mb-2">AI & Machine Learning</h4>
              <p className="text-sm text-gray-400">Intelligent systems and ML models that transform data into actionable insights.</p>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </ScrollAnimation>
  );
}