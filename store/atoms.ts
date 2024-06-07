import { atomWithStorage, createJSONStorage } from "jotai/utils";





const storage:any = createJSONStorage(() => localStorage);

const sidebarOpenAtom = atomWithStorage<boolean>("sidebarOpen", false,storage);

export {
    sidebarOpenAtom
}