#!/usr/bin/node
/*
    Print a square with the character #
<<<<<<< HEAD
=======

>>>>>>> a00bbf8ca8f24f5a887b7de4e636641549d5e98e
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

size = parseInt(process.argv[2], 10)

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
<<<<<<< HEAD

=======
>>>>>>> a00bbf8ca8f24f5a887b7de4e636641549d5e98e
