import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TuseAuthStore = {
    email: string
    username: string;
    objectId: string;
    setAuthStore: ({ _email,_username,_objectId} : {_email:string,_username:string,_objectId:string}) => void,
}
const useAuthStore = create<TuseAuthStore>()(persist((set) => ({
    email: '',
    username: '',
    objectId: '',
    /* _email yg didapat dari page login, di assign ke props email yg ada di line 4 */
    setAuthStore: ({ _email, _username, _objectId}) => set(() => ({email: _email,username:_username,objectId:_objectId})),
}), {
    name: 'user-storage',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ objectId: state.objectId }),
}));

export default useAuthStore