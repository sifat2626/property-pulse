import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarker,
} from "react-icons/fa";

function PropertyDetails({ property }) {
  const {
    name,
    type,
    description,
    location,
    beds,
    baths,
    square_feet,
    amenities,
    rates,
    seller_info,
  } = property;
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{type}</div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <div className="text-gray-500 mb-4 flex items-center gap-1 justify-center md:justify-start">
          <FaMapMarker className="text-orange-700 text-lg" />
          <p className="text-orange-700">
            {location.street}, {location.city} {location.state}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold">
              {rates.nightly ? (
                <div className="text-2xl font-bold text-blue-500">
                  ${rates.nightly.toLocaleString()}
                </div>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold">
              {rates.weekly ? (
                <div className="text-2xl font-bold text-blue-500">
                  ${rates.weekly.toLocaleString()}
                </div>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold">
              {rates.monthly ? (
                <div className="text-2xl font-bold text-blue-500">
                  ${rates.monthly.toLocaleString()}
                </div>
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <div className="flex items-center gap-2">
            <FaBed />
            <div className="flex items-center gap-1">
              <p>{beds}</p>
              <span className="hidden sm:inline">Beds</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaBath />
            <div className="flex items-center gap-1">
              <p>{baths}</p>
              <span className="hidden sm:inline">Baths</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaRulerCombined />
            <div className="flex items-center gap-1">
              <p>{square_feet}</p>
              <span className="hidden sm:inline">sqft</span>
            </div>
          </div>
        </div>
        <p className="text-gray-500 mb-4 text-center">{description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {amenities.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-600" />
                <p>{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  );
}

export default PropertyDetails;
