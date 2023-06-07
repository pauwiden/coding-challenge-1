import { ReactElement } from "react";
import SearchViewModel from "../../viewModels/SearchViewModel";
import SearchView from "../../views/SearchView";
import ApiService from "../../service/ApiService";
import InventoryItem from "../../types/InventoryItem";

const apiService = new ApiService();

function Search(): ReactElement {
  const viewModel = new SearchViewModel("", apiService);
  return <SearchView viewModel={viewModel} />;
}

export default Search;
