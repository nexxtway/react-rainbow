import { useLayoutEffect, useEffect } from 'react';
import { isServer } from '../utils';

const useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect;

export default useIsomorphicLayoutEffect;
