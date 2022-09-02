import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./index.css";
import Header from "./Header";
import TableBody from "./TableBody";
import MockData from "./MOCK_DATA.json";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";

export default function Grid({ onUpdate, isClose }) {
    const [data, setdata] = useState(MockData);
    const [order, setorder] = useState("ASC");
    var [activeCell, setActiveCell] = useState("");
    var [activeCellIndex, setActiveCellIndex] = useState(0);
    var [activeRowIndex, setActiveRowIndex] = useState(0);

    useEffect(() => {
        if (activeCell !== "") {
            var grid = document.querySelectorAll(
                "#user-management-grid>thead>tr>th,  #user-management-grid>tbody>tr>td"
            );
            grid.forEach((element) => (element.style.outline = "none"));
            let activeCellElement = document.getElementById(activeCell);
            activeCellElement.style.outline = "solid black 3px";

            let childFocusableNode = isChildNodeFocusable(
                activeCellElement.childNodes
            );
            if (childFocusableNode !== false) {
                activeCellElement.firstChild.focus();
                childFocusableNode.parentNode.style.outline = "none";
            }
        }
    });

    const sorting = (col) => {
        if (order === "ASC") {
            console.log("asc");
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
            onUpdate("Descending");
        } else if (order === "DSC") {
            console.log("dsc");
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        } else if (order === "DEFAULT") {
            console.log("default");
            setdata(MockData);
            setorder("ASC");
            onUpdate("Ascending");
        }
    };

    const handleSortKeyDown = (e, by) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            sorting(by);
            e.preventDefault();
        }
    };

    const isChildNodeFocusable = (nodes) => {
        for (var value of nodes.values()) {
            if (
                value.nodeName.toLowerCase() === "button" ||
                value.nodeName.toLowerCase() === "a"
            ) {
                return value;
            }
        }
        return false;
    };

    const navigateLeft = () => {
        if (activeCellIndex > 0) {
            setActiveCellIndex((activeCellIndex -= 1));
            setActiveCell(`cell-${activeRowIndex}${activeCellIndex}`);
        }
    };

    const navigateRight = () => {
        if (
            activeCellIndex <
            document.getElementById(`row-${activeRowIndex}`).childNodes.length -
                1
        ) {
            setActiveCellIndex((activeCellIndex += 1));
            setActiveCell(`cell-${activeRowIndex}${activeCellIndex}`);
        }
    };

    const navigateUp = () => {
        if (activeRowIndex > 0) {
            setActiveRowIndex((activeRowIndex -= 1));
            setActiveCell(`cell-${activeRowIndex}${activeCellIndex}`);
        }
    };

    const navigateDown = () => {
        if (activeRowIndex === 0) {
            setActiveRowIndex((activeRowIndex += 1));
            setActiveCell(`cell-${activeRowIndex}${activeCellIndex}`);
        } else if (
            activeRowIndex <
            document.getElementById(`row-${activeRowIndex}`).parentNode
                .childNodes.length
        ) {
            setActiveRowIndex((activeRowIndex += 1));
            setActiveCell(`cell-${activeRowIndex}${activeCellIndex}`);
        }
    };

    const handleGridFocus = () => {
        setActiveCell(`cell-${activeRowIndex}${activeCellIndex}`);
        if (activeCell !== "") {
            document.getElementById(activeCell).style.outline = "solid 3px";
        }
    };

    const handleGridFocusOut = () => {
        var grid = document.querySelectorAll(
            "#user-management-grid>thead>tr>th,  #user-management-grid>tbody>tr>td"
        );
        grid.forEach((element) => (element.style.outline = "none"));
    };

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 37:
                navigateLeft();
                event.preventDefault();
                break;
            case 38:
                navigateUp();
                event.preventDefault();
                break;
            case 39:
                navigateRight();
                event.preventDefault();
                break;
            case 40:
                navigateDown();
                event.preventDefault();
                break;
            case 13:
                break;
            case 32:
                break;
            default:
        }
    };

    return (
        <Container fluid>
            <Row lg={12} className="d-flex justify-space-between mb-2">
                <Col lg={6}></Col>
                <Col lg={5}>
                    {/* <div
                        className="float-end btn btn-light"
                        onClick={() => sorting("first_name")}
                        onKeyDown={(e) => handleSortKeyDown(e, "first_name")}
                        style={{ cursor: "pointer" }}
                        tabIndex="0"
                        role="button"
                    >
                        {order === "ASC" ? (
                            <FaSortAlphaUp />
                        ) : (
                            <FaSortAlphaDown />
                        )}
                        <span className="h6">&nbsp;Sort</span>
                        {/*<img className="sort" src="./sort.png" alt="Sort" />*/}
                    {/* </div> */}
                </Col>
            </Row>
            <Row lg={12}>
                <div className="table-responsive-xxl">
                    <Table
                        onFocus={handleGridFocus}
                        onBlur={handleGridFocusOut}
                        tabIndex="0"
                        aria-labelledby="grid-modal-title"
                        aria-activedescendant={activeCell}
                        onKeyDown={(e) => handleKeyDown(e)}
                        id="user-management-grid"
                        className="table-hover table-striped align-middle"
                    >
                        <Header sort={sorting} order={order} />
                        <TableBody data={data} />
                    </Table>
                </div>
            </Row>
        </Container>
    );
}
