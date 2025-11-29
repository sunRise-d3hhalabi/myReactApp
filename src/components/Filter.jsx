import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";

const fetchCategories = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function Filter({ onFilter }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  console.log({ data, error, isLoading });
  const categories = data;

  return (
    <aside className="w-1/4 bg-white p-4 pb-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <button
        className="block w-full px-4 py-2 my-2 text-white rounded-sm bg-blue-500"
        onClick={() => onFilter("under500")}
      >
        Under $500
      </button>
      <button
        className="block w-full px-4 py-2 my-2 text-white rounded-sm bg-gray-500"
        onClick={() => onFilter("allProducts")}
      >
        Show all products
      </button>
    </aside>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
