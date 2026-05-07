import React from "react";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome back, {user?.email}!</h1>
        <p className="text-gray-600 mb-8">
          Your medical profile is complete. You can now access emergency services and manage your health records.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Emergency Request", color: "bg-red-50 text-red-600", description: "Request immediate medical assistance" },
            { title: "Health Records", color: "bg-blue-50 text-blue-600", description: "View and manage your medical history" },
            { title: "Manage Family", color: "bg-green-50 text-green-600", description: "Link emergency contacts to your profile" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center font-bold mb-4`}>
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
