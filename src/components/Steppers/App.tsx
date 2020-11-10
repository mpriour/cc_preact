import { h, FunctionalComponent, Fragment } from 'preact';
import { useRef, useEffect, useContext } from 'preact/hooks';
import '@esri/calcite-components';

import { DetailsContext } from "../../context/DetailsProvider";

import AppSubType from '../SubTypes/AppSubType';
import ListingDetails from '../ListingDetails/ListingDetails';
import ConfirmDetails from '../ConfirmDetails/ConfirmDetails';

const AppStepper: FunctionalComponent = () => {
  const { details, dispatch } = useContext(DetailsContext);
  const stepperRef = useRef({} as HTMLCalciteStepperElement);
  useEffect(()=>{
    dispatch({type: 'setStepper', value: stepperRef.current});
    stepperRef.current.startStep();
  }, [])
  return (
    <Fragment>
      <h2>Create Listing</h2>
      <calcite-stepper numbered ref={stepperRef}
        oncalciteStepperItemChange={({detail})=>{dispatch({type:'setCurrentStep', value:detail.position})}}>
        <calcite-stepper-item item-title="Listing type">
        </calcite-stepper-item>
        <calcite-stepper-item item-title="Listing details">
        </calcite-stepper-item>
        <calcite-stepper-item item-title="Create Listing">
        </calcite-stepper-item>
      </calcite-stepper>
      <main>
      {(details.currentStep===0)?<AppSubType></AppSubType> : ''}
      {(details.currentStep===1)?<ListingDetails></ListingDetails> : ''}
      {(details.currentStep===2)?<ConfirmDetails></ConfirmDetails> : ''}
      </main>
    </Fragment>
  )
}

export default AppStepper;
