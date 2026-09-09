import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import EvideBusTrackingApp from "./pages/EvideBusTrackingApp";
import SchoolBusTracking from "./pages/SchoolBusTracking";
import AIS140Distribution from "./pages/AIS140Distribution";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<SchoolBusTracking />} />
          <Route path="/evide-bus-tracking-app" element={<EvideBusTrackingApp />} />
          <Route path="/school-bus-tracking" element={<SchoolBusTracking />} />
          <Route path="/ais-140-distribution" element={<AIS140Distribution />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
