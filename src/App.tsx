import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { Layout } from "./components/Layout";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import QuizPage from "./pages/QuizPage";
import Topics from "./pages/Topics";
import TopicPage from "./pages/TopicPage";
import Acts from "./pages/Acts";
import Flashcards from "./pages/Flashcards";
import Exercises from "./pages/Exercises";

function NotFound() {
  return (
    <div className="grid place-items-center py-20 text-center">
      <div className="space-y-3">
        <p className="text-5xl font-bold">404</p>
        <p className="text-muted-foreground">Nie znaleziono strony.</p>
        <Link to="/">
          <Button>Wróć na stronę główną</Button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testy" element={<Quizzes />} />
          <Route path="/testy/:id" element={<QuizPage />} />
          <Route path="/zagadnienia" element={<Topics />} />
          <Route path="/zagadnienia/:id" element={<TopicPage />} />
          <Route path="/cwiczenia" element={<Exercises />} />
          <Route path="/fiszki" element={<Flashcards />} />
          <Route path="/akty" element={<Acts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
