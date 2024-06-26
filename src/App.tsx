import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BasicLayout from "./ui/BasicLayout";
import CreateSuggestion from "./suggestion/CreateSuggestion";
import SuggestionList from "./suggestion/SuggestionList";
import ViewSuggestion from "./suggestion/ViewSuggestion";
import AppLayout from "./ui/AppLayout";
import FullSpinner from "./ui/FullSpinner";
import Signin from "./ui/Signin";
import Signup from "./ui/Signup";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullSpinner />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="suggestions" />} />
            <Route path="suggestions" element={<SuggestionList />} />
            <Route path="suggestions/:id" element={<ViewSuggestion />} />
          </Route>

          <Route element={<BasicLayout />}>
            <Route path="suggestions/create" element={<CreateSuggestion />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
