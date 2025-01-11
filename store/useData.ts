import { create } from "zustand-vue"

type Data = {}

const useData = create<Data>((set, store) => ({}))

export default useData
