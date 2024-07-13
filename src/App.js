import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="root">
      <div className="left"></div>
      <div className="right">
        <Form />

        <Footer />
      </div>
    </div>
  );
}

export default App;
