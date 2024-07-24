// Components
import { Search } from '../../../Inputs/Search'

interface titleProps {
    title: string;
    search: string;
    setSearch: (search: string) => void;
}

export function Title({ title, search, setSearch }: titleProps) {
    return (
        <div className="w-full flex flex-col justify-between items-center mt-14 gap-6 sm:flex-row md:flex-row">
            <div className='w-max'>
                <h1 className='Ky text-3xl'>{title}</h1>
            </div>
            <div className='w-max'>
                <Search search={search} setSearch={setSearch} />
            </div>
        </div>
    )
}
