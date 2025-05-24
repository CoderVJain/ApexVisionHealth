import { Route, Switch } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Healthcare from "@/pages/Healthcare";
import Accounting from "@/pages/Accounting";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <MainLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/healthcare" component={Healthcare} />
          <Route path="/accounting" component={Accounting} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </TooltipProvider>
  );
}

export default App;
