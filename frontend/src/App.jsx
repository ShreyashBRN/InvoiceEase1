export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind CSS is working! 🎉
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Test Button
      </button>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <p className="text-gray-700">
          If you see styled text, a blue button, and a white card, Tailwind is working!
        </p>
      </div>
    </div>
  );
}