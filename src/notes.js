import React from 'react';

export const strings = [
    ['E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'Bb5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6'],
    ['B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'Bb5', 'B5'],
    ['G3', 'G#3', 'A3', 'Bb3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5'],
    ['D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'Bb3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5'],
    ['A2', 'Bb2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'Bb3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4'],
    ['E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'Bb2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'Bb3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4'],

];

export const noteRythms = ['1n', '2n', '4n', '8n', '8t', '16n', '16t'];

export const noteRythmSymbols = {
    '1n' : '𝅝',
    '2n' : '𝅗𝅥',
    '4n' : '𝅘𝅥',
    '8n' : '𝅘𝅥𝅮𝅘𝅥𝅮',
    '8t' : '𝅘𝅥𝅮𝅘𝅥𝅮𝅘𝅥𝅮',
    '16n' : '𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯',
    '16t' : '𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯𝅘𝅥𝅯'
};

export const rythmToTabSpace = {
    '1n' : '        ',
    '2n' : '    ',
    '4n' : '  ',
    '8n' : ' ',
    '8t' : ' ',
    '16n' : '',
    '16t' : ''
}

export const notesPerBeat = {
    '1n' : 0.25,
    '2n' : 0.5,
    '4n' : 1,
    '8n' : 2,
    '8t' : 3,
    '16n' : 4,
    '16t' : 6
}

export function noteCodeToSymbol(noteCode){
    return noteCode.replace('#', '♯').replace('b','♭');
}

export function rythmCodeToSymbol(rythmCode){
    return noteRythmSymbols[rythmCode];
}

export function tabToNoteCode(tab){
    if(tab){

        if(Array.isArray(tab)){
            var noteCodes = [];

            tab.forEach(note => {
                let tokens = note.split(':');
                noteCodes.push(strings[tokens[0]-1][tokens[1]]);
            });
            
            return noteCodes;
        }
        else{
            let tokens = tab.split(':');
            return strings[tokens[0]-1][tokens[1]];
        }
  
    }else{
        return tab;
    }
}

export function tabToNoteDomNode(tab){
    if(tab){

        var notes = tab.split(',');
        var domNode = notes.map((note, index) =>
            <p key={note + index} className="noteSymbol">{noteCodeToSymbol(tabToNoteCode(note))}<sub>{note.split(':')[0]}</sub></p>
        );
        return domNode;

    }else{
        return tab;
    }
}
