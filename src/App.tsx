import React from 'react';
import './globals.css'

import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useVisualMode from './utils/hooks/useVisualMode';
import AppLayout from './components/layout/AppLayout';
import LargeCard from './components/containers/LargeCard';
import SmallCard from './components/containers/SmallCard';



function App() {
  const { 
    mode, 
    transition, 
    back 
  } = useVisualMode('LOGIN')

  return (
    <div>
      {mode === 'LOGIN' && (
        <AppLayout>
          <>Login</>
          <LargeCard>
            <FontAwesomeIcon icon={solid('bars')}/>
          </LargeCard>
          <SmallCard>
            <FontAwesomeIcon icon={solid('bars')}/>
          </SmallCard>
        </AppLayout>  
      )}
      {mode === 'LOGGED_IN' && (
        <AppLayout>
          <>Loggen In</>
          <FontAwesomeIcon icon={solid('comment-sms')}/>
        </AppLayout>
      )}
    </div>
  );
}

export default App;
