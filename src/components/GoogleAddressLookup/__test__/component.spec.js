/* eslint-disable class-methods-use-this */
import React from 'react';
import { mount } from 'enzyme';
import { Component as PlacesLookupComponent } from '../component';

const setupGoogleMapsMock = () => {
    const google = {
        maps: {
            places: {
                AutocompleteService: class {},
                PlacesService: class {},
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
    it('should not call any google.maps.places service when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps({
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        });
        expect(component.instance().autocompleteService).toBe(undefined);
        expect(component.instance().placesService).toBe(undefined);
    });

    it('should not call any google.maps.places service when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps({
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        });
        expect(component.instance().autocompleteService).toBe(undefined);
        expect(component.instance().placesService).toBe(undefined);
    });

    it('should not call AutocompleteService or PlacesService when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', () => {
        const component = mount(<PlacesLookupComponent isScriptLoaded />);
        component.setProps(nextProps);
        expect(component.instance().autocompleteService).toBe(undefined);
        expect(component.instance().placesService).toBe(undefined);
    });

    it('should call google.maps.places.AutocompleteService and google.maps.places.PlacesService', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps(nextProps);
        expect(component.instance().autocompleteService).toBeInstanceOf(
            global.google.maps.places.AutocompleteService,
        );
        expect(component.instance().placesService).toBeInstanceOf(
            global.google.maps.places.PlacesService,
        );
    });

    it('should be intialized after isScriptLoaded and isScriptLoadSucceed are set to true', () => {
        const component = mount(<PlacesLookupComponent />);
        expect(component.instance().initialized).toBe(false);
        component.setProps(nextProps);
        expect(component.instance().initialized).toBe(true);
    });

    it('should fire onBlur with null when there is not value', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<PlacesLookupComponent onBlur={onBlurMockFn} />);
        component.setProps(nextProps);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(null);
    });
});
