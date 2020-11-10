import { h, FunctionalComponent } from 'preact';
import '@esri/calcite-components';
import { useContext } from 'preact/hooks';
import { DetailsContext } from '../../context/DetailsProvider';

const AppSubType: FunctionalComponent = () => {
  const { details, dispatch } = useContext(DetailsContext);

  function handleTypeChange(evt: any) {
    if(evt.target.checked){
      dispatch({ type: 'setSubtype', value: evt.target.value })
    }
  }

  return (
    <div>
      <h2>What kind of app are you listing?</h2>
      <div class="panel panel-white">
        <calcite-radio-button-group layout="vertical" name="appCategory">
          <div class="border-bottom">
            <calcite-radio-button
              scale="l" name="appCategory" value="webmapping"
              oncalciteRadioButtonChange={handleTypeChange} checked={details.listingSubtype=='webmapping'}>
              <calcite-label scale="l">Web Mapping</calcite-label>
            </calcite-radio-button>
            <p>Create a listing for an application that is hosted on the web and allows OAuth 2.0 sign in.</p>
          </div>
          <div class="border-bottom">
            <calcite-radio-button
              scale="l" name="appCategory" value="mobile"
              oncalciteRadioButtonChange={handleTypeChange} checked={details.listingSubtype=='mobile'}>
              <calcite-label scale="l">Mobile</calcite-label>
            </calcite-radio-button>
            <p>Create a listing for a mobile application that allows OAuth 2.0 sign in and links to the relevant platform marketplaces.</p>
          </div>
          <div class="border-bottom">
            <calcite-radio-button
              scale="l" name="appCategory" value="desktop"
              oncalciteRadioButtonChange={handleTypeChange} checked={details.listingSubtype=='desktop'}>
              <calcite-label scale="l">Desktop</calcite-label>
            </calcite-radio-button>
            <p>Create a listing for a desktop application that allows OAuth 2.0 sign in and lets marketplace users download the installation files.</p>
          </div>
        </calcite-radio-button-group>
      </div>
    </div>
  )
}

export default AppSubType
