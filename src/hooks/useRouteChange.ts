import { NextRouter } from "next/router";
import { useEffect } from "react";

export type RouteChangeHandlers = {
  handleChangeStart(url: string): void;
  handleChangeComplete(): void;
  handleChangeError(error: { cancelled: boolean }, url: string): void;
};

export const useRouteChange = (
  router: NextRouter,
  {
    handleChangeComplete,
    handleChangeError,
    handleChangeStart,
  }: RouteChangeHandlers
) => {
  useEffect(() => {
    router.events.on("routeChangeStart", handleChangeStart);
    router.events.on("routeChangeComplete", handleChangeComplete);
    router.events.on("routeChangeError", handleChangeError);

    return () => {
      router.events.off("routeChangeStart", handleChangeStart);
      router.events.off("routeChangeComplete", handleChangeComplete);
      router.events.off("routeChangeError", handleChangeError);
    };
  }, [
    router.events,
    handleChangeStart,
    handleChangeComplete,
    handleChangeError,
  ]);
};
