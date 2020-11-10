import { h, FunctionalComponent } from 'preact';

import './App.css';

import {DetailsProvider} from '../context/DetailsProvider';
import Stepper from './Stepper/Stepper';

const App: FunctionalComponent = () => {
  return (
    <DetailsProvider>
      <Stepper />
    </DetailsProvider>
  )
}

export default App;
