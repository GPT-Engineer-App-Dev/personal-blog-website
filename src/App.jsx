import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, FileText, Mail } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import { ThemeProvider } from "./components/ThemeProvider"; // Import ThemeProvider
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import AddPost from "./pages/AddPost.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider> {/* Wrap the application with ThemeProvider */}
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="add-post" element={<AddPost />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;