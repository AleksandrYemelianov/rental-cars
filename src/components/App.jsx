import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import SharedLayout from "./SharedLayout/SharedLayout";
import { Loader } from "./Loader/Loader";

const CatalogPage = lazy(() => import("pages/Catalog/CatalogPage"));
const FavoritesPage = lazy(() => import("pages/Favorites/FavoritesPage"));


export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};

