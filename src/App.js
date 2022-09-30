import './App.css';
import Header from './components/Header/Header';
import Activity from './components/Activity/Activity';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const notify = () => {
    toast.success('🧘 Meditation Completed!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div>
      <Header></Header>
      <ToastContainer />
      <Activity notify={notify}></Activity>
    </div>
  );
}

export default App;
