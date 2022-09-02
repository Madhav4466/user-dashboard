import React, { useState } from "react";
import TextField from "../textfield/textfield";

export default function TableBody({ data }) 
{
    let [edit, setEdit] = useState(false);

    const handleEditClick = () =>
    {
        setEdit(true);
    }

    const handleKeyDown = (event) =>
    {
      switch(event.keyCode)
      {
        case 37: 
            if(event.target.id.includes("edit-cell"))
            {
              document.getElementById("user-management-grid").focus();
            }
            break;
        default:
      }
    }
    
    return (
        <tbody>
            {data.map((items, index) => {
                return (
                  <tr key={items.id} id={`row-${index+1}`}>
                    {edit ? (
                      <td id={`cell-${index+1}${0}`}>
                        <TextField
                          type="text"
                          label={items.first_name}
                          placeholder={items.first_name}
                          id={`entry-${items.first_name}`}
                        />
                      </td>
                    ) : (
                      <td id={`cell-${index+1}${0}`}>{items.first_name}</td>
                    )}
                    <td id={`cell-${index+1}${1}`}>{items.last_name}</td>
                    <td id={`cell-${index+1}${2}`}>{items.email}</td>
                    <td id={`cell-${index+1}${3}`} aria-label={`Edit`}>
                        <button
                        id={`edit-cell-${index+1}0`}
                        className="btn btn-warning"
                        onClick={handleEditClick}
                        onKeyDown={(e) => handleKeyDown(e)}
                        aria-labelledby={`edit-cell-${index+1}0 cell-${index+1}0 cell-${index+1}1`}
                        tabIndex="-1"
                        >
                            Edit
                        </button>
                    </td>
                    <td id={`cell-${index+1}${4}`} aria-label="Delete">
                        <button
                        id={`delete-row-${index+1}`}
                        className="btn btn-danger"
                        aria-label="Delete"
                        aria-labelledby={`delete-row-${index+1} cell-${index+1}0 cell-${index+1}1`}
                        tabIndex="-1"
                        >
                            Delete
                        </button>
                    </td>
                  </tr>
                );
            })}
        </tbody>
    );
}
