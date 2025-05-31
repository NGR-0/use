import { memo } from "react";

interface SearchProps {
  onChange: (query: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  console.log("Search rendered");
  return (
    <input
      type="text"
      placeholder="masukan"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default memo(Search);
