import { useLayoutEffect, useEffect } from 'react';
import { isServer } from '../utils';

const usePrivateLayoutEffect = isServer ? useEffect : useLayoutEffect;

export default usePrivateLayoutEffect;
