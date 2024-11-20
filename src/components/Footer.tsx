import { Mail, Phone, MapPin, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">TalentForce</span>
            </div>
            <p className="mt-4 text-gray-400">
              Connecting exceptional talent with outstanding opportunities since 2008.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#jobs" className="text-gray-400 hover:text-white">Jobs</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Permanent Placement</li>
              <li className="text-gray-400">Contract Staffing</li>
              <li className="text-gray-400">Executive Search</li>
              <li className="text-gray-400">Talent Assessment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@talentforce.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                123 Business Ave, Suite 100
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} TalentForce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}