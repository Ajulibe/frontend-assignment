import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Layout, Wrapper } from "./style";
import { getMovies, getRecentMovies } from "api";
import { debounce } from "lodash";
import { ModalForm } from "../modal";
import { Spinner } from "../spinner";

//code-splitting for performance gains
const Content = lazy(() => import("../content"));
const Header = lazy(() => import("../header"));

//Debounce is done outside of functional component to prevent recreating the function
//on every re-render

//get movies from api
const fetchMovies = async (searchTerm, callback) => {
  if (searchTerm && searchTerm.length > 0) {
    try {
      const res = await getMovies(searchTerm);
      const { results } = res?.data;
      callback(results);
    } catch (error) {
      return error;
    }
  }
};

const debounceDelay = 500; //ms
//debounce api call to handle onchange events
const debouncedFetchMovies = debounce((searchTerm, cb) => {
  fetchMovies(searchTerm, cb);
}, debounceDelay);

export const AppLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      //Fetch Recent movies on intial mount
      const getInitalMovies = async () => {
        setIsLoading(true);
        try {
          const res = await getRecentMovies();
          const { results } = res?.data;
          setIsLoading(false);
          setMovies(results);
          isMounted.current = true;
        } catch (error) {
          setIsLoading(false);
          return error;
        }
      };

      getInitalMovies();
    } else {
      setIsLoading(true);
      //debouncing fetch api call.
      debouncedFetchMovies(searchTerm, (res) => {
        setMovies(res);
        setIsLoading(false);
      });
    }
  }, [searchTerm]);

  //stop loading if there is no search query
  useEffect(() => {
    if (searchTerm === "") {
      setIsLoading(false);
    }
  }, [searchTerm]);

  const handleChange = (e) => {
    let term = e.target.value;
    setSearchTerm(term);
  };

  //Show modal and pass data to be shown in modal
  const showModal = (item) => {
    setModalData(item);
    setIsVisible(true);
  };

  return (
    <>
      <ModalForm
        isVisible={isVisible}
        onClick={() => {
          setIsVisible(false);
        }}
        modalData={modalData}
      />
      <Layout data-testid="layout">
        <Wrapper>
          <Suspense fallback={<Spinner />}>
            <Header handleChange={handleChange} />
            <Content
              data-testid="content"
              isLoading={isLoading}
              data={movies}
              showModal={showModal}
              isMounted={isMounted}
            />
          </Suspense>
        </Wrapper>
      </Layout>
    </>
  );
};
