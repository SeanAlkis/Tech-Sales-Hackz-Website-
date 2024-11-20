import { Briefcase, Users2, LineChart, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Permanent Placement',
      description: 'Find your perfect long-term career match with our expert recruitment services.',
    },
    {
      icon: Users2,
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for project-based needs and temporary positions.',
    },
    {
      icon: LineChart,
      title: 'Executive Search',
      description: 'Strategic recruitment for senior-level and executive positions.',
    },
    {
      icon: Award,
      title: 'Talent Assessment',
      description: 'Comprehensive evaluation of candidates to ensure the perfect fit.',
    },
  ];

  return (
    <div id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive recruiting solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-indigo-600 shadow-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}