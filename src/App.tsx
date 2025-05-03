import { AppSidebar } from "./components/app-sidebar";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div className="App p-3">
      <BrowserRouter>
        <SidebarProvider defaultOpen>
          <AppSidebar />
          <SidebarTrigger />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
