import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
