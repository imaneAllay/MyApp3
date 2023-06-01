//Imane Allay
// This is a comment to test if I can push my work from codesandbox
// An other test : I can't see my updates in github after pushing again
//test
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { RedStripe } from './RedStripe';
import { BlueStripe } from './BlueStripe';
import { RecoilRoot } from 'recoil';
import { GreenStripe } from './GreenStripe';

export const queryClient = new QueryClient()
function App() {
  return (
    <div>
      
      <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RedStripe/>
        <BlueStripe/>
        <GreenStripe/>
      </RecoilRoot>
      </QueryClientProvider>
      
    </div>
  );
}

