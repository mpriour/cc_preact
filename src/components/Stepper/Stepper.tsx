import { h, FunctionalComponent, Fragment } from 'preact';
import { useContext } from 'preact/hooks';

import { DetailsContext } from '../../context/DetailsProvider';

import AppStepper from '../Steppers/App';

const Stepper:FunctionalComponent = ()=>{
  const {details, dispatch} = useContext(DetailsContext)

  const stepperEl = <AppStepper />
  const maxSteps = 3

  const nextHandler = () => {
    if(details.currentStep<maxSteps-1){
      details.stepper?.nextStep()
    } else {
      alert("Create item and take user to edit page")
    }
  }

  const cancelHandler = () => {
    dispatch({type: 'reset', value: null});
    details.stepper?.startStep();
  }

  return (
    <Fragment>
      {stepperEl}
      <footer class="panel panel-white">
        <calcite-button class="right" onClick={nextHandler}>Next</calcite-button>
        <calcite-button class="right" appearance="outline" onClick={cancelHandler}>Cancel</calcite-button>
      </footer>
    </Fragment>
  )
}

export default Stepper
