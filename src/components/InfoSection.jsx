export default function InfoSection() {
  return (
    <div className="space-y-4">
      
      <div className="bg-indigo-50 p-4 rounded-xl">
        <h3 className="font-semibold text-indigo-700">
          About
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Passionate about FED
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl">
        <h3 className="font-semibold text-blue-700">
          Skills
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          React, Tailwind CSS, JavaScript
        </p>
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300">
        Contact
      </button>

    </div>
  );
}