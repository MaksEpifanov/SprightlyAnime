import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
