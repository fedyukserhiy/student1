import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <AppLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </AppLayout>
  );
}

export default App;
