import { isServer } from '../../libs/utils';

// eslint-disable-next-line import/prefer-default-export
export const FileListType = isServer ? Object : window.FileList;
