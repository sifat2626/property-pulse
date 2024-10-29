import properties from "@/properties.json";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
function HomeProperties() {
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section classNameName="px-4 py-6">
        <div classNameName="container-xl lg:container m-auto">
          <h2 classNameName="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div classNameName="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p>No properties found!</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} {...property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-blue-700 text-white text-lg font-semibold text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
}

export default HomeProperties;
