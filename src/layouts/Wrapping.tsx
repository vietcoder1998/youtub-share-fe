import { PagePermission } from "../pages/403/403";

export type WrappingProps = {
  is404?: boolean;
  is403?: boolean;
  [key: string | number | symbol]: any;
};
export const WrappingComponent: React.FC<WrappingProps> = (
  props: WrappingProps
) => {
  if (props.is403) {
    return <PagePermission />;
  }
  return <>{props.children}</>;
};
