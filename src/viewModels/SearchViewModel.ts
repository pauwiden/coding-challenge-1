import {
  action,
  computed,
  makeAutoObservable,
} from "mobx";
import InventoryItem from "../types/InventoryItem";
import ApiService, { ApiResponseType } from "../service/ApiService";

class SearchViewModel {
  private searchValue: string;
  private apiService: ApiService;
  private fullInventory?: Array<InventoryItem>;
  public filteredInventory = new Array<InventoryItem>();
  

  constructor(searchValue: string, apiService: ApiService) {
    makeAutoObservable(this);
    this.apiService = apiService;
    this.searchValue = searchValue;
    apiService.get().then((value) => {
        this.fullInventory = value.data;
      });
  }

  @action setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.searchValue = e.target.value;
  };

  @action search = () => {
    this.fullInventory
      ? (this.filteredInventory = filterResult(
          this.fullInventory,
          this.searchValue
        ))
      : null;
  };

    @computed get searchResult(): Array<InventoryItem> {
      return this.filteredInventory;
    }
}

const filterResult = (result: Array<InventoryItem>, searchValue: string) => {
  return result.filter((item: InventoryItem) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export default SearchViewModel;
