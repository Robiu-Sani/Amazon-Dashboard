// import toast, { Toaster } from "react-hot-toast";
// import { FaDownload, FaCartPlus } from "react-icons/fa";

// export default function ProductCard({ product }) {
//   const downloadImage = async (url) => {
//     try {
//       const response = await fetch(url, { mode: "cors" });
//       if (!response.ok) throw new Error("Failed to fetch the image");

//       const blob = await response.blob(); // Convert response to Blob
//       const blobUrl = window.URL.createObjectURL(blob); // Create a Blob URL

//       // Create a link to download the file
//       const link = document.createElement("a");
//       link.href = blobUrl;
//       link.download = "downloaded-image.jpg";
//       document.body.appendChild(link);
//       link.click();

//       // Cleanup
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//       console.error("Error downloading the image:", error);
//       toast.error("something worng here. try again!");
//     }
//   };

//   return (
//     <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg">
//       <Toaster className="shadow-md" />
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-[225px] object-cover mb-3 rounded"
//       />
//       <h3 className="text-md font-medium text-rose-600 mb-2">
//         {product.title}
//       </h3>
//       <p className="font-semibold mb-3 flex justify-between items-center">
//         <span className="text-gray-700">প্রাইস:</span>{" "}
//         <span className="text-rose-600">{product.price}</span>
//       </p>
//       <div className="grid grid-cols-2 gap-3">
//         <button
//           onClick={() => downloadImage(product.image)}
//           className="flex w-full items-center justify-center border-green-600 border text-green-700 px-3 py-1 rounded hover:bg-green-200"
//         >
//           <FaDownload className="mr-2" /> ছবি
//         </button>
//         <button className="flex w-full text-center justify-center items-center border-green-600 border text-green-700 px-3 py-1 rounded hover:bg-green-200">
//           <FaCartPlus className="mr-2" /> ফেভারিট
//         </button>
//       </div>
//     </div>
//   );
// }
import toast, { Toaster } from "react-hot-toast";
import { FaDownload, FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
  const downloadImage = async (url) => {
    try {
      const response = await fetch(url, {
        mode: "cors",
      });
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "product-image.jpg"; // File name
      link.click();
      URL.revokeObjectURL(link.href); // Free up memory
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("ডাউনলোড করতে সমস্যা হচ্ছে!");
    }
  };
  

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg">
      <Toaster className="shadow-md" />
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[225px] object-cover mb-3 rounded"
      />
      <h3 className="text-md font-medium text-rose-600 mb-2">
        {product.title}
      </h3>
      <p className="font-semibold mb-3 flex justify-between items-center">
        <span className="text-gray-700">প্রাইস:</span>{" "}
        <span className="text-rose-600">{product.price}৳</span>
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => downloadImage(product.image)}
          className="flex w-full items-center justify-center border-green-600 border text-green-700 px-3 py-1 rounded hover:bg-green-200"
        >
          <FaDownload className="mr-2" /> ছবি
        </button>
        <button className="flex w-full text-center justify-center items-center border-green-600 border text-green-700 px-3 py-1 rounded hover:bg-green-200">
          <FaCartPlus className="mr-2" /> ফেভারিট
        </button>
      </div>
    </div>
  );
}
