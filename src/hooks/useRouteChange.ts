import { NextRouter } from "next/router";
import { useEffect } from "react";

export type RouteChangeHandlers = {
  handleChangeStart(url: string): void;
  handleChangeComplete(): void;
  handleChangeError(error: { cancelled: boolean }, url: string): void;
};

/**
 * @description register and unregister next router events on route changing
 * @param router router from Nextjs
 * @param handlers handlers on different route changing events
 */
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
