export type Instrument = 'Guitar' | 'Bass' | 'Drum' | 'Keyboard' | 'Synth';

export type Name = string;
export type Member = number;
export interface session {
    readonly name: Name;
    readonly member: Member;
    position: Instrument;
}

export type nothing = () => string;