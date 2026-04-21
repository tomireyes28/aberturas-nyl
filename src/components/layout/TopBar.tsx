import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-950 text-gray-300 py-2 px-4 text-xs sm:text-sm border-b border-gray-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="font-medium text-orange-500">
          Solicite su presupuesto sin cargo
        </p>
        <div className="flex items-center space-x-6">
          <a href="mailto:nicolaschazarreta199@gmail.com" className="flex items-center hover:text-white transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            nicolaschazarreta199@gmail.com
          </a>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-green-500" />
            <span>11-5934-9228 | 11-3437-4195</span>
          </div>
        </div>
      </div>
    </div>
  );
}