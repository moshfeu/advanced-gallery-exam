export function moveElement(array, sourceIndex, offset) {
    const destinationIndex = sourceIndex + offset;
  
    if (destinationIndex >= array.length) {
        destinationIndex = array.length - 1;
    }
    array.splice(destinationIndex, 0, array.splice(sourceIndex, 1)[0]);

    return array;
}
