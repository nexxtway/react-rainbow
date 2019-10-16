import React from 'react';
import { mount } from 'enzyme';
import MapComponent from '../component';
import MapMarker from '../../MapMarker';
import StyledMarkerButton from '../../MapMarker/styled/button';

global.google = {
    maps: {
        Map: jest.fn(() => ({
            panTo: jest.fn(),
        })),
        Geocoder: jest.fn(() => ({
            geocode: jest.fn(),
        })),
        Marker: jest.fn(() => ({
            addListener: jest.fn(),
            setAnimation: jest.fn(),
        })),
    },
};

const nextProps = {
    isScriptLoaded: true,
    isScriptLoadSucceed: true,
};

describe('<MapComponent/>', () => {
    it('should have the right class names', () => {
        const component = mount(<MapComponent className="some-class" />);
        expect(component.find('.rainbow-google-map.some-class').exists()).toBe(true);
    });
    it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const component = mount(<MapComponent className="some-class" />);
        component.setProps({
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        });
        expect(global.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Map when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const component = mount(<MapComponent className="some-class" />);
        component.setProps({
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        });
        expect(global.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Map when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', () => {
        const component = mount(<MapComponent className="some-class" isScriptLoaded />);
        component.setProps(nextProps);
        expect(global.google.maps.Map).not.toHaveBeenCalled();
    });
    it('should call google.maps.Map with the right data', () => {
        const component = mount(<MapComponent latitude={8} longitude={12} zoom={15} />);
        component.setProps(nextProps);
        expect(global.google.maps.Map).toHaveBeenCalledWith(expect.any(Node), {
            center: {
                lat: 8,
                lng: 12,
            },
            zoom: 15,
            fullscreenControl: false,
        });
    });
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
    });
});
