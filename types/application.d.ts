import { Search } from "./search"

export interface Application{
    _id?: string,
    Name?: String,
	Role?: String,
	Status?: String,
	Location?: String,
	CTC?: Number,
}

export type ApplicationContextType={
    application:Application,
	setApplication:(value:React.SetStateAction<Application>)=>void,
	search:Search,
	setSearch:(value:React.SetStateAction<Search>)=>void
}

