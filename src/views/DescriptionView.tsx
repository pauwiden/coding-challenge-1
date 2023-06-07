//import { observer } from "mobx-react-lite";
import DescriptionViewModel from "../viewModels/DescriptionViewModel";
import { Typography } from "@mui/material";

interface Props {
  viewModel: DescriptionViewModel;
}
const DescriptionView = ({ viewModel }: Props) => (

  <>
  <Typography variant='h3'>Web Developer - Interview assignment</Typography>
    <p>
      A college student has worked on this project, but the outcome is of a
      questionable quality. We would like to refactor the code to make it more
      readable and maintainable. We would like to:
    </p>
    <ul>
      <li>apply clean code practices</li>
      <li>use Typescript for type checking</li>
      <li>use MobX for state handling</li>
      <li>use dependency injection</li>
      <li>use Jest for unit and integration testing</li>
      <li>apply MVVM pattern to separate rendering from the business logic</li>
    </ul>
    <p>
      We <strong>must not add any other tools to our stack</strong>, but we have
      the ability to structure and refine code as we please, as long as the
      functionality remains the same.
    </p>
    <p>We are also missing the ability to show selected article.</p>
    <p>
      <strong>Optional</strong>: Write tests which are in your opinion necessary
      to ensure the quality of the code.
    </p>
    <button onClick={viewModel.onClick}>Go to the Search Page</button>
  </>
);
export default DescriptionView;