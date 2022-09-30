import './App.css';
import Header from './components/Header/Header';
import Activity from './components/Activity/Activity';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question';
function App() {
  const notify = () => {
    toast.success('Target Completed!', {
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
      <Question></Question>
    </div>
  );
}

export default App;
