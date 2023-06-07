import { ReactElement } from "react";
import DescriptionView from "../../views/DescriptionView";
import DescriptionViewModel from "../../viewModels/DescriptionViewModel";


function Home(): ReactElement { 
  const viewModel = new DescriptionViewModel(document);
  return <DescriptionView viewModel={viewModel} />;
}

export default Home;
