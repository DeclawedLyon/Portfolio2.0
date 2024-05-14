import React from 'react';
import './globals.css'

import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useVisualMode from './utils/hooks/useVisualMode';
import AppLayout from './components/layout/AppLayout';



function App() {
  const { 
    mode, 
    transition, 
    back 
  } = useVisualMode('APP')

  return (
    <div>
      {mode === 'LOGIN' && (
        <AppLayout>

        </AppLayout>  
      )}
    </div>
  );
}

export default App;
