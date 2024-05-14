import './globals.css'

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useVisualMode from './utils/hooks/useVisualMode';
import AppLayout from './components/layout/AppLayout';
import FullScreenwindow from './components/containers/windows/FullScreenWindow';
import ScrollableWindow from './components/containers/windows/ScrollableWindow';



function App() {
  const { 
    mode, 
    // transition, 
    // back 
  } = useVisualMode('LOGIN')

  return (
    <div>
      {mode === 'LOGIN' && (
        <AppLayout>
          <ScrollableWindow>
            
          <FullScreenwindow>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>

          </FullScreenwindow>
          <FullScreenwindow weight='left'>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>

          </FullScreenwindow>
          <FullScreenwindow weight='right'>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>
            <div>TEST2222</div>

          </FullScreenwindow>
          </ScrollableWindow>
          {/* <FullscreenCard>
          <>Login</>

          </FullscreenCard> */}
          {/* <LargeCard>
            <FontAwesomeIcon icon={solid('bars')}/>
          </LargeCard>
          <SmallCard>
            <FontAwesomeIcon icon={solid('bars')}/>
          </SmallCard> */}
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
