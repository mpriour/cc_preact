import { h, FunctionalComponent } from 'preact';
import { useContext } from 'preact/hooks';
import '@esri/calcite-components';

import { DetailsContext } from '../../context/DetailsProvider';

const ConfirmDetails: FunctionalComponent = () => {
  const { details } = useContext(DetailsContext);

  return (
    <div>
      <h3>Ensure the following is correct before continuing.</h3>
      <p>We will save a private draft of your listing and you will be able to add more details and configure how your listing page looks in the next step.</p>
      <div class="panel panel-white">
        <section>
          <h3 class="details__title">Source item</h3>
          <div class="panel panel-white">
            <calcite-icon icon="link">
            </calcite-icon>{details.source}
          </div>
        </section>
        <section>
          <h3 class="details__title">Listing title</h3>
          <div class="panel panel-white">{details.title}</div>
        </section>
      </div>
    </div>
  )
}

export default ConfirmDetails
