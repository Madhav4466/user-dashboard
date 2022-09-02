import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";

export default function Header({ sort, order }) {
    let [sortOrder, setSortOrder] = useState("none");

    const handleOnClick = (col) => {
        sort(col);
        order === "DEFAULT"
            ? setSortOrder((sortOrder = "none"))
            : order === "ASC"
            ? setSortOrder((sortOrder = "ascending"))
            : setSortOrder((sortOrder = "descending"));
    };

    const handleKeyDown = (e, col) =>
    {
        if(e.keyCode === 32 || e.keyCode === 13)
        {
            handleOnClick(col);
            e.preventDefault();
        }
    }

    return (
      <thead>
        <tr id="row-0">
          <th
            id="cell-00"
            scope="col"
            style={{ cursor: "pointer" }}
            aria-sort={sortOrder}
            onClick={() => handleOnClick("first_name")}
          >
            <Button
              variant="light"
              className={"w-100 h-100"}
              onKeyDown={(e) => handleKeyDown(e, "first_name")}
              tabIndex={-1}
            >
              First Name
              {sortOrder === "none" ? null : sortOrder === "ascending" ? (
                <span aria-hidden="true">
                  <FaSortAlphaDown />
                </span>
              ) : (
                <span aria-hidden="true">
                  <FaSortAlphaUp />
                </span>
              )}
            </Button>
          </th>
          <th
            id="cell-01"
            scope="col"
            onClick={() => handleOnClick("last_name")}
            style={{ cursor: "pointer" }}
            aria-sort={sortOrder}
          >
            <Button
              variant="light"
              className={"w-100 h-100"}
              onKeyDown={(e) => handleKeyDown(e, "last_name")}
              tabIndex={-1}
            >
              Last Name
              {sortOrder === "none" ? null : sortOrder === "ascending" ? (
                <span aria-hidden="true">
                  <FaSortAlphaDown />
                </span>
              ) : (
                <span aria-hidden="true">
                  <FaSortAlphaUp />
                </span>
              )}
            </Button>
          </th>
          <th
            id="cell-02"
            scope="col"
            onClick={() => handleOnClick("email")}
            style={{ cursor: "pointer" }}
            aria-sort={sortOrder}
          >
            <Button
              variant="light"
              className={"w-100 h-100"}
              onKeyDown={(e) => handleKeyDown(e, "email")}
              tabIndex={-1}
            >
              Email
              {sortOrder === "none" ? null : sortOrder === "ascending" ? (
                <span aria-hidden="true">
                  <FaSortAlphaDown />
                </span>
              ) : (
                <span aria-hidden="true">
                  <FaSortAlphaUp />
                </span>
              )}
            </Button>
          </th>
          <th id="cell-03" scope="col">
            Edit
          </th>
          <th id="cell-04" scope="col">
            Delete
          </th>
        </tr>
      </thead>
    );
}
