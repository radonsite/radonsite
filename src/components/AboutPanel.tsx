import { Link } from 'react-router-dom';

export default function AboutPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">How Solar Panels Work</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Solar panels convert sunlight into electricity using semiconductor cells (usually
        silicon) arranged in modules. When sunlight hits these cells it excites electrons,
        creating a flow of direct current (DC). An inverter then converts DC to alternating
        current (AC) which powers homes and businesses or is exported to the grid.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-4">Benefits</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
        <li>Reduce energy bills and carbon footprint</li>
        <li>Low maintenance and long lifetime</li>
        <li>Pair with batteries for backup power</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-900 mt-4">Things to Consider</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
        <li>Roof orientation and shading affect production</li>
        <li>System sizing, incentives and ROI vary by location</li>
        <li>Choose quality components and professional installation</li>
      </ul>

      <Link
        to="/contact"
        className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  );
}
