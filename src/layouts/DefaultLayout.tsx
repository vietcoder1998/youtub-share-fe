import { Header } from "./components/Header";

export const DefaultLayout: React.FC<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return (
    <div className="bg-[#50d71e]">
      <Header />
      {props.children}
    </div>
  );
};
