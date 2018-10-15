import React from 'react';
import { mount } from 'enzyme';
import MapMarker from './../index';

const marker = {
    addListener: jest.fn(),
    setAnimation: jest.fn(),
};

global.google = {
    maps: {
        Marker: jest.fn(() => marker),
        event: {
            removeListener: jest.fn(),
        },
        Animation: {
            BOUNCE: 'bounce animation',
        },
    },
};

const newContext = {
    map: 'my map',
    geocoder: {
        geocode: jest.fn(),
    },
};

describe('<MapMarker/>', () => {
    it('should not retrun anything when latitude and longitude are not passed', () => {
        const component = mount(
            <MapMarker />,
        );
        expect(component.find('li').exists()).toBe(false);
    });
    it('should render the marker when latitude and longitude are passed', () => {
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        expect(component.find('li').exists()).toBe(true);
    });
    it('should not call google.maps.Marker when latitude is not passed', () => {
        const component = mount(
            <MapMarker longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        expect(global.google.maps.Marker).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Marker when longitude is not passed', () => {
        const component = mount(
            <MapMarker latitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        expect(global.google.maps.Marker).not.toHaveBeenCalled();
    });
    it('should not call google.maps.Marker when latitude and longitude are passed but map already exists', () => {
        const component = mount(
            <MapMarker latitude={10} longitude={15} map={{}} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        expect(global.google.maps.Marker).not.toHaveBeenCalled();
    });
    it('should call google.maps.Marker with the right data', () => {
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        expect(global.google.maps.Marker).toHaveBeenCalledWith({
            position: {
                lat: 5,
                lng: 10,
            },
            map: 'my map',
        });
    });
    it('should call addListener on marker with the right data', () => {
        marker.addListener.mockReset();
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        expect(marker.addListener).toHaveBeenCalledWith('click', expect.any(Function));
    });
    it('should call geocoder.geocode with the right data', () => {
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        expect(newContext.geocoder.geocode).toHaveBeenCalledWith({ location: {
            lat: 5,
            lng: 10,
        } }, expect.any(Function));
    });
    it('should call google.maps.event.removeListener when unmount the component', () => {
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        component.unmount();
        expect(global.google.maps.event.removeListener).toHaveBeenCalled();
    });
    it('should call setAnimation on marker with null when the marker button is clicked', () => {
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        const context = {
            ...newContext,
            privateOnClick: jest.fn(),
        };
        // this actually is context not props
        component.setProps(context);
        component.find('.rainbow-google-map-marker_button').simulate('click');
        expect(marker.setAnimation).toHaveBeenCalledWith(null);
    });
    it('should call setAnimation on marker with the bounce animation when mouseover event occurs on marker button', () => {
        marker.setAnimation.mockReset();
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        component.find('.rainbow-google-map-marker_button').simulate('mouseover');
        expect(marker.setAnimation).toHaveBeenCalledWith(global.google.maps.Animation.BOUNCE);
    });
    it('should call setAnimation on marker with the bounce animation when the marker button is focused', () => {
        marker.setAnimation.mockReset();
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        component.find('.rainbow-google-map-marker_button').simulate('focus');
        expect(marker.setAnimation).toHaveBeenCalledWith(global.google.maps.Animation.BOUNCE);
    });
    it('should call setAnimation on marker with null when mouseleave event occurs on marker button', () => {
        marker.setAnimation.mockReset();
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        component.find('.rainbow-google-map-marker_button').simulate('mouseleave');
        expect(marker.setAnimation).toHaveBeenCalledWith(null);
    });
    it('should call setAnimation on marker with null when the marker button is blurred', () => {
        marker.setAnimation.mockReset();
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        // this actually is context not props
        component.setProps(newContext);
        component.find('.rainbow-google-map-marker_button').simulate('blur');
        expect(marker.setAnimation).toHaveBeenCalledWith(null);
    });
    it('should set aria-pressed to false in marker button when it is not selected', () => {
        marker.setAnimation.mockReset();
        const component = mount(
            <MapMarker latitude={5} longitude={10} />,
        );
        expect(component.find('.rainbow-google-map-marker_button').prop('aria-pressed')).toBe(false);
    });
    it('should set aria-pressed to true in marker button when it is selected', () => {
        marker.setAnimation.mockReset();
        // here actually selectedMarker is injected via context, not props
        const component = mount(
            <MapMarker latitude={5} longitude={10} selectedMarker="marker-16" />,
        );
        expect(component.find('.rainbow-google-map-marker_button').prop('aria-pressed')).toBe(true);
    });
});
