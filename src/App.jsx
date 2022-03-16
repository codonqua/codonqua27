import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Stack, Paper, Box, List, ListItemText, Collapse, ListItemButton } from '@mui/material';
import Home from './components/layout/home'
import HomeAdmin from './admin/home'
import AddBook from './admin/home/mainContent/addBook'
import EditBook from "./admin/home/mainContent/editbook";
import DetailEditBook from './admin/home/mainContent/detailEditBook'
import AddAccount from './admin/home/mainContent/addAccount'
import EditAccount from './admin/home/mainContent/editAccount'
import MaterialFacilities from './admin/home/mainContent/MaterialFacilities'
import Equipment from './admin/home/mainContent/equipment'
import ReadingRoom from './admin/home/mainContent/readingRoom'
import FreezeAccount from './admin/home/mainContent/freezeaccount'
import Login from './components/feature/login'
import StudentSearchBook from "./admin/home/mainContent/studentSearchBook";
import StudentInfor from "./admin/home/mainContent/studentInfor";
import InforLoan from "./admin/home/mainContent/inforLoan";
import ListAccount from "./admin/home/mainContent/listAccount";
import ConfirmFreeze from "./admin/home/mainContent/confirmFreezeAcc";
import DetailBook from "./admin/home/mainContent/detailBook";
import BorrowBook from "./admin/home/mainContent/borrowBook";
import BorrowAndLose from "./admin/home/mainContent/bookBorrowAndLose";
import DetailAccount from "./admin/home/mainContent/detailAccount";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<HomeAdmin />} />
          <Route path='/admin/books/:idBook/update' element={<DetailEditBook />} />
          <Route path='/admin/books/add' element={<AddBook />} />
          <Route path='/admin/books/edit' element={<EditBook />} />
          <Route path='/admin/books/:idBook' element={<DetailBook />} />

          <Route path='/login' element={<Login />} />

          <Route path='/admin/AddAccount' element={<AddAccount />} />
          <Route path='/admin/confirmFreeze' element={<ConfirmFreeze />} />
          <Route path='/admin/EditAccount' element={<EditAccount />} />
          <Route path='/admin/student/:idStudent' element={<DetailAccount />} />

          {/* <Route path='/admin/FreezeAccount' element={<FreezeAccount />} /> */}
          <Route path='/admin/account/list' element={<ListAccount />} />
          <Route path='/admin/MaterialFacilities' element={<MaterialFacilities />} />
          <Route path='/admin/Equipment' element={<Equipment />} />
          <Route path='/admin/ReadingRoom' element={<ReadingRoom />} />
          <Route path='/student/infor' element={<StudentInfor />} />

          <Route path='/admin/borrowBook' element={<BorrowBook />} />
          <Route path='/admin/book/borrowAndLose' element={<BorrowAndLose />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
