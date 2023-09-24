import React from "react";
import { Link } from "react-router-dom";
import classes from "./PlaygroundTable.module.css";

const Table = ({ data }) => {
  return (
    <div className={classes["table-container"]}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>API Testing</th>
            <th>UI Testing</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={item.api} data-cy={item.api}>
                  {item.api}
                </Link>
              </td>
              <td>
                <Link to={item.ui} data-cy={item.ui}>
                  {item.ui}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
