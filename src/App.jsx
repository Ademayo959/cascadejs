function App() {
  return (
    <div className="h-screen flex items-center justify-self-center bg-linear-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center p-10 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
          Tailwind Works!
        </h1>
        <p className="text-xl text-gray-700">
          You are now running React + Vite + Tailwind successfully!
        </p>
        <button className="mt-6 px-8 py-3 bg-green-400 text-white font-bold rounded-full hover:bg-green-500 transition">
          Celebrate 
        </button>
      </div>
    </div>
  );
}

export default App;
