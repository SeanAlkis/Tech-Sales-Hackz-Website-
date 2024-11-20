import { Users, Building2, Trophy, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Placed Candidates', value: '10,000+' },
    { icon: Building2, label: 'Partner Companies', value: '500+' },
    { icon: Trophy, label: 'Success Rate', value: '95%' },
    { icon: Clock, label: 'Years of Experience', value: '15+' },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <stat.icon className="h-10 w-10 text-indigo-600" />
              </div>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="mt-2 text-base text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}