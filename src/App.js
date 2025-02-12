import "./App.css";

import Weather from "./Weather";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather defaultCity="Cologne" />
        <Footer />
      </div>
    </div>
  );
}
