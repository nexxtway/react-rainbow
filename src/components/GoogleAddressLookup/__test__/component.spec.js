import React from 'react';
import { mount } from 'enzyme';
import PlacesLookupComponent from '../component';

// global.google = {
//     maps: {
//         places: {
//             AutocompleteService: jest.fn(() => ({
//                 getPlacePredictions: jest.fn(),
//             })),
//         },
//     },
// };

const setupGoogleMapsMock = () => {
    const google = {
        maps: {
            places: {
                AutocompleteService: jest.fn(),
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

    it('should not call google.maps.places.AutocompleteService when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const component = mount(<PlacesLookupComponent className="some-class" />);
        component.setProps({
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        });
        expect(global.google.maps.places.AutocompleteService).not.toHaveBeenCalled();
    });

    it('should not call google.maps.places.AutocompleteService when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps({
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        });
        expect(global.google.maps.places.AutocompleteService).not.toHaveBeenCalled();
    });

    it('should not call AutocompleteService when isScriptLoaded and isScriptLoadSucceed are true but previous isScriptLoaded was true', () => {
        const component = mount(<PlacesLookupComponent isScriptLoaded />);
        component.setProps(nextProps);
        expect(global.google.maps.places.AutocompleteService).not.toHaveBeenCalled();
    });

    it('should call google.maps.places.AutocompleteService', () => {
        const component = mount(<PlacesLookupComponent />);
        component.setProps(nextProps);
        expect(global.google.maps.places.AutocompleteService).toHaveBeenCalled();
    });

    it('should be intialized after isScriptLoaded and isScriptLoadSucceed are set to true', () => {
        const component = mount(<PlacesLookupComponent />);
        expect(component.instance().fieldRef.current.initialized).toBe(false);
        component.setProps(nextProps);
        expect(component.instance().fieldRef.current.initialized).toBe(true);
    });

    it('should call onChange with the right data when select an option', () => {});
});
