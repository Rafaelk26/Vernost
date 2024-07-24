// Development
import { IoSearch } from "react-icons/io5"

interface searchProps {
    search: string;
    setSearch: (search: string) => void;
}

export function Search({ search, setSearch }: searchProps) {
    function handleSearch() {
        setSearch('');
    }

    return (
        <div className="w-full max-w-68 rounded-[5px] outline outline-2 outline-white flex">
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search"
                className="bg-black p-2 w-full outline-none me-1 placeholder:Ky placeholder:text-[16px] placeholder:text-white placeholder:ps-2"
            />
            <IoSearch
                onClick={handleSearch}
                className="relative right-2 top-2 z-30 cursor-pointer"
                size={24}
            />
        </div>
    )
}
