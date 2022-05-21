import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'features/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
