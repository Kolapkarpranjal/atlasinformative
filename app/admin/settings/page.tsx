'use client';

import AdminLayout from '../../../component/AdminLayout';
import { FaDatabase, FaShieldAlt } from 'react-icons/fa';

export default function SettingsPage() {
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your admin panel settings</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Database</h3>
              </div>
              <p className="text-gray-600 mb-4">Manage database connections</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                Configure
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Security</h3>
              </div>
              <p className="text-gray-600 mb-4">Security settings</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 