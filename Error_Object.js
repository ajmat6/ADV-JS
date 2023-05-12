try {
    ajmat
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//custom error:
try {
    throw new Error("This is a custom error");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}