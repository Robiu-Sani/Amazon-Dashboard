import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const dummyProducts = [
    {
      id: 1,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১৮০",
      image:
        "https://jureursicphotography.com/wp-content/uploads/2020/10/2020_02_21_Sephora-Favurite-Box5247.jpg",
    },
    {
      id: 2,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "২০০",
      image:
        "https://img.freepik.com/free-photo/3d-beauty-product-studio_23-2151401472.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "২৫০",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "৩০০",
      image:
        "https://preview.redd.it/commercial-product-background-replace-high-resolution-fast-v0-il61gfh7n9wc1.png?width=640&crop=smart&auto=webp&s=f2b870b56cd27a419d706cb45d4a0998a9fc12c2",
    },
    {
      id: 5,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১০০",
      image:
        "https://img.freepik.com/free-photo/monochrome-beauty-product-skincare_23-2151307277.jpg",
    },
    {
      id: 6,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১৫০",
      image:
        "https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-products-photography1.jpg",
    },
    {
      id: 1,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১৮০",
      image:
        "https://jureursicphotography.com/wp-content/uploads/2020/10/2020_02_21_Sephora-Favurite-Box5247.jpg",
    },
    {
      id: 2,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "২০০",
      image:
        "https://img.freepik.com/free-photo/3d-beauty-product-studio_23-2151401472.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "২৫০",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "৩০০",
      image:
        "https://preview.redd.it/commercial-product-background-replace-high-resolution-fast-v0-il61gfh7n9wc1.png?width=640&crop=smart&auto=webp&s=f2b870b56cd27a419d706cb45d4a0998a9fc12c2",
    },
    {
      id: 5,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১০০",
      image:
        "https://img.freepik.com/free-photo/monochrome-beauty-product-skincare_23-2151307277.jpg",
    },
    {
      id: 6,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১৫০",
      image:
        "https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-products-photography1.jpg",
    },
  ];

  return (
    <div>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat( auto-fit, minmax(225px, 1fr) )",
        }}
      >
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
