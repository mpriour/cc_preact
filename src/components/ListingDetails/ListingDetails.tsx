import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect, useRef } from 'preact/hooks';

import { DetailsContext } from '../../context/DetailsProvider';

const ListingDetails: FunctionalComponent = () => {
  const { details, dispatch } = useContext(DetailsContext);
  const formRef = useRef<HTMLFormElement>();

  useEffect(() => {
    const form = formRef.current
    dispatch({ type: "setForm", value: form })
  }, [])

  const handleUrlInput = (evt: CustomEvent<any>) => {
    dispatch({ type: 'setSource', value: `https://${evt.detail.value}` })
  }

  const handleRedirectInput = (evt: CustomEvent<any>) => {
    dispatch({ type: 'setRedirect', value: `https://${evt.detail.value}` })
  }

  const handleResourceInput = (evt: CustomEvent<any>) => {
    dispatch({type: 'setResource', value: evt.detail.element.files[0]})
  }

  const handleTitleInput = (evt:CustomEvent<any>)=>{
    const val = evt.detail.value;
    dispatch({type: 'setTitle', value: val})
  }

  return (
    <form ref={formRef}>
      <h3>Set your listing’s basic details.</h3>
      <div class="panel panel-white">
      <h3 class="details__title">Source item</h3>
      <div class="details__subtitle">
        Add the URL of the application you want to list on Marketplace. It must support OAuth 2.0 for sign in and should be hosted outside ArcGIS Online.
      </div>
      <calcite-label scale="m">URL
        <calcite-input id="sourceInput" name="source" scale="m" type="text" prefix-text="https://"
          oncalciteInputBlur={handleUrlInput} value={details.source as string || ''}>
        </calcite-input>
      </calcite-label>
      {(details.listingSubtype == 'webmapping') ?
      <calcite-label scale="m" for="redirectInput">Redirect URI (Where the user will be redirected after authentication)
        <calcite-input id="redirectInput" name="redirect" scale="m" type="text" prefix-text="https://" oncalciteInputBlur={handleRedirectInput} value={details.redirect || ''}>
        </calcite-input>
      </calcite-label> :
      (details.listingSubtype == 'desktop') ?
      <calcite-label scale="m" for="resourceInput">Installation package for download (Optional)
        <calcite-input id="resourceInput" name="resource" scale="m" type="file" accept=".zip" oncalciteInputInput={handleResourceInput}>
        </calcite-input>
      </calcite-label>
      : ''}
    </div>
    <div class="panel panel-white">
      <h3 class="details__title">Listing title</h3>
      <div class="details__subtitle">A title is required to save your listing, but it can be changed later.</div>
      <calcite-label scale="s">
        Title
        <calcite-input name="title" scale="m" value={details.title || ''} oncalciteInputInput={handleTitleInput}></calcite-input>
      </calcite-label>
    </div>
    </form>
  )
}

export default ListingDetails
