import React from 'react';
import { mount } from 'enzyme';
import MapComponent from '../component';

describe('<MapComponent/>', () => {
    beforeEach(() => {
        window.google = {
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
                })),
            },
        };
    });

    /* it('should have the right class names', () => {
        const props = {
            isScriptLoaded: true,
            isScriptLoadSucceed: true,
        };
        const component = mount(<MapComponent className="my-map-class" {...props} />);
        expect(component.find('.my-map-class').exists()).toBe(true);
    });
    it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const props = {
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        };
        mount(<MapComponent {...props} />);
        expect(window.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Map when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const props = {
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        };
        mount(<MapComponent {...props} />);
        expect(window.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Map when isScriptLoaded is false and isScriptLoadSucceed is true', () => {
        const props = {
            isScriptLoaded: false,
            isScriptLoadSucceed: true,
        };
        mount(<MapComponent {...props} />);
        expect(window.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should call google.maps.Map, google.maps.TrafficLayer and google.maps.TransitLayer when isScriptLoaded and isScriptLoadSucceed are true', () => {
        const props = {
            isScriptLoaded: true,
            isScriptLoadSucceed: true,
        };
        mount(<MapComponent className="my-map-class" {...props} />);
        expect(window.google.maps.Map).toHaveBeenCalled();
        expect(window.google.maps.TrafficLayer).toHaveBeenCalled();
        expect(window.google.maps.TransitLayer).toHaveBeenCalled();
    }); */
    it('should call google.maps.Map with the right data', () => {
        const props = {
            isScriptLoaded: true,
            isScriptLoadSucceed: true,
            center: {
                lat: 31.4532,
                lng: -151.8723,
            },
        };
        const component = mount(<MapComponent className="my-map-class" {...props} />);
        component.update();
        expect(window.google.maps.Map).toHaveBeenCalledWith(expect.any(Node), {
            center: {
                lat: 31.4532,
                lng: -151.8723,
            },
            zoom: 15,
            disableDefaultUI: true,
        });
    });
    /*
    it('should call google.maps.Geocoder', () => {
        const component = mount(<MapComponent latitude={8} longitude={12} zoom={15} />);
        component.setProps(nextProps);
        expect(global.google.maps.Geocoder).toHaveBeenCalled();
    });
    it('should set the right state after isScriptLoaded and isScriptLoadSucceed are set to true', () => {
        const component = mount(<MapComponent latitude={8} longitude={12} zoom={15} />);
        expect(component.state().map).toBeUndefined();
        expect(component.state().geocoder).toBeUndefined();
        component.setProps(nextProps);
        expect(component.state().map).toEqual(expect.any(Object));
        expect(component.state().geocoder).toEqual(expect.any(Object));
    });
    it('should set the right state when a marker button is clicked', () => {
        const component = mount(
            <MapComponent latitude={8} longitude={12} zoom={15}>
                <MapMarker latitude={9} longitude={12} />
                <MapMarker latitude={10} longitude={15} />
                <MapMarker latitude={8} longitude={10} />
            </MapComponent>,
        );
        component.setProps(nextProps);
        component
            .find(StyledMarkerButton)
            .at(1)
            .simulate('click');
        expect(component.state().selectedMarker).toBe('marker-2');
    });
    it('should call map.panTo with the right data when a marker button is clicked', () => {
        const component = mount(
            <MapComponent latitude={8} longitude={12} zoom={15}>
                <MapMarker latitude={9} longitude={12} />
                <MapMarker latitude={10} longitude={15} />
                <MapMarker latitude={8} longitude={10} />
            </MapComponent>,
        );
        component.setProps(nextProps);
        component
            .find(StyledMarkerButton)
            .at(1)
            .simulate('click');
        expect(component.state().map.panTo).toHaveBeenCalledWith({
            lat: 10,
            lng: 15,
        });
    });
    it('should render right amount of children', () => {
        const component = mount(
            <MapComponent latitude={8} longitude={12} zoom={15}>
                <MapMarker latitude={9} longitude={12} />
                <MapMarker latitude={8} longitude={10} />
            </MapComponent>,
        );
        expect(component.find('ul').children().length).toBe(2);
    }); */
});
