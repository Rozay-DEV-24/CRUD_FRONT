import { Provider } from 'react-redux'
import store from '../../containers/store'
import './MainPage.css';
import MyTable from '../../components/MyTable';
import MyForm from '../../components/MyForm';
import Navbar from '../Navbar';

function MainPage() {
  return (
    < >
    <Provider store={store}>
      <Navbar />
      <div className='alignCheck'>
          <div className='mytable'>
            <MyTable/>
          </div>
          <div className='myform'>
            <MyForm/>
          </div>
      </div>
    </Provider>
    </>
  );
}

export default MainPage;