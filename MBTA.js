const subwayLines = {
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

function oneLineStops(line, startStation, endStation) {
    const startIndex = subwayLines[line].indexOf(startStation);
    const endIndex = subwayLines[line].indexOf(endStation);
    let counter = 0;
    if (startIndex < endIndex) {
        for (let i = startIndex + 1; i <= endIndex; i++) {
            console.log(`Rider arrives at ${line} Line and ${subwayLines[line][i]}.`)
            counter++;
        }
    } else {
        for (let i = startIndex - 1; i >= endIndex; i--) {
            console.log(`Rider arrives at ${line} Line and ${subwayLines[line][i]}.`)
            counter++;
        }
    }
    return counter;
}



function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    let results = 0;
    console.log(`Rider boards the train a ${startLine} Line and ${startStation}.`)
    if (startLine === endLine) {
        results = oneLineStops(startLine, startStation, endStation)
    } else {
        results = oneLineStops(startLine, startStation, 'Park Street')
        console.log(`Rider transfers from ${startLine} Line to ${endLine} Line at Park Street.`)
        results += oneLineStops(endLine, 'Park Street', endStation)
    }
    console.log(`Rider exits the train a ${endLine} Line and ${endStation}.`)
    console.log(`${results} stops in total!`)
}


stopsBetweenStations('Red', 'South Station', 'Green', 'Copley')