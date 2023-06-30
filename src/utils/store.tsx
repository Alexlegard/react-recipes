import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface GlobalState {
    searchValue: string | null,
    setSearchValue: (nextValue: string | null) => void,
    cuisine: string | null,
    setCuisine: (nextValue: string | null) => void,
    // pageNum: number,
    // setPageNum: (nextValue: number) => void,
}

// global state store - can be accessed from anywhere
// store all our global state here -> but watch out, not all state needs to be global

export const useGlobalStateStore = create<GlobalState>()(
    devtools(
        // * persist - sticks it in localStorage so it stays when you refresh
        persist(
            (set) => ({
                searchValue: null,
                setSearchValue: (nextSearchValue) => set(state => ({ searchValue: nextSearchValue })),
                cuisine: null,
                setCuisine: (nextCuisine) => set(state => ({ cuisine: nextCuisine })),
                // Todo why doesn't this work?
                // pageNum: 1,
                // setPageNum: (nextPageNum) => set(state => ({ pageNum: nextPageNum }))
                // Todo url for convenience? but, may cause unnecessary re-renders, -> whenever possible, we prefer to "derive" state rather than sync it 
                // Todo https://kentcdodds.com/blog/dont-sync-state-derive-it
            }),
            {
                name: 'recipes-global-state',
            }
        )
    )
)
