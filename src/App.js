import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="cont">
        <header className="_header bg-gray-400 row-start-1 col-start-1 col-end-4 lg:col-end-5 flex justify-between items-center p-5">
          <div className="logoLeft">logol</div>
          <div className="logoRight">logor</div>
        </header>
        <div className="_photobg bg-red-200 row-start-3 col-start-2"></div>
        <div className="_content bg-yellow-200 row-start-5 lg:row-start-3 col-start-2 lg:col-start-3">
          content
        </div>
        <div className="_image bg-ext_img1 bg-contain bg-center bg-no-repeat m-5 row-start-2 row-end-5 col-start-2"></div>
      </div>
    </div>
  );
}
