import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface Alert {
  id: number;
  title: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
}

export default function ThreatAlerts() {
  const [alerts] = useState<Alert[]>([
    {
      id: 1,
      title: "New Ransomware Variant Detected",
      severity: "high",
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      title: "Phishing Campaign Targeting Banks",
      severity: "high",
      timestamp: new Date().toISOString()
    },
    {
      id: 3,
      title: "Critical Windows Security Update",
      severity: "medium",
      timestamp: new Date().toISOString()
    }
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Live Threat Alerts</h2>
        <AlertCircle className="h-6 w-6 text-red-500 animate-pulse" />
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{alert.title}</h3>
                <p className="text-sm mt-1">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-medium capitalize">
                {alert.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}