import { Dimensions, PixelRatio } from 'react-native';

export const WIDTH = Dimensions.get('window').width;

export const HEIGHT = Dimensions.get('window').height;

export const colors = {
    primary: '#F75D36',
    inactive: '#CBCBCB',
    border: '#F8F6F7',
    iconActive: '#0A0A0A',
    iconInactive: '#9D9D9D'
};

export const PIXEL_RATIO = PixelRatio.get();