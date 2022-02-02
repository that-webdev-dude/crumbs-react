// npm //
import { useLocation } from 'react-router-dom';

// styles //
import './Search.css';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const keyword = queryParams.get('q');

  return <div>{`search ${keyword}`}</div>;
}
