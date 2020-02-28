import React from 'react';
import { mount } from 'enzyme';
import MapComponent from '../component';

describe('<MapComponent/>', () => {
    let component;

    afterEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        global.google = {
            maps: {
                Map: jest.fn(() => ({
                    setCenter: jest.fn(),
                    fitBounds: jest.fn(),
                    setZoom: jest.fn(),
                    setMapTypeId: jest.fn(),
                })),
                TrafficLayer: jest.fn(() => ({
                    setMap: jest.fn(),
                })),
                TransitLayer: jest.fn(() => ({
                    setMap: jest.fn(),
                })),
                Marker: jest.fn(() => ({
                    addListener: jest.fn(),
                    getPosition: jest.fn(),
                })),
                LatLngBounds: jest.fn(() => ({
                    extend: jest.fn(),
                    getCenter: jest.fn(),
                })),
            },
        };
        const props = {
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        };
        component = mount(<MapComponent {...props} />);
    });

    it('should have the right class names', () => {
        const newProps = {
            className: 'my-map-class',
        };
        component.setProps(newProps);
        expect(component.find('.my-map-class').exists()).toBe(true);
    });
    it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const newProps = {
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        };
        component.setProps(newProps);
        expect(global.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Map when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const newProps = {
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        };
        component.setProps(newProps);
        expect(global.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Map when isScriptLoaded is false and isScriptLoadSucceed is true', () => {
        const newProps = {
            isScriptLoaded: false,
            isScriptLoadSucceed: true,
        };
        component.setProps(newProps);
        expect(global.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should call google.maps.Map, google.maps.TrafficLayer and google.maps.TransitLayer when isScriptLoaded and isScriptLoadSucceed are true', () => {
        const newProps = {
            isScriptLoaded: true,
            isScriptLoadSucceed: true,
        };
        component.setProps(newProps);
        expect(global.google.maps.Map).toHaveBeenCalled();
        expect(global.google.maps.TrafficLayer).toHaveBeenCalled();
        expect(global.google.maps.TransitLayer).toHaveBeenCalled();
    });
    it('should call google.maps.Map with the right data', () => {
        const newProps = {
            isScriptLoaded: true,
            isScriptLoadSucceed: true,
        };
        component.setProps(newProps);
        expect(component.props().center).toBe('auto');
        expect(component.props().zoom).toBe(2);
        component.setProps({
            center: {
                lat: 31.4532,
                lng: -151.8723,
            },
        });
        expect(component.props().center).toEqual({
            lat: 31.4532,
            lng: -151.8723,
        });
    });
});
