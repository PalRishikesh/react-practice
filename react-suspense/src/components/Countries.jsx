import { Suspense } from "react";
import CountryListSuspsense from "./CountryListSuspsense";
import Time from "./Time";
import { ErrorBoundary } from "react-error-boundary";

const Countries = () => {
  return (
    <>
      <h2>All Countries - Data fethed on Render</h2>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
      <Suspense fallback={<p>Time is loading...</p>}>
        <Time/>
      </Suspense>
      <Suspense fallback={<p>Data is loading</p>}>
        <CountryListSuspsense />
      </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Countries;
