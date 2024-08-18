import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Pony extends BasePetType {
    label = 'pony';
    static possibleColors = [PetColor.white];
    sequence = {
        startingState: States.like,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [
                    States.walkRight,
                    States.runRight,
                    States.like,
                    States.work,
                ],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.runRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.runLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.work,
                possibleNextStates: [
                    States.sitIdle, 
                    States.like],
            },
            {
                state: States.like,
                possibleNextStates: [
                    States.sitIdle,
                    States.work
                ],
            },
        ],
    };
    get emoji(): string {
        return '📎';
    }
    get hello(): string {
        return `work!`;
    }
}

export const PONY_NAMES: ReadonlyArray<string> = [
    'PoPo',
];
