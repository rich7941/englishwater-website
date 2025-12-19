import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import LeadPipeReplacement from "./pages/services/LeadPipeReplacement";
import WaterSupplyPipeRenewals from "./pages/services/WaterSupplyPipeRenewals";
import WaterSupplyPipeInstallations from "./pages/services/WaterSupplyPipeInstallations";
import WaterSupplyPipeRepairs from "./pages/services/WaterSupplyPipeRepairs";
import WaterMainInstallations from "./pages/services/WaterMainInstallations";
import WaterMainRenewals from "./pages/services/WaterMainRenewals";
import WaterMainRepairs from "./pages/services/WaterMainRepairs";
import WaterLeakDetection from "./pages/services/WaterLeakDetection";
import ImpactMoling from "./pages/services/ImpactMoling";
import WaterLeaks from "./pages/services/WaterLeaks";
import LeadPipeReplacementScheme from "./pages/help-advice/LeadPipeReplacementScheme";
import LeadPipeInEngland from "./pages/help-advice/LeadPipeInEngland";
import LowWaterPressure from "./pages/help-advice/LowWaterPressure";
import LeadPipeReplacementAdvice from "./pages/help-advice/LeadPipeReplacement";
import WaterFilter from "./pages/help-advice/WaterFilter";
import ImpactMolingPrices from "./pages/help-advice/ImpactMolingPrices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import London from "./pages/locations/London";
import Birmingham from "./pages/locations/Birmingham";
import Leeds from "./pages/locations/Leeds";
import Sheffield from "./pages/locations/Sheffield";
import Bradford from "./pages/locations/Bradford";
import Liverpool from "./pages/locations/Liverpool";
import Manchester from "./pages/locations/Manchester";
import Bristol from "./pages/locations/Bristol";
import Leicester from "./pages/locations/Leicester";
import Coventry from "./pages/locations/Coventry";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/about" component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/reviews"} component={Reviews} />
        <Route path={"/services/lead-pipe-replacement"} component={LeadPipeReplacement} />
        <Route path={"/services/water-supply-pipe-renewals"} component={WaterSupplyPipeRenewals} />
        <Route path={"/services/water-supply-pipe-installations"} component={WaterSupplyPipeInstallations} />
        <Route path={"/services/water-supply-pipe-repairs"} component={WaterSupplyPipeRepairs} />
        <Route path="/services/water-main-installations" component={WaterMainInstallations} />
      <Route path="/services/water-main-renewals" component={WaterMainRenewals} />
      <Route path="/services/water-main-repairs" component={WaterMainRepairs} />
      <Route path="/services/water-leak-detection" component={WaterLeakDetection} />
      <Route path="/services/impact-moling" component={ImpactMoling} />
      <Route path="/help-advice/water-leaks" component={WaterLeaks} />
      <Route path="/help-advice/lead-pipe-replacement-scheme" component={LeadPipeReplacementScheme} />
      <Route path="/help-advice/lead-pipe-in-england" component={LeadPipeInEngland} />
      <Route path="/help-advice/low-water-pressure" component={LowWaterPressure} />
      <Route path="/help-advice/lead-pipe-replacement" component={LeadPipeReplacementAdvice} />
      <Route path="/help-advice/water-filter" component={WaterFilter} />
      <Route path="/help-advice/impact-moling-prices-2026-england" component={ImpactMolingPrices} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/locations/london" component={London} />
      <Route path="/locations/birmingham" component={Birmingham} />
      <Route path="/locations/leeds" component={Leeds} />
      <Route path="/locations/sheffield" component={Sheffield} />
      <Route path="/locations/bradford" component={Bradford} />
      <Route path="/locations/liverpool" component={Liverpool} />
      <Route path="/locations/manchester" component={Manchester} />
      <Route path="/locations/bristol" component={Bristol} />
      <Route path="/locations/leicester" component={Leicester} />
      <Route path="/locations/coventry" component={Coventry} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
