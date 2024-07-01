import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
