import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Homepage from './pages/Homepage/Container';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  )
};

export default App;
