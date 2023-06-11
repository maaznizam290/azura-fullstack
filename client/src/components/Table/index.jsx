import { Fade } from "react-awesome-reveal";
import { SortIcon } from "utils/Icons";
import "./table.css";

const Table = ({ columns, children }) => {
  return (
    <Fade duration={2300} triggerOnce>

    <div className="my-table-wrapper">
      <table className="my-table">
        <thead>
          <tr>
            {columns?.map((col, i) => (
              <th key={i}>
                <div className="d-flex text-center j-c-c a-i-c">
                  {col?.name}
                  {col?.sort && (
                    <div role="button" className="tbl-sort-icons cursor-pointer d-flex flex-col j-c-c a-i-c">
                      <SortIcon />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
    </Fade>
  );
};

export default Table;
