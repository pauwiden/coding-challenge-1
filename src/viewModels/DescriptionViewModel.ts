import { action, computed, observable } from "mobx";
import { useNavigate } from "react-router-dom";

class DescriptionViewModel {
  private document: Document;
  private navigate = useNavigate();

  constructor(document: Document) {
    this.document = document;
  }
  @action onClick = () => {
    this.navigate("/search");
  };
}

export default DescriptionViewModel;
