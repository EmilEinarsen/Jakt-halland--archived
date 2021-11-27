import { EffectCallback, useEffect } from "react"

export const useMount = (fn: EffectCallback) => useEffect(fn, [])
