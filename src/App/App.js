import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import React from 'react';

import { statuses } from '../utils';

const App = ({ changeRecord, changeQuery, records, query }) => {
  const handleChangeRecord = (record, status) =>
    changeRecord({
      ...record,
      status,
    });

  const filterAnd = (records, queries) =>
    records.filter(r =>
      queries.every(q =>
        Object.keys(r)
          .filter(r => r !== 'id') // filter only values
          .some(k => r[k].toLowerCase().includes(q))
      )
    );

  const filterOr = (records, queries) =>
    records.filter(r =>
      Object.keys(r)
        .filter(r => r !== 'id')
        .some(k => queries.some(q => r[k].toLowerCase().includes(q)))
    );

  const handleSubmit = e => e.preventDefault();

  const handleFilter = (records, query) => {
    const type = query.includes(' and ')
      ? 'and'
      : query.includes(' or ')
      ? 'or'
      : '';

    const queries = query
      .split(` ${type} `)
      .filter(q => q !== '')
      .map(q => q.trim());

    if (type === 'and') {
      return filterAnd(records, queries).map(r => r.id);
    } else {
      return filterOr(records, queries).map(r => r.id);
    }
  };

  const visibleIDs = handleFilter(records, query.toLowerCase());

  const visibleRecords = !query
    ? records
    : records.filter(r => visibleIDs.includes(r.id));

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm">
            <div className="h3">Records: {records.length}</div>

            <form className="form-group row" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control col-sm-10"
                onChange={e => changeQuery(e.target.value)}
                placeholder="Search Query"
                value={query}
              />
              <button
                className="btn btn-link row col-sm-2"
                onClick={() => changeQuery('')}
                type="button"
              >
                &times;
              </button>
            </form>
          </div>

          <div className="col-sm">
            <ul className="list-group list-group-flush">
              {statuses.map((status, i) => (
                <li
                  key={i}
                  className="list-group-item align-items-center d-flex justify-content-between"
                >
                  {status}
                  <span className="badge badge-primary badge-pill">
                    {records.filter(r => r.status === status).length}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Connected On</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleRecords.map((r, i) => (
            <tr key={i}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.role}</td>
              <td>{r.connected}</td>
              <td className="form-group">
                <select
                  className="form-control"
                  onChange={e => handleChangeRecord(r, e.target.value)}
                  value={r.status}
                >
                  {statuses.map((status, i) => (
                    <option value={status} key={i}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

App.propTypes = {
  changeRecord: PropTypes.func,
  changeQuery: PropTypes.func,
  records: PropTypes.array,
  query: PropTypes.string,
};

export default hot(module)(App);
