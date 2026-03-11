// import React from "react";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="text-center">
        
//         <h1 className="text-7xl font-bold text-red-500">404</h1>

//         <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
//           Page Not Found
//         </h2>

//         <p className="text-gray-500 mt-2">
//           Sorry, the page you are looking for does not exist.
//         </p>

//         <Link to="/">
//           <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//             Go Back Home
//           </button>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default NotFound;



// import React from "react";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
//       <div className="text-center">
        
//         {/* Big 404 */}
//         <h1 className="text-[120px] md:text-[180px] font-extrabold animate-pulse">
//           404
//         </h1>

//         {/* Text */}
//         <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//           Oops! Lost in Space 🚀
//         </h2>

//         <p className="text-lg opacity-90 max-w-md mx-auto">
//           The page you are looking for drifted into the digital universe.
//           Let's bring you back home.
//         </p>

//         {/* Button */}
//         <Link to="/">
//           <button className="mt-8 px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-110 transition duration-300">
//             Take Me Home
//           </button>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default NotFound;


import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">

      {/* Stars background */}
      <div className="absolute inset-0 animate-pulse opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10 px-4">
        <h1 className="text-[150px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Lost in the Universe 🌠
        </h2>

        <p className="mt-3 text-gray-300 max-w-md mx-auto">
          The page you are searching for has disappeared into a black hole.
          Let's navigate you back to safety.
        </p>

        <Link to="/">
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-110 transition duration-300 shadow-lg">
            🚀 Return Home
          </button>
        </Link>
      </div>

      {/* Floating planet */}
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-xl opacity-60 animate-bounce"></div>
    </div>
  );
};

export default NotFound;