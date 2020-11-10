export interface IDetailsState{
  listingType: string,
  listingSubtype: string,
  source: string | File,
  title: string,
  licenseBy: string,
  licenseType: string,
  trialEnabled: boolean,
  trialDuration: number,
  stepper: HTMLCalciteStepperElement,
  currentStep: number,
  form?: HTMLFormElement,
  errors?: string[],
  itemId?: string,
  resource?: File,
  redirect?: string
}

export interface IDetailsAction{
  type: string,
  value: any
}

export const detailsReducer = (state:IDetailsState, action:IDetailsAction) => {
  switch (action.type) {
    case "setType":
      return {...state, listingType:action.value};

    case "setSubtype":
      state.listingSubtype = action.value;
      break;

    case "setSource":
      state.source = action.value;
      break;

    case "setTitle":
      state.title = action.value;
      break;

    case "setLicenseBy":
      return {...state, licenseBy:action.value};

    case "setLicenseType":
      return {...state, licenseType: action.value};

    case "setTrialEnabled":
      return {...state, trialEnabled: action.value};

    case "setTrialDuration":
      return {...state, trialDuration: action.value};

    case "setStepper":
      state.stepper = action.value;
      break;

    case "setCurrentStep":
      return {...state, currentStep: action.value};

    case "setForm":
      state.form = action.value;
      break;

    case "setErrors":
      return {...state, errors: action.value};

    case "updateContext":
      return {...state};

    case "setItemId":
      return {...state, itemId: action.value};

    case "setResource":
      state.resource = action.value;
      break;

    case "setRedirect":
      state.redirect = action.value;
      break;

    case "reset":
      let {form, currentStep, stepper} = state;
      currentStep = 0
      return {form, currentStep, stepper} as IDetailsState;

    default:
      console.error(`Invalid action type. ${action.type} is not supported.`)
      break;
  }
  return {...state};
}
