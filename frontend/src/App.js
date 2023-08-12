import './App.css';
import Header from "./components/ui/header";
import LoginButton from "./components/ui/login";
function App() {
  return (
      <div className="flex flex-col h-screen">
          <Header />
          <div
              className="px-12 bg-black text-white flex 
              flex-col h-full items-center text-center"
          >
              <div className="my-auto">
                  <h1 className="text-7xl py-2">
                      Craft Your Perfect Digital Resume with Ease.
                  </h1>
                  <h2 className="text-5xl py-1">
                      Build, edit, and share your portflio on the go with
                      PostFlix
                  </h2>
                  <div className="py-20">
                      <LoginButton
                          text={"Click here to create your portfolio now"}
                          buttonClass="py-6"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
