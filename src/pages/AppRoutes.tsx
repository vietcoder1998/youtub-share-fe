import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home-page/HomePage";
import { ShareList } from "./share-list/ShareList";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const AppRoutes: React.FC = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/share" element={<ShareList />} />
      </Routes>
    </DefaultLayout>
  );
};
