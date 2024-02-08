import "./App.css";
import CreateFields from "./components/Create/createFields";
import PreviewForm from "./components/Preview";

function App() {
  return (
    <>
      <div className="flex justify-center items-start  gap-5 ">
        <div className="w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Generate Form
            </h1>
            <CreateFields />
          </div>
        </div>

        <PreviewForm />
      </div>
    </>
  );
}

export default App;
