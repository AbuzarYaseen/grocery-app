// import React from "react";
// import Image from "next/image";

// const CategoryList = ({ data }) => {
//   return (
//     <div className="mt-5">
//       <h2 className="text-primary font-bold text-2xl">Categories</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5  ">
//         {data.map((category, index) => {
//           {
//             // console.log("category thaaaaa:", category.attributes.name);
//           }
//           return (
//             <div className="flex flex-col items-center justify-center gap-2 bg-green-50 p-2 rounded-2xl group cursor-pointer">
//               <Image
//                 src={
//                   process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
//                   category.attributes.image.data[0].attributes?.url
//                 }
//                 alt="icon"
//                 width={50}
//                 height={50}
//                 className="group-hover:scale-125 transition-all ease-in-out"
//               />
//               <h2 className="group-hover:font-semibold group-hover:text-green-800">
//                 {category.attributes.name}
//               </h2>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;
