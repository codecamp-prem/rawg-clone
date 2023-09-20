import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const refSearch = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (refSearch.current) onSearch(refSearch.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search games ..."
            variant="filled"
            ref={refSearch}
          />
        </InputGroup>
      </form>
    </>
  );
};
export default SearchInput;
