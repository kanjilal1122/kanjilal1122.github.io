import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { fetchApi } from "../store/actions/index";

import "./FormPart.css";

const FormPart = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="d-flex ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchApi(search));
        }}
      >
        <input
          type="text"
          placeholder="search anything.."
          className="m-1 input-style"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div>
        <a href="www.quora.com" className="m-2 b-2">
          <i className="bi bi-bell bell-style "></i>
        </a>
      </div>
    </div>
  );
};

export default FormPart;
