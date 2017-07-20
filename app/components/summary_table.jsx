import React from 'react'
import { map, reduce } from 'underscore'


// Transforms this:
// [
//   { name: 'Corwin', result: 'wrong' },
//   { name: 'Mandor', result: 'right' },
//   { name: 'Mandor', result: 'wrong' },
//   { name: 'Mandor', result: 'wrong' },
// ]
//
// Into that:
// {
//   Corwin: { rights: 0, wrongs: 1 }
//   Mandor: { rights: 1, wrongs: 2 }
// }
function transformResults(results) {
  return reduce(results, function(memo, el) {
    memo[el.name] || (memo[el.name] = { wrongs: 0, rights: 0 });
    el.result == 'right' ? memo[el.name].rights++ : memo[el.name].wrongs++
    return memo;
  }, {});
}


export default function SummaryTable(props) {
  return (<table className="table table-bordered table-striped">
    <caption>Scores</caption>
    <thead>
      <tr>
        <th>Player</th>
        <th>Rights</th>
        <th>Wrongs</th>
      </tr>
    </thead>
    <tbody>
      {map(transformResults(props.results), function(results, name) {
        return (<tr key={name}>
          <td>{name}</td>
          <td>{results.rights}</td>
          <td>{results.wrongs}</td>
        </tr>);
      })}
    </tbody>
  </table>);
}
