const Terminal = () => (
  <div className="bg-black text-white p-5 rounded-md mt-8 shadow-lg max-w-xl">
    {/* Terminal top bar with fake buttons */}
    <div className="flex space-x-2 mb-2">
      <span className="bg-red-500 w-3 h-3 rounded-full"></span>
      <span className="bg-yellow-500 w-3 h-3 rounded-full"></span>
      <span className="bg-green-500 w-3 h-3 rounded-full"></span>
    </div>
    {/* Terminal content */}
    <p className="font-mono text-sm">$ git clone https://github.com/karimosman89</p>
  </div>
);

export default Terminal;
