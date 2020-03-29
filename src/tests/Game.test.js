import React from 'react'
import { shallow } from 'enzyme'
import Game from '../components/Game'
import Board from '../components/Board'
import { findByTestAttr, checkProps } from '../utils';

const setUp = (props={}) => {
    const component = shallow(<Game {...props} />);
    return component;
}

describe('Game Component', () => {

    describe('Have no props', () => {

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'gameComponent');
            expect(wrapper.length).toBe(1);
        });

    });

    describe('Board Component', () => {

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should render Board component', () => {
            const board = component.find(Board);
            expect(board.exists()).toBe(true);
        });

    });

    describe('Checking PropTypes', () => {

        it('Should not through a warning', () => {

            const expectedProps = {
                checkWinner: ()=>{},
            };

            const propsErr = checkProps(Game, expectedProps);
            expect(propsErr).toBeUndefined()
        });

    });

})
