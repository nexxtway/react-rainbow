import React from 'react';
import { mount } from 'enzyme';
import { Component as PlacesLookupComponent } from '../component';

const setupGoogleMapsMock = () => {
    const google = {
        maps: {
            places: {
                AutocompleteService: jest.fn(),
                PlacesService: jest.fn(),
            },
        },
    };

    global.window.google = google;
};

const nextProps = {
    isScriptLoaded: true,
    isScriptLoadSucceed: true,
};

beforeAll(() => {
    setupGoogleMapsMock();
});

describe('<PlacesLookupComponent/>', () => {
    it('should have the right class names', () => {
        const component = mount(<PlacesLookupComponent className="some-class" />);
        expect(component.find('.rainbow-google-address-lookup_container.some-class').exists()).toBe(
            true,
        );
    });

    it('should not call any google.maps.places service when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const component = mount(<PlacesLookupComponent className="some-class" />);
        component.setProps({
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        });
        expect(global.google.maps.places.AutocompleteService).not.toHaveBeenCalled();
        expect(global.google.maps.places.PlacesService).not.toHaveBeenCalled();
    });

    it('should not call any google.maps.places service when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps({
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        });
        expect(global.google.maps.places.AutocompleteService).not.toHaveBeenCalled();
        expect(global.google.maps.places.PlacesService).not.toHaveBeenCalled();
    });

    it('should not call AutocompleteService or PlacesService when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', () => {
        const component = mount(<PlacesLookupComponent isScriptLoaded />);
        component.setProps(nextProps);
        expect(global.google.maps.places.AutocompleteService).not.toHaveBeenCalled();
        expect(global.google.maps.places.PlacesService).not.toHaveBeenCalled();
    });

    it('should call google.maps.places.AutocompleteService and google.maps.places.PlacesService', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps(nextProps);
        expect(global.google.maps.places.AutocompleteService).toHaveBeenCalled();
        expect(global.google.maps.places.PlacesService).toHaveBeenCalled();
    });

    it('should be intialized after isScriptLoaded and isScriptLoadSucceed are set to true', () => {
        const component = mount(<PlacesLookupComponent />);
        expect(component.instance().initialized).toBe(false);
        component.setProps(nextProps);
        expect(component.instance().initialized).toBe(true);
    });
});
