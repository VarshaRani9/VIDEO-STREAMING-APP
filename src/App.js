import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

// Head
// Body
//   sidebar
//     Menu items
//   Main container
//     ButtonsList
//     VideoContainer
//       VideoCard

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path: "demo",
      element: <><Demo/><Demo2/></>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      {/* <Body/> */}
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App; 