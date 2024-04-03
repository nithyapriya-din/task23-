import LeftSideBar from "../components/Leftsidebar";
import TopBar from "../components/topbar";

export default function BasePage({ children }) {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 place-items-center mx-3 mt-3">
        <TopBar />
      </div>
      <div className="divider"></div>
      <div className="grid h-20 place-items-center">
        <div className="flex flex-nowrap w-full lg:flex-row h-screen">
          <div className="grid flex-grow w-1/4 h-full card bg-base-300 text-center mx-3">
            <LeftSideBar />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow w-3/4 h-full card bg-base-300 rounded-box mx-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
